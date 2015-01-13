/*
 Copyright (c) 2013 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

(function(obj) {

	var ERR_BAD_FORMAT = "File format is not recognized.",
      ERR_ENCRYPTED = "File contains encrypted entry.",
      ERR_ZIP64 = "File is using Zip64 (4gb+ file size).",
      ERR_READ = "Error while reading zip file.",
      ERR_WRITE = "Error while writing zip file.",
      ERR_WRITE_DATA = "Error while writing file data.",
      ERR_READ_DATA = "Error while reading file data.",
      ERR_DUPLICATED_NAME = "File already exists.",
      CHUNK_SIZE = 512 * 1024,
	
	    TEXT_PLAIN = "text/plain",
	    MESSAGE_EVENT = "message",
      appendABViewSupported

	try {
		appendABViewSupported = new Blob([ new DataView(new ArrayBuffer(0)) ]).size === 0;
	} catch (e) {
	}

	function Crc32() {
		var crc = -1, that = this;
		that.append = function(data) {
			var offset, table = that.table;
			for (offset = 0; offset < data.length; offset++)
				crc = (crc >>> 8) ^ table[(crc ^ data[offset]) & 0xFF];
		};
		that.get = function() {
			return ~crc;
		};
	}
	Crc32.prototype.table = (function() {
		var i, j, t, table = [];
		for (i = 0; i < 256; i++) {
			t = i;
			for (j = 0; j < 8; j++)
				if (t & 1)
					t = (t >>> 1) ^ 0xEDB88320;
				else
					t = t >>> 1;
			table[i] = t;
		}
		return table;
	})();

	function blobSlice(blob, index, length) {
		if (blob.slice)
			return blob.slice(index, index + length);
		else if (blob.webkitSlice)
			return blob.webkitSlice(index, index + length);
		else if (blob.mozSlice)
			return blob.mozSlice(index, index + length);
		else if (blob.msSlice)
			return blob.msSlice(index, index + length);
	}

	function getDataHelper(byteLength, bytes) {
		var dataBuffer, dataArray;
		dataBuffer = new ArrayBuffer(byteLength);
		dataArray = new Uint8Array(dataBuffer);
		if (bytes)
			dataArray.set(bytes, 0);
		return {
			buffer : dataBuffer,
			array : dataArray,
			view : new DataView(dataBuffer)
		};
	}

	// Readers
	function Reader() {
	}

	function TextReader(text) {
		var that = this, blobReader;

		function init(callback, onerror) {
			var blob = new Blob([ text ], {
				type : TEXT_PLAIN
			});
			blobReader = new BlobReader(blob);
			blobReader.init(function() {
				that.size = blobReader.size;
				callback();
			}, onerror);
		}

		function readUint8Array(index, length, callback, onerror) {
			blobReader.readUint8Array(index, length, callback, onerror);
		}

		that.size = 0;
		that.init = init;
		that.readUint8Array = readUint8Array;
	}
	TextReader.prototype = new Reader();
	TextReader.prototype.constructor = TextReader;

	function Data64URIReader(dataURI) {
		var that = this, dataStart;

		function init(callback) {
			var dataEnd = dataURI.length;
			while (dataURI.charAt(dataEnd - 1) == "=")
				dataEnd--;
			dataStart = dataURI.indexOf(",") + 1;
			that.size = Math.floor((dataEnd - dataStart) * 0.75);
			callback();
		}

		function readUint8Array(index, length, callback) {
			var i, data = getDataHelper(length);
			var start = Math.floor(index / 3) * 4;
			var end = Math.ceil((index + length) / 3) * 4;
			var bytes = obj.atob(dataURI.substring(start + dataStart, end + dataStart));
			var delta = index - Math.floor(start / 4) * 3;
			for (i = delta; i < delta + length; i++)
				data.array[i - delta] = bytes.charCodeAt(i);
			callback(data.array);
		}

		that.size = 0;
		that.init = init;
		that.readUint8Array = readUint8Array;
	}
	Data64URIReader.prototype = new Reader();
	Data64URIReader.prototype.constructor = Data64URIReader;

	function BlobReader(blob) {
		var that = this;

		function init(callback) {
			this.size = blob.size;
			callback();
		}

		function readUint8Array(index, length, callback, onerror) {
			var reader = new FileReader();
			reader.onload = function(e) {
				callback(new Uint8Array(e.target.result));
			};
			reader.onerror = onerror;
			reader.readAsArrayBuffer(blobSlice(blob, index, length));
		}

		that.size = 0;
		that.init = init;
		that.readUint8Array = readUint8Array;
	}
	BlobReader.prototype = new Reader();
	BlobReader.prototype.constructor = BlobReader;

	// Writers

	function Writer() {
	}
	Writer.prototype.getData = function(callback) {
		callback(this.data);
	};

	function TextWriter(encoding) {
		var that = this, blob;

		function init(callback) {
			blob = new Blob([], {
				type : TEXT_PLAIN
			});
			callback();
		}

		function writeUint8Array(array, callback) {
			blob = new Blob([ blob, appendABViewSupported ? array : array.buffer ], {
				type : TEXT_PLAIN
			});
			callback();
		}

		function getData(callback, onerror) {
			var reader = new FileReader();
			reader.onload = function(e) {
				callback(e.target.result);
			};
			reader.onerror = onerror;
			reader.readAsText(blob, encoding);
		}

		that.init = init;
		that.writeUint8Array = writeUint8Array;
		that.getData = getData;
	}
	TextWriter.prototype = new Writer();
	TextWriter.prototype.constructor = TextWriter;

	function Data64URIWriter(contentType) {
		var that = this, data = "", pending = "";

		function init(callback) {
			data += "data:" + (contentType || "") + ";base64,";
			callback();
		}

		function writeUint8Array(array, callback) {
			var i, delta = pending.length, dataString = pending;
			pending = "";
			for (i = 0; i < (Math.floor((delta + array.length) / 3) * 3) - delta; i++)
				dataString += String.fromCharCode(array[i]);
			for (; i < array.length; i++)
				pending += String.fromCharCode(array[i]);
			if (dataString.length > 2)
				data += obj.btoa(dataString);
			else
				pending = dataString;
			callback();
		}

		function getData(callback) {
			callback(data + obj.btoa(pending));
		}

		that.init = init;
		that.writeUint8Array = writeUint8Array;
		that.getData = getData;
	}
	Data64URIWriter.prototype = new Writer();
	Data64URIWriter.prototype.constructor = Data64URIWriter;

	function BlobWriter(contentType) {
		var blob, that = this;

		function init(callback) {
			blob = new Blob([], {
				type : contentType
			});
			callback();
		}

		function writeUint8Array(array, callback) {
			blob = new Blob([ blob, appendABViewSupported ? array : array.buffer ], {
				type : contentType
			});
			callback();
		}

		function getData(callback) {
			callback(blob);
		}

		that.init = init;
		that.writeUint8Array = writeUint8Array;
		that.getData = getData;
	}
	BlobWriter.prototype = new Writer();
	BlobWriter.prototype.constructor = BlobWriter;

	// inflate/deflate core functions

	function launchWorkerProcess(worker, reader, writer, offset, size, onappend, onprogress, onend, onreaderror, onwriteerror) {
		var chunkIndex = 0, index, outputSize;

		function onflush() {
			worker.removeEventListener(MESSAGE_EVENT, onmessage, false);
			onend(outputSize);
		}

		function onmessage(event) {
			var message = event.data, data = message.data;

			if (message.onappend) {
				outputSize += data.length;
				writer.writeUint8Array(data, function() {
					onappend(false, data);
					step();
				}, onwriteerror);
			}
			if (message.onflush)
				if (data) {
					outputSize += data.length;
					writer.writeUint8Array(data, function() {
						onappend(false, data);
						onflush();
					}, onwriteerror);
				} else
					onflush();
			if (message.progress && onprogress)
				onprogress(index + message.current, size);
		}

		function step() {
			index = chunkIndex * CHUNK_SIZE;
			if (index < size)
				reader.readUint8Array(offset + index, Math.min(CHUNK_SIZE, size - index), function(array) {
					worker.postMessage({
						append : true,
						data : array
					});
					chunkIndex++;
					if (onprogress)
						onprogress(index, size);
					onappend(true, array);
				}, onreaderror);
			else
				worker.postMessage({
					flush : true
				});
		}

		outputSize = 0;
		worker.addEventListener(MESSAGE_EVENT, onmessage, false);
		step();
	}

	function launchProcess(process, reader, writer, offset, size, onappend, onprogress, onend, onreaderror, onwriteerror) {
		var chunkIndex = 0, index, outputSize = 0;

		function step() {
			var outputData;
			index = chunkIndex * CHUNK_SIZE;
			if (index < size)
				reader.readUint8Array(offset + index, Math.min(CHUNK_SIZE, size - index), function(inputData) {
					var outputData = process.append(inputData, function() {
						if (onprogress)
							onprogress(offset + index, size);
					});
					outputSize += outputData.length;
					onappend(true, inputData);
					writer.writeUint8Array(outputData, function() {
						onappend(false, outputData);
						chunkIndex++;
						setTimeout(step, 1);
					}, onwriteerror);
					if (onprogress)
						onprogress(index, size);
				}, onreaderror);
			else {
				outputData = process.flush();
				if (outputData) {
					outputSize += outputData.length;
					writer.writeUint8Array(outputData, function() {
						onappend(false, outputData);
						onend(outputSize);
					}, onwriteerror);
				} else
					onend(outputSize);
			}
		}

		step();
	}

	function inflate(reader, writer, offset, size, computeCrc32, onend, onprogress, onreaderror, onwriteerror) {
		var worker, crc32 = new Crc32();

		function oninflateappend(sending, array) {
			if (computeCrc32 && !sending)
				crc32.append(array);
		}

		function oninflateend(outputSize) {
			onend(outputSize, crc32.get());
		}

		if (obj.zip.useWebWorkers) {
      worker = new Worker(obj.zip.method.inflate)
			launchWorkerProcess(worker, reader, writer, offset, size, oninflateappend, onprogress, oninflateend, onreaderror, onwriteerror);
		} else
			launchProcess(new obj.zip.Inflater(), reader, writer, offset, size, oninflateappend, onprogress, oninflateend, onreaderror, onwriteerror);
		return worker;
	}

	function deflate(reader, writer, level, onend, onprogress, onreaderror, onwriteerror) {
		var worker, crc32 = new Crc32();

		function ondeflateappend(sending, array) {
			if (sending)
				crc32.append(array);
		}

		function ondeflateend(outputSize) {
			onend(outputSize, crc32.get());
		}

		function onmessage() {
			worker.removeEventListener(MESSAGE_EVENT, onmessage, false);
			launchWorkerProcess(worker, reader, writer, 0, reader.size, ondeflateappend, onprogress, ondeflateend, onreaderror, onwriteerror);
		}

		if (obj.zip.useWebWorkers) {
      worker = new Worker(obj.zip.method.deflate)
			worker.addEventListener(MESSAGE_EVENT, onmessage, false);
			worker.postMessage({
				init : true,
				level : level
			});
		} else
			launchProcess(new obj.zip.Deflater(), reader, writer, 0, reader.size, ondeflateappend, onprogress, ondeflateend, onreaderror, onwriteerror);
		return worker;
	}

	function copy(reader, writer, offset, size, computeCrc32, onend, onprogress, onreaderror, onwriteerror) {
		var chunkIndex = 0, crc32 = new Crc32();

		function step() {
			var index = chunkIndex * CHUNK_SIZE;
			if (index < size)
				reader.readUint8Array(offset + index, Math.min(CHUNK_SIZE, size - index), function(array) {
					if (computeCrc32)
						crc32.append(array);
					if (onprogress)
						onprogress(index, size, array);
					writer.writeUint8Array(array, function() {
						chunkIndex++;
						step();
					}, onwriteerror);
				}, onreaderror);
			else
				onend(size, crc32.get());
		}

		step();
	}

	// ZipReader

	function decodeASCII(str) {
		var i, out = "", charCode, extendedASCII = [ '\u00C7', '\u00FC', '\u00E9', '\u00E2', '\u00E4', '\u00E0', '\u00E5', '\u00E7', '\u00EA', '\u00EB',
				'\u00E8', '\u00EF', '\u00EE', '\u00EC', '\u00C4', '\u00C5', '\u00C9', '\u00E6', '\u00C6', '\u00F4', '\u00F6', '\u00F2', '\u00FB', '\u00F9',
				'\u00FF', '\u00D6', '\u00DC', '\u00F8', '\u00A3', '\u00D8', '\u00D7', '\u0192', '\u00E1', '\u00ED', '\u00F3', '\u00FA', '\u00F1', '\u00D1',
				'\u00AA', '\u00BA', '\u00BF', '\u00AE', '\u00AC', '\u00BD', '\u00BC', '\u00A1', '\u00AB', '\u00BB', '_', '_', '_', '\u00A6', '\u00A6',
				'\u00C1', '\u00C2', '\u00C0', '\u00A9', '\u00A6', '\u00A6', '+', '+', '\u00A2', '\u00A5', '+', '+', '-', '-', '+', '-', '+', '\u00E3',
				'\u00C3', '+', '+', '-', '-', '\u00A6', '-', '+', '\u00A4', '\u00F0', '\u00D0', '\u00CA', '\u00CB', '\u00C8', 'i', '\u00CD', '\u00CE',
				'\u00CF', '+', '+', '_', '_', '\u00A6', '\u00CC', '_', '\u00D3', '\u00DF', '\u00D4', '\u00D2', '\u00F5', '\u00D5', '\u00B5', '\u00FE',
				'\u00DE', '\u00DA', '\u00DB', '\u00D9', '\u00FD', '\u00DD', '\u00AF', '\u00B4', '\u00AD', '\u00B1', '_', '\u00BE', '\u00B6', '\u00A7',
				'\u00F7', '\u00B8', '\u00B0', '\u00A8', '\u00B7', '\u00B9', '\u00B3', '\u00B2', '_', ' ' ];
		for (i = 0; i < str.length; i++) {
			charCode = str.charCodeAt(i) & 0xFF;
			if (charCode > 127)
				out += extendedASCII[charCode - 128];
			else
				out += String.fromCharCode(charCode);
		}
		return out;
	}

	function decodeUTF8(string) {
		return decodeURIComponent(escape(string));
	}

	function getString(bytes) {
		var i, str = "";
		for (i = 0; i < bytes.length; i++)
			str += String.fromCharCode(bytes[i]);
		return str;
	}

	function getDate(timeRaw) {
		var date = (timeRaw & 0xffff0000) >> 16, time = timeRaw & 0x0000ffff;
		try {
			return new Date(1980 + ((date & 0xFE00) >> 9), ((date & 0x01E0) >> 5) - 1, date & 0x001F, (time & 0xF800) >> 11, (time & 0x07E0) >> 5,
					(time & 0x001F) * 2, 0);
		} catch (e) {
		}
	}

	function readCommonHeader(entry, data, index, centralDirectory, onerror) {
		entry.version = data.view.getUint16(index, true);
		entry.bitFlag = data.view.getUint16(index + 2, true);
		entry.compressionMethod = data.view.getUint16(index + 4, true);
		entry.lastModDateRaw = data.view.getUint32(index + 6, true);
		entry.lastModDate = getDate(entry.lastModDateRaw);
		if ((entry.bitFlag & 0x01) === 0x01) {
			onerror(ERR_ENCRYPTED);
			return;
		}
		if (centralDirectory || (entry.bitFlag & 0x0008) != 0x0008) {
			entry.crc32 = data.view.getUint32(index + 10, true);
			entry.compressedSize = data.view.getUint32(index + 14, true);
			entry.uncompressedSize = data.view.getUint32(index + 18, true);
		}
		if (entry.compressedSize === 0xFFFFFFFF || entry.uncompressedSize === 0xFFFFFFFF) {
			onerror(ERR_ZIP64);
			return;
		}
		entry.filenameLength = data.view.getUint16(index + 22, true);
		entry.extraFieldLength = data.view.getUint16(index + 24, true);
	}

	function createZipReader(reader, onerror) {
		function Entry() {
		}

		Entry.prototype.getData = function(writer, onend, onprogress, checkCrc32) {
			var that = this, worker;

			function terminate(callback, param) {
				if (worker)
					worker.terminate();
				worker = null;
				if (callback)
					callback(param);
			}

			function testCrc32(crc32) {
				var dataCrc32 = getDataHelper(4);
				dataCrc32.view.setUint32(0, crc32);
				return that.crc32 == dataCrc32.view.getUint32(0);
			}

			function getWriterData(uncompressedSize, crc32) {
				if (checkCrc32 && !testCrc32(crc32))
					onreaderror();
				else
					writer.getData(function(data) {
						terminate(onend, data);
					});
			}

			function onreaderror() {
				terminate(onerror, ERR_READ_DATA);
			}

			function onwriteerror() {
				terminate(onerror, ERR_WRITE_DATA);
			}

			reader.readUint8Array(that.offset, 30, function(bytes) {
				var data = getDataHelper(bytes.length, bytes), dataOffset;
				if (data.view.getUint32(0) != 0x504b0304) {
					onerror(ERR_BAD_FORMAT);
					return;
				}
				readCommonHeader(that, data, 4, false, onerror);
				dataOffset = that.offset + 30 + that.filenameLength + that.extraFieldLength;
				writer.init(function() {
					if (that.compressionMethod === 0)
						copy(reader, writer, dataOffset, that.compressedSize, checkCrc32, getWriterData, onprogress, onreaderror, onwriteerror);
					else
						worker = inflate(reader, writer, dataOffset, that.compressedSize, checkCrc32, getWriterData, onprogress, onreaderror, onwriteerror);
				}, onwriteerror);
			}, onreaderror);
		};

		function seekEOCDR(offset, entriesCallback) {
			reader.readUint8Array(reader.size - offset, offset, function(bytes) {
				var dataView = getDataHelper(bytes.length, bytes).view;
				if (dataView.getUint32(0) != 0x504b0506) {
					seekEOCDR(offset + 1, entriesCallback);
				} else {
					entriesCallback(dataView);
				}
			}, function() {
				onerror(ERR_READ);
			});
		}

		return {
			getEntries : function(callback) {
				if (reader.size < 22) {
					onerror(ERR_BAD_FORMAT);
					return;
				}
				// look for End of central directory record
				seekEOCDR(22, function(dataView) {
					var datalength, fileslength;
					datalength = dataView.getUint32(16, true);
					fileslength = dataView.getUint16(8, true);
					reader.readUint8Array(datalength, reader.size - datalength, function(bytes) {
						var i, index = 0, entries = [], entry, filename, comment, data = getDataHelper(bytes.length, bytes);
						for (i = 0; i < fileslength; i++) {
							entry = new Entry();
							if (data.view.getUint32(index) != 0x504b0102) {
								onerror(ERR_BAD_FORMAT);
								return;
							}
							readCommonHeader(entry, data, index + 6, true, onerror);
							entry.commentLength = data.view.getUint16(index + 32, true);
							entry.directory = ((data.view.getUint8(index + 38) & 0x10) == 0x10);
							entry.offset = data.view.getUint32(index + 42, true);
							filename = getString(data.array.subarray(index + 46, index + 46 + entry.filenameLength));
							entry.filename = ((entry.bitFlag & 0x0800) === 0x0800) ? decodeUTF8(filename) : decodeASCII(filename);
							if (!entry.directory && entry.filename.charAt(entry.filename.length - 1) == "/")
								entry.directory = true;
							comment = getString(data.array.subarray(index + 46 + entry.filenameLength + entry.extraFieldLength, index + 46
									+ entry.filenameLength + entry.extraFieldLength + entry.commentLength));
							entry.comment = ((entry.bitFlag & 0x0800) === 0x0800) ? decodeUTF8(comment) : decodeASCII(comment);
							entries.push(entry);
							index += 46 + entry.filenameLength + entry.extraFieldLength + entry.commentLength;
						}
						callback(entries);
					}, function() {
						onerror(ERR_READ);
					});
				});
			},
			close : function(callback) {
				if (callback)
					callback();
			}
		};
	}

	// ZipWriter

	function encodeUTF8(string) {
		return unescape(encodeURIComponent(string));
	}

	function getBytes(str) {
		var i, array = [];
		for (i = 0; i < str.length; i++)
			array.push(str.charCodeAt(i));
		return array;
	}

	function createZipWriter(writer, onerror, dontDeflate) {
		var worker, files = {}, filenames = [], datalength = 0;

		function terminate(callback, message) {
			if (worker)
				worker.terminate();
			worker = null;
			if (callback)
				callback(message);
		}

		function onwriteerror() {
			terminate(onerror, ERR_WRITE);
		}

		function onreaderror() {
			terminate(onerror, ERR_READ_DATA);
		}

		return {
			add : function(name, reader, onend, onprogress, options) {
				var header, filename, date;

				function writeHeader(callback) {
					var data;
					date = options.lastModDate || new Date();
					header = getDataHelper(26);
					files[name] = {
						headerArray : header.array,
						directory : options.directory,
						filename : filename,
						offset : datalength,
						comment : getBytes(encodeUTF8(options.comment || ""))
					};
					header.view.setUint32(0, 0x14000808);
					if (options.version)
						header.view.setUint8(0, options.version);
					if (!dontDeflate && options.level !== 0 && !options.directory)
						header.view.setUint16(4, 0x0800);
					header.view.setUint16(6, (((date.getHours() << 6) | date.getMinutes()) << 5) | date.getSeconds() / 2, true);
					header.view.setUint16(8, ((((date.getFullYear() - 1980) << 4) | (date.getMonth() + 1)) << 5) | date.getDate(), true);
					header.view.setUint16(22, filename.length, true);
					data = getDataHelper(30 + filename.length);
					data.view.setUint32(0, 0x504b0304);
					data.array.set(header.array, 4);
					data.array.set(filename, 30);
					datalength += data.array.length;
					writer.writeUint8Array(data.array, callback, onwriteerror);
				}

				function writeFooter(compressedLength, crc32) {
					var footer = getDataHelper(16);
					datalength += compressedLength || 0;
					footer.view.setUint32(0, 0x504b0708);
					if (typeof crc32 != "undefined") {
						header.view.setUint32(10, crc32, true);
						footer.view.setUint32(4, crc32, true);
					}
					if (reader) {
						footer.view.setUint32(8, compressedLength, true);
						header.view.setUint32(14, compressedLength, true);
						footer.view.setUint32(12, reader.size, true);
						header.view.setUint32(18, reader.size, true);
					}
					writer.writeUint8Array(footer.array, function() {
						datalength += 16;
						terminate(onend);
					}, onwriteerror);
				}

				function writeFile() {
					options = options || {};
					name = name.trim();
					if (options.directory && name.charAt(name.length - 1) != "/")
						name += "/";
					if (files.hasOwnProperty(name)) {
						onerror(ERR_DUPLICATED_NAME);
						return;
					}
					filename = getBytes(encodeUTF8(name));
					filenames.push(name);
					writeHeader(function() {
						if (reader)
							if (dontDeflate || options.level === 0)
								copy(reader, writer, 0, reader.size, true, writeFooter, onprogress, onreaderror, onwriteerror);
							else
								worker = deflate(reader, writer, options.level, writeFooter, onprogress, onreaderror, onwriteerror);
						else
							writeFooter();
					}, onwriteerror);
				}

				if (reader)
					reader.init(writeFile, onreaderror);
				else
					writeFile();
			},
			close : function(callback) {
				var data, length = 0, index = 0, indexFilename, file;
				for (indexFilename = 0; indexFilename < filenames.length; indexFilename++) {
					file = files[filenames[indexFilename]];
					length += 46 + file.filename.length + file.comment.length;
				}
				data = getDataHelper(length + 22);
				for (indexFilename = 0; indexFilename < filenames.length; indexFilename++) {
					file = files[filenames[indexFilename]];
					data.view.setUint32(index, 0x504b0102);
					data.view.setUint16(index + 4, 0x1400);
					data.array.set(file.headerArray, index + 6);
					data.view.setUint16(index + 32, file.comment.length, true);
					if (file.directory)
						data.view.setUint8(index + 38, 0x10);
					data.view.setUint32(index + 42, file.offset, true);
					data.array.set(file.filename, index + 46);
					data.array.set(file.comment, index + 46 + file.filename.length);
					index += 46 + file.filename.length + file.comment.length;
				}
				data.view.setUint32(index, 0x504b0506);
				data.view.setUint16(index + 8, filenames.length, true);
				data.view.setUint16(index + 10, filenames.length, true);
				data.view.setUint32(index + 12, length, true);
				data.view.setUint32(index + 16, datalength, true);
				writer.writeUint8Array(data.array, function() {
					terminate(function() {
						writer.getData(callback);
					});
				}, onwriteerror);
			}
		};
	}

	obj.zip = {
		Reader : Reader,
		Writer : Writer,
		BlobReader : BlobReader,
		Data64URIReader : Data64URIReader,
		TextReader : TextReader,
		BlobWriter : BlobWriter,
		Data64URIWriter : Data64URIWriter,
		TextWriter : TextWriter,
		createReader : function(reader, callback, onerror) {
			reader.init(function() {
				callback(createZipReader(reader, onerror));
			}, onerror);
		},
		createWriter : function(writer, callback, onerror, dontDeflate) {
			writer.init(function() {
				callback(createZipWriter(writer, onerror, dontDeflate));
			}, onerror);
		},
		useWebWorkers : true,
    toBlob : function(cnt,O){
      var blob = new Blob([cnt],{type:'application/JavaScript'})
      obj.zip.method[(O?'in':'de')+'flate'] = URL.createObjectURL(blob)},
    method:{
      deflate : 0,
      inflate : '!function(i){function e(){function i(i,e,t,n,s,o,f,u,w,v,h){var k,m,y,g,p,A,I,E,U,z,D,M,L,P,j;z=0,p=t;do a[i[e+z]]++,z++,p--;while(0!==p);if(a[0]==t)return f[0]=-1,u[0]=0,d;for(E=u[0],A=1;S>=A&&0===a[A];A++);for(I=A,A>E&&(E=A),p=S;0!==p&&0===a[p];p--);for(y=p,E>p&&(E=p),u[0]=E,P=1<<A;p>A;A++,P<<=1)if((P-=a[A])<0)return b;if((P-=a[p])<0)return b;for(a[p]+=P,l[1]=A=0,z=1,L=2;0!==--p;)l[L]=A+=a[z],L++,z++;p=0,z=0;do 0!==(A=i[e+z])&&(h[l[A]++]=p),z++;while(++p<t);for(t=l[y],l[0]=p=0,z=0,g=-1,M=-E,_[0]=0,D=0,j=0;y>=I;I++)for(k=a[I];0!==k--;){for(;I>M+E;){if(g++,M+=E,j=y-M,j=j>E?E:j,(m=1<<(A=I-M))>k+1&&(m-=k+1,L=I,j>A))for(;++A<j&&!((m<<=1)<=a[++L]);)m-=a[L];if(j=1<<A,v[0]+j>c)return b;_[g]=D=v[0],v[0]+=j,0!==g?(l[g]=p,r[0]=A,r[1]=E,A=p>>>M-E,r[2]=D-_[g-1]-A,w.set(r,3*(_[g-1]+A))):f[0]=D}for(r[1]=I-M,z>=t?r[0]=192:h[z]<n?(r[0]=h[z]<256?0:96,r[2]=h[z++]):(r[0]=o[h[z]-n]+16+64,r[2]=s[h[z++]-n]),m=1<<I-M,A=p>>>M;j>A;A+=m)w.set(r,3*(D+A));for(A=1<<I-1;0!==(p&A);A>>>=1)p^=A;for(p^=A,U=(1<<M)-1;(p&U)!=l[g];)g--,M-=E,U=(1<<M)-1}return 0!==P&&1!=y?x:d}function e(i){var e;for(t||(t=[],n=[],a=new Int32Array(S+1),r=[],_=new Int32Array(S),l=new Int32Array(S+1)),n.length<i&&(n=[]),e=0;i>e;e++)n[e]=0;for(e=0;S+1>e;e++)a[e]=0;for(e=0;3>e;e++)r[e]=0;_.set(a.subarray(0,S),0),l.set(a.subarray(0,S+1),0)}var t,n,a,r,_,l,s=this;s.inflate_trees_bits=function(a,r,_,l,d){var s;return e(19),t[0]=0,s=i(a,0,19,19,null,null,_,r,l,t,n),s==b?d.msg="oversubscribed dynamic bit lengths tree":(s==x||0===r[0])&&(d.msg="incomplete dynamic bit lengths tree",s=b),s},s.inflate_trees_dynamic=function(a,r,_,l,s,o,f,w,c){var v;return e(288),t[0]=0,v=i(_,0,a,257,p,A,o,l,w,t,n),v!=d||0===l[0]?(v==b?c.msg="oversubscribed literal/length tree":v!=u&&(c.msg="incomplete literal/length tree",v=b),v):(e(288),v=i(_,a,r,0,I,E,f,s,w,t,n),v!=d||0===s[0]&&a>257?(v==b?c.msg="oversubscribed distance tree":v==x?(c.msg="incomplete distance tree",v=b):v!=u&&(c.msg="empty distance tree with lengths",v=b),v):d)}}function t(){function i(i,e,t,n,a,r,_,l){var o,f,u,x,c,v,h,k,m,y,g,p,A,I,E,S;h=l.next_in_index,k=l.avail_in,c=_.bitb,v=_.bitk,m=_.write,y=m<_.read?_.read-m-1:_.end-m,g=w[i],p=w[e];do{for(;20>v;)k--,c|=(255&l.read_byte(h++))<<v,v+=8;if(o=c&g,f=t,u=n,S=3*(u+o),0!==(x=f[S]))for(;;){if(c>>=f[S+1],v-=f[S+1],0!==(16&x)){for(x&=15,A=f[S+2]+(c&w[x]),c>>=x,v-=x;15>v;)k--,c|=(255&l.read_byte(h++))<<v,v+=8;for(o=c&p,f=a,u=r,S=3*(u+o),x=f[S];;){if(c>>=f[S+1],v-=f[S+1],0!==(16&x)){for(x&=15;x>v;)k--,c|=(255&l.read_byte(h++))<<v,v+=8;if(I=f[S+2]+(c&w[x]),c>>=x,v-=x,y-=A,m>=I)E=m-I,m-E>0&&2>m-E?(_.window[m++]=_.window[E++],_.window[m++]=_.window[E++],A-=2):(_.window.set(_.window.subarray(E,E+2),m),m+=2,E+=2,A-=2);else{E=m-I;do E+=_.end;while(0>E);if(x=_.end-E,A>x){if(A-=x,m-E>0&&x>m-E){do _.window[m++]=_.window[E++];while(0!==--x)}else _.window.set(_.window.subarray(E,E+x),m),m+=x,E+=x,x=0;E=0}}if(m-E>0&&A>m-E){do _.window[m++]=_.window[E++];while(0!==--A)}else _.window.set(_.window.subarray(E,E+A),m),m+=A,E+=A,A=0;break}if(0!==(64&x))return l.msg="invalid distance code",A=l.avail_in-k,A=A>v>>3?v>>3:A,k+=A,h-=A,v-=A<<3,_.bitb=c,_.bitk=v,l.avail_in=k,l.total_in+=h-l.next_in_index,l.next_in_index=h,_.write=m,b;o+=f[S+2],o+=c&w[x],S=3*(u+o),x=f[S]}break}if(0!==(64&x))return 0!==(32&x)?(A=l.avail_in-k,A=A>v>>3?v>>3:A,k+=A,h-=A,v-=A<<3,_.bitb=c,_.bitk=v,l.avail_in=k,l.total_in+=h-l.next_in_index,l.next_in_index=h,_.write=m,s):(l.msg="invalid literal/length code",A=l.avail_in-k,A=A>v>>3?v>>3:A,k+=A,h-=A,v-=A<<3,_.bitb=c,_.bitk=v,l.avail_in=k,l.total_in+=h-l.next_in_index,l.next_in_index=h,_.write=m,b);if(o+=f[S+2],o+=c&w[x],S=3*(u+o),0===(x=f[S])){c>>=f[S+1],v-=f[S+1],_.window[m++]=f[S+2],y--;break}}else c>>=f[S+1],v-=f[S+1],_.window[m++]=f[S+2],y--}while(y>=258&&k>=10);return A=l.avail_in-k,A=A>v>>3?v>>3:A,k+=A,h-=A,v-=A<<3,_.bitb=c,_.bitk=v,l.avail_in=k,l.total_in+=h-l.next_in_index,l.next_in_index=h,_.write=m,d}var e,t,n,a,r=this,_=0,l=0,o=0,u=0,x=0,c=0,v=0,h=0,k=0,m=0;r.init=function(i,r,_,l,d,s){e=U,v=i,h=r,n=_,k=l,a=d,m=s,t=null},r.proc=function(r,y,g){var p,A,I,E,S,F,G,H=0,J=0,K=0;for(K=y.next_in_index,E=y.avail_in,H=r.bitb,J=r.bitk,S=r.write,F=S<r.read?r.read-S-1:r.end-S;;)switch(e){case U:if(F>=258&&E>=10&&(r.bitb=H,r.bitk=J,y.avail_in=E,y.total_in+=K-y.next_in_index,y.next_in_index=K,r.write=S,g=i(v,h,n,k,a,m,r,y),K=y.next_in_index,E=y.avail_in,H=r.bitb,J=r.bitk,S=r.write,F=S<r.read?r.read-S-1:r.end-S,g!=d)){e=g==s?q:C;break}o=v,t=n,l=k,e=z;case z:for(p=o;p>J;){if(0===E)return r.bitb=H,r.bitk=J,y.avail_in=E,y.total_in+=K-y.next_in_index,y.next_in_index=K,r.write=S,r.inflate_flush(y,g);g=d,E--,H|=(255&y.read_byte(K++))<<J,J+=8}if(A=3*(l+(H&w[p])),H>>>=t[A+1],J-=t[A+1],I=t[A],0===I){u=t[A+2],e=j;break}if(0!==(16&I)){x=15&I,_=t[A+2],e=D;break}if(0===(64&I)){o=I,l=A/3+t[A+2];break}if(0!==(32&I)){e=q;break}return e=C,y.msg="invalid literal/length code",g=b,r.bitb=H,r.bitk=J,y.avail_in=E,y.total_in+=K-y.next_in_index,y.next_in_index=K,r.write=S,r.inflate_flush(y,g);case D:for(p=x;p>J;){if(0===E)return r.bitb=H,r.bitk=J,y.avail_in=E,y.total_in+=K-y.next_in_index,y.next_in_index=K,r.write=S,r.inflate_flush(y,g);g=d,E--,H|=(255&y.read_byte(K++))<<J,J+=8}_+=H&w[p],H>>=p,J-=p,o=h,t=a,l=m,e=M;case M:for(p=o;p>J;){if(0===E)return r.bitb=H,r.bitk=J,y.avail_in=E,y.total_in+=K-y.next_in_index,y.next_in_index=K,r.write=S,r.inflate_flush(y,g);g=d,E--,H|=(255&y.read_byte(K++))<<J,J+=8}if(A=3*(l+(H&w[p])),H>>=t[A+1],J-=t[A+1],I=t[A],0!==(16&I)){x=15&I,c=t[A+2],e=L;break}if(0===(64&I)){o=I,l=A/3+t[A+2];break}return e=C,y.msg="invalid distance code",g=b,r.bitb=H,r.bitk=J,y.avail_in=E,y.total_in+=K-y.next_in_index,y.next_in_index=K,r.write=S,r.inflate_flush(y,g);case L:for(p=x;p>J;){if(0===E)return r.bitb=H,r.bitk=J,y.avail_in=E,y.total_in+=K-y.next_in_index,y.next_in_index=K,r.write=S,r.inflate_flush(y,g);g=d,E--,H|=(255&y.read_byte(K++))<<J,J+=8}c+=H&w[p],H>>=p,J-=p,e=P;case P:for(G=S-c;0>G;)G+=r.end;for(;0!==_;){if(0===F&&(S==r.end&&0!==r.read&&(S=0,F=S<r.read?r.read-S-1:r.end-S),0===F&&(r.write=S,g=r.inflate_flush(y,g),S=r.write,F=S<r.read?r.read-S-1:r.end-S,S==r.end&&0!==r.read&&(S=0,F=S<r.read?r.read-S-1:r.end-S),0===F)))return r.bitb=H,r.bitk=J,y.avail_in=E,y.total_in+=K-y.next_in_index,y.next_in_index=K,r.write=S,r.inflate_flush(y,g);r.window[S++]=r.window[G++],F--,G==r.end&&(G=0),_--}e=U;break;case j:if(0===F&&(S==r.end&&0!==r.read&&(S=0,F=S<r.read?r.read-S-1:r.end-S),0===F&&(r.write=S,g=r.inflate_flush(y,g),S=r.write,F=S<r.read?r.read-S-1:r.end-S,S==r.end&&0!==r.read&&(S=0,F=S<r.read?r.read-S-1:r.end-S),0===F)))return r.bitb=H,r.bitk=J,y.avail_in=E,y.total_in+=K-y.next_in_index,y.next_in_index=K,r.write=S,r.inflate_flush(y,g);g=d,r.window[S++]=u,F--,e=U;break;case q:if(J>7&&(J-=8,E++,K--),r.write=S,g=r.inflate_flush(y,g),S=r.write,F=S<r.read?r.read-S-1:r.end-S,r.read!=r.write)return r.bitb=H,r.bitk=J,y.avail_in=E,y.total_in+=K-y.next_in_index,y.next_in_index=K,r.write=S,r.inflate_flush(y,g);e=B;case B:return g=s,r.bitb=H,r.bitk=J,y.avail_in=E,y.total_in+=K-y.next_in_index,y.next_in_index=K,r.write=S,r.inflate_flush(y,g);case C:return g=b,r.bitb=H,r.bitk=J,y.avail_in=E,y.total_in+=K-y.next_in_index,y.next_in_index=K,r.write=S,r.inflate_flush(y,g);default:return g=f,r.bitb=H,r.bitk=J,y.avail_in=E,y.total_in+=K-y.next_in_index,y.next_in_index=K,r.write=S,r.inflate_flush(y,g)}},r.free=function(){}}function n(i,n){var a,r=this,_=G,l=0,o=0,u=0,v=[0],h=[0],k=new t,m=0,y=new Int32Array(3*c),g=0,p=new e;r.bitk=0,r.bitb=0,r.window=new Uint8Array(n),r.end=n,r.read=0,r.write=0,r.reset=function(i,e){e&&(e[0]=g),_==Q&&k.free(i),_=G,r.bitk=0,r.bitb=0,r.read=r.write=0},r.reset(i,null),r.inflate_flush=function(i,e){var t,n,a;return n=i.next_out_index,a=r.read,t=(a<=r.write?r.write:r.end)-a,t>i.avail_out&&(t=i.avail_out),0!==t&&e==x&&(e=d),i.avail_out-=t,i.total_out+=t,i.next_out.set(r.window.subarray(a,a+t),n),n+=t,a+=t,a==r.end&&(a=0,r.write==r.end&&(r.write=0),t=r.write-a,t>i.avail_out&&(t=i.avail_out),0!==t&&e==x&&(e=d),i.avail_out-=t,i.total_out+=t,i.next_out.set(r.window.subarray(a,a+t),n),n+=t,a+=t),i.next_out_index=n,r.read=a,e},r.proc=function(i,t){var n,x,c,g,A,I,E,S;for(g=i.next_in_index,A=i.avail_in,x=r.bitb,c=r.bitk,I=r.write,E=I<r.read?r.read-I-1:r.end-I;;)switch(_){case G:for(;3>c;){if(0===A)return r.bitb=x,r.bitk=c,i.avail_in=A,i.total_in+=g-i.next_in_index,i.next_in_index=g,r.write=I,r.inflate_flush(i,t);t=d,A--,x|=(255&i.read_byte(g++))<<c,c+=8}switch(n=7&x,m=1&n,n>>>1){case 0:x>>>=3,c-=3,n=7&c,x>>>=n,c-=n,_=H;break;case 1:var U=[],z=[],D=[[]],M=[[]];e.inflate_trees_fixed(U,z,D,M),k.init(U[0],z[0],D[0],0,M[0],0),x>>>=3,c-=3,_=Q;break;case 2:x>>>=3,c-=3,_=K;break;case 3:return x>>>=3,c-=3,_=V,i.msg="invalid block type",t=b,r.bitb=x,r.bitk=c,i.avail_in=A,i.total_in+=g-i.next_in_index,i.next_in_index=g,r.write=I,r.inflate_flush(i,t)}break;case H:for(;32>c;){if(0===A)return r.bitb=x,r.bitk=c,i.avail_in=A,i.total_in+=g-i.next_in_index,i.next_in_index=g,r.write=I,r.inflate_flush(i,t);t=d,A--,x|=(255&i.read_byte(g++))<<c,c+=8}if((65535&~x>>>16)!=(65535&x))return _=V,i.msg="invalid stored block lengths",t=b,r.bitb=x,r.bitk=c,i.avail_in=A,i.total_in+=g-i.next_in_index,i.next_in_index=g,r.write=I,r.inflate_flush(i,t);l=65535&x,x=c=0,_=0!==l?J:0!==m?R:G;break;case J:if(0===A)return r.bitb=x,r.bitk=c,i.avail_in=A,i.total_in+=g-i.next_in_index,i.next_in_index=g,r.write=I,r.inflate_flush(i,t);if(0===E&&(I==r.end&&0!==r.read&&(I=0,E=I<r.read?r.read-I-1:r.end-I),0===E&&(r.write=I,t=r.inflate_flush(i,t),I=r.write,E=I<r.read?r.read-I-1:r.end-I,I==r.end&&0!==r.read&&(I=0,E=I<r.read?r.read-I-1:r.end-I),0===E)))return r.bitb=x,r.bitk=c,i.avail_in=A,i.total_in+=g-i.next_in_index,i.next_in_index=g,r.write=I,r.inflate_flush(i,t);if(t=d,n=l,n>A&&(n=A),n>E&&(n=E),r.window.set(i.read_buf(g,n),I),g+=n,A-=n,I+=n,E-=n,0!==(l-=n))break;_=0!==m?R:G;break;case K:for(;14>c;){if(0===A)return r.bitb=x,r.bitk=c,i.avail_in=A,i.total_in+=g-i.next_in_index,i.next_in_index=g,r.write=I,r.inflate_flush(i,t);t=d,A--,x|=(255&i.read_byte(g++))<<c,c+=8}if(o=n=16383&x,(31&n)>29||(31&n>>5)>29)return _=V,i.msg="too many length or distance symbols",t=b,r.bitb=x,r.bitk=c,i.avail_in=A,i.total_in+=g-i.next_in_index,i.next_in_index=g,r.write=I,r.inflate_flush(i,t);if(n=258+(31&n)+(31&n>>5),!a||a.length<n)a=[];else for(S=0;n>S;S++)a[S]=0;x>>>=14,c-=14,u=0,_=N;case N:for(;4+(o>>>10)>u;){for(;3>c;){if(0===A)return r.bitb=x,r.bitk=c,i.avail_in=A,i.total_in+=g-i.next_in_index,i.next_in_index=g,r.write=I,r.inflate_flush(i,t);t=d,A--,x|=(255&i.read_byte(g++))<<c,c+=8}a[F[u++]]=7&x,x>>>=3,c-=3}for(;19>u;)a[F[u++]]=0;if(v[0]=7,n=p.inflate_trees_bits(a,v,h,y,i),n!=d)return t=n,t==b&&(a=null,_=V),r.bitb=x,r.bitk=c,i.avail_in=A,i.total_in+=g-i.next_in_index,i.next_in_index=g,r.write=I,r.inflate_flush(i,t);u=0,_=O;case O:for(;;){if(n=o,!(258+(31&n)+(31&n>>5)>u))break;var L,P;for(n=v[0];n>c;){if(0===A)return r.bitb=x,r.bitk=c,i.avail_in=A,i.total_in+=g-i.next_in_index,i.next_in_index=g,r.write=I,r.inflate_flush(i,t);t=d,A--,x|=(255&i.read_byte(g++))<<c,c+=8}if(n=y[3*(h[0]+(x&w[n]))+1],P=y[3*(h[0]+(x&w[n]))+2],16>P)x>>>=n,c-=n,a[u++]=P;else{for(S=18==P?7:P-14,L=18==P?11:3;n+S>c;){if(0===A)return r.bitb=x,r.bitk=c,i.avail_in=A,i.total_in+=g-i.next_in_index,i.next_in_index=g,r.write=I,r.inflate_flush(i,t);t=d,A--,x|=(255&i.read_byte(g++))<<c,c+=8}if(x>>>=n,c-=n,L+=x&w[S],x>>>=S,c-=S,S=u,n=o,S+L>258+(31&n)+(31&n>>5)||16==P&&1>S)return a=null,_=V,i.msg="invalid bit length repeat",t=b,r.bitb=x,r.bitk=c,i.avail_in=A,i.total_in+=g-i.next_in_index,i.next_in_index=g,r.write=I,r.inflate_flush(i,t);P=16==P?a[S-1]:0;do a[S++]=P;while(0!==--L);u=S}}h[0]=-1;var j=[],q=[],B=[],C=[];if(j[0]=9,q[0]=6,n=o,n=p.inflate_trees_dynamic(257+(31&n),1+(31&n>>5),a,j,q,B,C,y,i),n!=d)return n==b&&(a=null,_=V),t=n,r.bitb=x,r.bitk=c,i.avail_in=A,i.total_in+=g-i.next_in_index,i.next_in_index=g,r.write=I,r.inflate_flush(i,t);k.init(j[0],q[0],y,B[0],y,C[0]),_=Q;case Q:if(r.bitb=x,r.bitk=c,i.avail_in=A,i.total_in+=g-i.next_in_index,i.next_in_index=g,r.write=I,(t=k.proc(r,i,t))!=s)return r.inflate_flush(i,t);if(t=d,k.free(i),g=i.next_in_index,A=i.avail_in,x=r.bitb,c=r.bitk,I=r.write,E=I<r.read?r.read-I-1:r.end-I,0===m){_=G;break}_=R;case R:if(r.write=I,t=r.inflate_flush(i,t),I=r.write,E=I<r.read?r.read-I-1:r.end-I,r.read!=r.write)return r.bitb=x,r.bitk=c,i.avail_in=A,i.total_in+=g-i.next_in_index,i.next_in_index=g,r.write=I,r.inflate_flush(i,t);_=T;case T:return t=s,r.bitb=x,r.bitk=c,i.avail_in=A,i.total_in+=g-i.next_in_index,i.next_in_index=g,r.write=I,r.inflate_flush(i,t);case V:return t=b,r.bitb=x,r.bitk=c,i.avail_in=A,i.total_in+=g-i.next_in_index,i.next_in_index=g,r.write=I,r.inflate_flush(i,t);default:return t=f,r.bitb=x,r.bitk=c,i.avail_in=A,i.total_in+=g-i.next_in_index,i.next_in_index=g,r.write=I,r.inflate_flush(i,t)}},r.free=function(i){r.reset(i,null),r.window=null,y=null},r.set_dictionary=function(i,e,t){r.window.set(i.subarray(e,e+t),0),r.read=r.write=t},r.sync_point=function(){return _==H?1:0}}function a(){function i(i){return i&&i.istate?(i.total_in=i.total_out=0,i.msg=null,i.istate.mode=ae,i.istate.blocks.reset(i,null),d):f}var e=this;e.mode=0,e.method=0,e.was=[0],e.need=0,e.marker=0,e.wbits=0,e.inflateEnd=function(i){return e.blocks&&e.blocks.free(i),e.blocks=null,d},e.inflateInit=function(t,a){return t.msg=null,e.blocks=null,8>a||a>15?(e.inflateEnd(t),f):(e.wbits=a,t.istate.blocks=new n(t,1<<a),i(t),d)},e.inflate=function(i,e){var t,n;if(!i||!i.istate||!i.next_in)return f;for(e=e==h?x:d,t=x;;)switch(i.istate.mode){case Y:if(0===i.avail_in)return t;if(t=e,i.avail_in--,i.total_in++,(15&(i.istate.method=i.read_byte(i.next_in_index++)))!=X){i.istate.mode=_e,i.msg="unknown compression method",i.istate.marker=5;break}if((i.istate.method>>4)+8>i.istate.wbits){i.istate.mode=_e,i.msg="invalid window size",i.istate.marker=5;break}i.istate.mode=Z;case Z:if(0===i.avail_in)return t;if(t=e,i.avail_in--,i.total_in++,n=255&i.read_byte(i.next_in_index++),0!==((i.istate.method<<8)+n)%31){i.istate.mode=_e,i.msg="incorrect header check",i.istate.marker=5;break}if(0===(n&W)){i.istate.mode=ae;break}i.istate.mode=$;case $:if(0===i.avail_in)return t;t=e,i.avail_in--,i.total_in++,i.istate.need=4278190080&(255&i.read_byte(i.next_in_index++))<<24,i.istate.mode=ie;case ie:if(0===i.avail_in)return t;t=e,i.avail_in--,i.total_in++,i.istate.need+=16711680&(255&i.read_byte(i.next_in_index++))<<16,i.istate.mode=ee;case ee:if(0===i.avail_in)return t;t=e,i.avail_in--,i.total_in++,i.istate.need+=65280&(255&i.read_byte(i.next_in_index++))<<8,i.istate.mode=te;case te:return 0===i.avail_in?t:(t=e,i.avail_in--,i.total_in++,i.istate.need+=255&i.read_byte(i.next_in_index++),i.istate.mode=ne,o);case ne:return i.istate.mode=_e,i.msg="need dictionary",i.istate.marker=0,f;case ae:if(t=i.istate.blocks.proc(i,t),t==b){i.istate.mode=_e,i.istate.marker=0;break}if(t==d&&(t=e),t!=s)return t;t=e,i.istate.blocks.reset(i,i.istate.was),i.istate.mode=re;case re:return s;case _e:return b;default:return f}},e.inflateSetDictionary=function(i,e,t){var n=0,a=t;return i&&i.istate&&i.istate.mode==ne?(a>=1<<i.istate.wbits&&(a=(1<<i.istate.wbits)-1,n=t-a),i.istate.blocks.set_dictionary(e,n,a),i.istate.mode=ae,d):f},e.inflateSync=function(e){var t,n,a,r,_;if(!e||!e.istate)return f;if(e.istate.mode!=_e&&(e.istate.mode=_e,e.istate.marker=0),0===(t=e.avail_in))return x;for(n=e.next_in_index,a=e.istate.marker;0!==t&&4>a;)e.read_byte(n)==le[a]?a++:a=0!==e.read_byte(n)?0:4-a,n++,t--;return e.total_in+=n-e.next_in_index,e.next_in_index=n,e.avail_in=t,e.istate.marker=a,4!=a?b:(r=e.total_in,_=e.total_out,i(e),e.total_in=r,e.total_out=_,e.istate.mode=ae,d)},e.inflateSyncPoint=function(i){return i&&i.istate&&i.istate.blocks?i.istate.blocks.sync_point():f}}function r(){}function _(){var i=this,e=new r,t=512,n=v,a=new Uint8Array(t),_=!1;e.inflateInit(),e.next_out=a,i.append=function(i,r){var l,o,f=[],b=0,u=0,w=0;if(0!==i.length){e.next_in_index=0,e.next_in=i,e.avail_in=i.length;do{if(e.next_out_index=0,e.avail_out=t,0!==e.avail_in||_||(e.next_in_index=0,_=!0),l=e.inflate(n),_&&l==x)return-1;if(l!=d&&l!=s)throw"inflating: "+e.msg;if((_||l==s)&&e.avail_in==i.length)return-1;e.next_out_index&&(e.next_out_index==t?f.push(new Uint8Array(a)):f.push(new Uint8Array(a.subarray(0,e.next_out_index)))),w+=e.next_out_index,r&&e.next_in_index>0&&e.next_in_index!=b&&(r(e.next_in_index),b=e.next_in_index)}while(e.avail_in>0||0===e.avail_out);return o=new Uint8Array(w),f.forEach(function(i){o.set(i,u),u+=i.length}),o}},i.flush=function(){e.inflateEnd()}}var l=15,d=0,s=1,o=2,f=-2,b=-3,u=-4,x=-5,w=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],c=1440,v=0,h=4,k=9,m=5,y=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],g=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],p=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],A=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],I=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],E=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],S=15;e.inflate_trees_fixed=function(i,e,t,n){return i[0]=k,e[0]=m,t[0]=y,n[0]=g,d};var U=0,z=1,D=2,M=3,L=4,P=5,j=6,q=7,B=8,C=9,F=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],G=0,H=1,J=2,K=3,N=4,O=5,Q=6,R=7,T=8,V=9,W=32,X=8,Y=0,Z=1,$=2,ie=3,ee=4,te=5,ne=6,ae=7,re=12,_e=13,le=[0,0,255,255];r.prototype={inflateInit:function(i){var e=this;return e.istate=new a,i||(i=l),e.istate.inflateInit(e,i)},inflate:function(i){var e=this;return e.istate?e.istate.inflate(e,i):f},inflateEnd:function(){var i=this;if(!i.istate)return f;var e=i.istate.inflateEnd(i);return i.istate=null,e},inflateSync:function(){var i=this;return i.istate?i.istate.inflateSync(i):f},inflateSetDictionary:function(i,e){var t=this;return t.istate?t.istate.inflateSetDictionary(t,i,e):f},read_byte:function(i){var e=this;return e.next_in.subarray(i,i+1)[0]},read_buf:function(i,e){var t=this;return t.next_in.subarray(i,i+e)}};var de;i.zip?i.zip.Inflater=_:(de=new _,i.addEventListener("message",function(e){var t=e.data;t.append&&i.postMessage({onappend:!0,data:de.append(t.data,function(e){i.postMessage({progress:!0,current:e})})}),t.flush&&(de.flush(),i.postMessage({onflush:!0}))},!1))}(this)'
    }
  }
  zip.toBlob(zip.method.inflate,1)
})(this);
/*
 Copyright (c) 2013 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

(function() {

	var CHUNK_SIZE = 512 * 1024;

	var TextWriter = zip.TextWriter, //
	BlobWriter = zip.BlobWriter, //
	Data64URIWriter = zip.Data64URIWriter, //
	Reader = zip.Reader, //
	TextReader = zip.TextReader, //
	BlobReader = zip.BlobReader, //
	Data64URIReader = zip.Data64URIReader, //
	createReader = zip.createReader, //
	createWriter = zip.createWriter;

	function ZipBlobReader(entry) {
		var that = this, blobReader;

		function init(callback) {
			this.size = entry.uncompressedSize;
			callback();
		}

		function getData(callback) {
			if (that.data)
				callback();
			else
				entry.getData(new BlobWriter(), function(data) {
					that.data = data;
					blobReader = new BlobReader(data);
					callback();
				}, null, that.checkCrc32);
		}

		function readUint8Array(index, length, callback, onerror) {
			getData(function() {
				blobReader.readUint8Array(index, length, callback, onerror);
			}, onerror);
		}

		that.size = 0;
		that.init = init;
		that.readUint8Array = readUint8Array;
	}
	ZipBlobReader.prototype = new Reader();
	ZipBlobReader.prototype.constructor = ZipBlobReader;
	ZipBlobReader.prototype.checkCrc32 = false;

	function getTotalSize(entry) {
		var size = 0;

		function process(entry) {
			size += entry.uncompressedSize || 0;
			entry.children.forEach(process);
		}

		process(entry);
		return size;
	}

	function initReaders(entry, onend, onerror) {
		var index = 0;

		function next() {
			index++;
			if (index < entry.children.length)
				process(entry.children[index]);
			else
				onend();
		}

		function process(child) {
			if (child.directory)
				initReaders(child, next, onerror);
			else {
				child.reader = new child.Reader(child.data, onerror);
				child.reader.init(function() {
					child.uncompressedSize = child.reader.size;
					next();
				});
			}
		}

		if (entry.children.length)
			process(entry.children[index]);
		else
			onend();
	}

	function detach(entry) {
		var children = entry.parent.children;
		children.forEach(function(child, index) {
			if (child.id == entry.id)
				children.splice(index, 1);
		});
	}

	function exportZip(zipWriter, entry, onend, onprogress, totalSize) {
		var currentIndex = 0;

		function process(zipWriter, entry, onend, onprogress, totalSize) {
			var childIndex = 0;

			function exportChild() {
				var child = entry.children[childIndex];
				if (child)
					zipWriter.add(child.getFullname(), child.reader, function() {
						currentIndex += child.uncompressedSize || 0;
						process(zipWriter, child, function() {
							childIndex++;
							exportChild();
						}, onprogress, totalSize);
					}, function(index) {
						if (onprogress)
							onprogress(currentIndex + index, totalSize);
					}, {
						directory : child.directory,
						version : child.zipVersion
					});
				else
					onend();
			}

			exportChild();
		}

		process(zipWriter, entry, onend, onprogress, totalSize);
	}

	function addFileEntry(zipEntry, fileEntry, onend, onerror) {
		function getChildren(fileEntry, callback) {
			if (fileEntry.isDirectory)
				fileEntry.createReader().readEntries(callback);
			if (fileEntry.isFile)
				callback([]);
		}

		function process(zipEntry, fileEntry, onend) {
			getChildren(fileEntry, function(children) {
				var childIndex = 0;

				function addChild(child) {
					function nextChild(childFileEntry) {
						process(childFileEntry, child, function() {
							childIndex++;
							processChild();
						});
					}

					if (child.isDirectory)
						nextChild(zipEntry.addDirectory(child.name));
					if (child.isFile)
						child.file(function(file) {
							var childZipEntry = zipEntry.addBlob(child.name, file);
							childZipEntry.uncompressedSize = file.size;
							nextChild(childZipEntry);
						}, onerror);
				}

				function processChild() {
					var child = children[childIndex];
					if (child)
						addChild(child);
					else
						onend();
				}

				processChild();
			});
		}

		if (fileEntry.isDirectory)
			process(zipEntry, fileEntry, onend);
		else
			fileEntry.file(function(file) {
				zipEntry.addBlob(fileEntry.name, file);
				onend();
			}, onerror);
	}

	function getFileEntry(fileEntry, entry, onend, onprogress, onerror, totalSize, checkCrc32) {
		var currentIndex = 0;

		function process(fileEntry, entry, onend, onprogress, onerror, totalSize) {
			var childIndex = 0;

			function addChild(child) {
				function nextChild(childFileEntry) {
					currentIndex += child.uncompressedSize || 0;
					process(childFileEntry, child, function() {
						childIndex++;
						processChild();
					}, onprogress, onerror, totalSize);
				}

				if (child.directory)
					fileEntry.getDirectory(child.name, {
						create : true
					}, nextChild, onerror);
				else
					fileEntry.getFile(child.name, {
						create : true
					}, function(file) {
						child.getData(new zip.FileWriter(file, zip.getMimeType(child.name)), nextChild, function(index) {
							if (onprogress)
								onprogress(currentIndex + index, totalSize);
						}, checkCrc32);
					}, onerror);
			}

			function processChild() {
				var child = entry.children[childIndex];
				if (child)
					addChild(child);
				else
					onend();
			}

			processChild();
		}

		if (entry.directory)
			process(fileEntry, entry, onend, onprogress, onerror, totalSize);
		else
			entry.getData(new zip.FileWriter(fileEntry, zip.getMimeType(entry.name)), onend, onprogress, checkCrc32);
	}

	function resetFS(fs) {
		fs.entries = [];
		fs.root = new ZipDirectoryEntry(fs);
	}

	function bufferedCopy(reader, writer, onend, onprogress, onerror) {
		var chunkIndex = 0;

		function stepCopy() {
			var index = chunkIndex * CHUNK_SIZE;
			if (onprogress)
				onprogress(index, reader.size);
			if (index < reader.size)
				reader.readUint8Array(index, Math.min(CHUNK_SIZE, reader.size - index), function(array) {
					writer.writeUint8Array(new Uint8Array(array), function() {
						chunkIndex++;
						stepCopy();
					});
				}, onerror);
			else
				writer.getData(onend);
		}

		stepCopy();
	}

	function getEntryData(writer, onend, onprogress, onerror) {
		var that = this;
		if (!writer || (writer.constructor == that.Writer && that.data))
			onend(that.data);
		else {
			if (!that.reader)
				that.reader = new that.Reader(that.data, onerror);
			that.reader.init(function() {
				writer.init(function() {
					bufferedCopy(that.reader, writer, onend, onprogress, onerror);
				}, onerror);
			});
		}
	}

	function addChild(parent, name, params, directory) {
		if (parent.directory)
			return directory ? new ZipDirectoryEntry(parent.fs, name, params, parent) : new ZipFileEntry(parent.fs, name, params, parent);
		else
			throw "Parent entry is not a directory.";
	}

	function ZipEntry() {
	}

	ZipEntry.prototype = {
		init : function(fs, name, params, parent) {
			var that = this;
			if (fs.root && parent && parent.getChildByName(name))
				throw "Entry filename already exists.";
			if (!params)
				params = {};
			that.fs = fs;
			that.name = name;
			that.id = fs.entries.length;
			that.parent = parent;
			that.children = [];
			that.zipVersion = params.zipVersion || 0x14;
			that.uncompressedSize = 0;
			fs.entries.push(that);
			if (parent)
				that.parent.children.push(that);
		},
		getFileEntry : function(fileEntry, onend, onprogress, onerror, checkCrc32) {
			var that = this;
			initReaders(that, function() {
				getFileEntry(fileEntry, that, onend, onprogress, onerror, getTotalSize(that), checkCrc32);
			}, onerror);
		},
		moveTo : function(target) {
			var that = this;
			if (target.directory) {
				if (!target.isDescendantOf(that)) {
					if (that != target) {
						if (target.getChildByName(that.name))
							throw "Entry filename already exists.";
						detach(that);
						that.parent = target;
						target.children.push(that);
					}
				} else
					throw "Entry is a ancestor of target entry.";
			} else
				throw "Target entry is not a directory.";
		},
		getFullname : function() {
			var that = this, fullname = that.name, entry = that.parent;
			while (entry) {
				fullname = (entry.name ? entry.name + "/" : "") + fullname;
				entry = entry.parent;
			}
			return fullname;
		},
		isDescendantOf : function(ancestor) {
			var entry = this.parent;
			while (entry && entry.id != ancestor.id)
				entry = entry.parent;
			return !!entry;
		}
	};
	ZipEntry.prototype.constructor = ZipEntry;

	var ZipFileEntryProto;

	function ZipFileEntry(fs, name, params, parent) {
		var that = this;
		ZipEntry.prototype.init.call(that, fs, name, params, parent);
		that.Reader = params.Reader;
		that.Writer = params.Writer;
		that.data = params.data;
		that.getData = params.getData || getEntryData;
	}

	ZipFileEntry.prototype = ZipFileEntryProto = new ZipEntry();
	ZipFileEntryProto.constructor = ZipFileEntry;
	ZipFileEntryProto.getText = function(onend, onprogress, checkCrc32, encoding) {
		this.getData(new TextWriter(encoding), onend, onprogress, checkCrc32);
	};
	ZipFileEntryProto.getBlob = function(mimeType, onend, onprogress, checkCrc32) {
		this.getData(new BlobWriter(mimeType), onend, onprogress, checkCrc32);
	};
	ZipFileEntryProto.getData64URI = function(mimeType, onend, onprogress, checkCrc32) {
		this.getData(new Data64URIWriter(mimeType), onend, onprogress, checkCrc32);
	};

	var ZipDirectoryEntryProto;

	function ZipDirectoryEntry(fs, name, params, parent) {
		var that = this;
		ZipEntry.prototype.init.call(that, fs, name, params, parent);
		that.directory = true;
	}

	ZipDirectoryEntry.prototype = ZipDirectoryEntryProto = new ZipEntry();
	ZipDirectoryEntryProto.constructor = ZipDirectoryEntry;
	ZipDirectoryEntryProto.addDirectory = function(name) {
		return addChild(this, name, null, true);
	};
	ZipDirectoryEntryProto.addText = function(name, text) {
		return addChild(this, name, {
			data : text,
			Reader : TextReader,
			Writer : TextWriter
		});
	};
	ZipDirectoryEntryProto.addBlob = function(name, blob) {
		return addChild(this, name, {
			data : blob,
			Reader : BlobReader,
			Writer : BlobWriter
		});
	};
	ZipDirectoryEntryProto.addData64URI = function(name, dataURI) {
		return addChild(this, name, {
			data : dataURI,
			Reader : Data64URIReader,
			Writer : Data64URIWriter
		});
	};
	ZipDirectoryEntryProto.addFileEntry = function(fileEntry, onend, onerror) {
		addFileEntry(this, fileEntry, onend, onerror);
	};
	ZipDirectoryEntryProto.addData = function(name, params) {
		return addChild(this, name, params);
	};
	ZipDirectoryEntryProto.importBlob = function(blob, onend, onerror) {
		this.importZip(new BlobReader(blob), onend, onerror);
	};
	ZipDirectoryEntryProto.importText = function(text, onend, onerror) {
		this.importZip(new TextReader(text), onend, onerror);
	};
	ZipDirectoryEntryProto.importData64URI = function(dataURI, onend, onerror) {
		this.importZip(new Data64URIReader(dataURI), onend, onerror);
	};
	ZipDirectoryEntryProto.exportBlob = function(onend, onprogress, onerror) {
		this.exportZip(new BlobWriter("application/zip"), onend, onprogress, onerror);
	};
	ZipDirectoryEntryProto.exportText = function(onend, onprogress, onerror) {
		this.exportZip(new TextWriter(), onend, onprogress, onerror);
	};
	ZipDirectoryEntryProto.exportFileEntry = function(fileEntry, onend, onprogress, onerror) {
		this.exportZip(new zip.FileWriter(fileEntry, "application/zip"), onend, onprogress, onerror);
	};
	ZipDirectoryEntryProto.exportData64URI = function(onend, onprogress, onerror) {
		this.exportZip(new Data64URIWriter("application/zip"), onend, onprogress, onerror);
	};
	ZipDirectoryEntryProto.importZip = function(reader, onend, onerror) {
		var that = this;
		createReader(reader, function(zipReader) {
			zipReader.getEntries(function(entries) {
				entries.forEach(function(entry) {
					var parent = that, path = entry.filename.split("/"), name = path.pop();
					path.forEach(function(pathPart) {
						parent = parent.getChildByName(pathPart) || new ZipDirectoryEntry(that.fs, pathPart, null, parent);
					});
					if (!entry.directory)
						addChild(parent, name, {
							data : entry,
							Reader : ZipBlobReader
						});
				});
				onend();
			});
		}, onerror);
	};
	ZipDirectoryEntryProto.exportZip = function(writer, onend, onprogress, onerror) {
		var that = this;
		initReaders(that, function() {
			createWriter(writer, function(zipWriter) {
				exportZip(zipWriter, that, function() {
					zipWriter.close(onend);
				}, onprogress, getTotalSize(that));
			}, onerror);
		}, onerror);
	};
	ZipDirectoryEntryProto.getChildByName = function(name) {
		var childIndex, child, that = this;
		for (childIndex = 0; childIndex < that.children.length; childIndex++) {
			child = that.children[childIndex];
			if (child.name == name)
				return child;
		}
	};

	function FS() {
		resetFS(this);
	}
	FS.prototype = {
		remove : function(entry) {
			detach(entry);
			this.entries[entry.id] = null;
		},
		find : function(fullname) {
			var index, path = fullname.split("/"), node = this.root;
			for (index = 0; node && index < path.length; index++)
				node = node.getChildByName(path[index]);
			return node;
		},
		getById : function(id) {
			return this.entries[id];
		},
		importBlob : function(blob, onend, onerror) {
			resetFS(this);
			this.root.importBlob(blob, onend, onerror);
		},
		importText : function(text, onend, onerror) {
			resetFS(this);
			this.root.importText(text, onend, onerror);
		},
		importData64URI : function(dataURI, onend, onerror) {
			resetFS(this);
			this.root.importData64URI(dataURI, onend, onerror);
		},
		exportBlob : function(onend, onprogress, onerror) {
			this.root.exportBlob(onend, onprogress, onerror);
		},
		exportText : function(onend, onprogress, onerror) {
			this.root.exportText(onend, onprogress, onerror);
		},
		exportFileEntry : function(fileEntry, onend, onprogress, onerror) {
			this.root.exportFileEntry(fileEntry, onend, onprogress, onerror);
		},
		exportData64URI : function(onend, onprogress, onerror) {
			this.root.exportData64URI(onend, onprogress, onerror);
		}
	};

	zip.fs = {
		FS : FS,
		ZipDirectoryEntry : ZipDirectoryEntry,
		ZipFileEntry : ZipFileEntry
	};

	zip.getMimeType = function() {
		return "application/octet-stream";
	};

})();
/*
 Copyright (c) 2013 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

(function() {

	var ERR_HTTP_RANGE = "HTTP Range not supported.";

	var Reader = zip.Reader;
	var Writer = zip.Writer;
	
	var ZipDirectoryEntry;

	var appendABViewSupported;
	try {
		appendABViewSupported = new Blob([ new DataView(new ArrayBuffer(0)) ]).size === 0;
	} catch (e) {
	}

	function HttpReader(url) {
		var that = this;

		function getData(callback, onerror) {
			var request;
			if (!that.data) {
				request = new XMLHttpRequest();
				request.addEventListener("load", function() {
					if (!that.size)
						that.size = Number(request.getResponseHeader("Content-Length"));
					that.data = new Uint8Array(request.response);
					callback();
				}, false);
				request.addEventListener("error", onerror, false);
				request.open("GET", url);
				request.responseType = "arraybuffer";
				request.send();
			} else
				callback();
		}

		function init(callback, onerror) {
			var request = new XMLHttpRequest();
			request.addEventListener("load", function() {
				that.size = Number(request.getResponseHeader("Content-Length"));
				callback();
			}, false);
			request.addEventListener("error", onerror, false);
			request.open("HEAD", url);
			request.send();
		}

		function readUint8Array(index, length, callback, onerror) {
			getData(function() {
				callback(new Uint8Array(that.data.subarray(index, index + length)));
			}, onerror);
		}

		that.size = 0;
		that.init = init;
		that.readUint8Array = readUint8Array;
	}
	HttpReader.prototype = new Reader();
	HttpReader.prototype.constructor = HttpReader;

	function HttpRangeReader(url) {
		var that = this;

		function init(callback, onerror) {
			var request = new XMLHttpRequest();
			request.addEventListener("load", function() {
				that.size = Number(request.getResponseHeader("Content-Length"));
				if (request.getResponseHeader("Accept-Ranges") == "bytes")
					callback();
				else
					onerror(ERR_HTTP_RANGE);
			}, false);
			request.addEventListener("error", onerror, false);
			request.open("HEAD", url);
			request.send();
		}

		function readArrayBuffer(index, length, callback, onerror) {
			var request = new XMLHttpRequest();
			request.open("GET", url);
			request.responseType = "arraybuffer";
			request.setRequestHeader("Range", "bytes=" + index + "-" + (index + length - 1));
			request.addEventListener("load", function() {
				callback(request.response);
			}, false);
			request.addEventListener("error", onerror, false);
			request.send();
		}

		function readUint8Array(index, length, callback, onerror) {
			readArrayBuffer(index, length, function(arraybuffer) {
				callback(new Uint8Array(arraybuffer));
			}, onerror);
		}

		that.size = 0;
		that.init = init;
		that.readUint8Array = readUint8Array;
	}
	HttpRangeReader.prototype = new Reader();
	HttpRangeReader.prototype.constructor = HttpRangeReader;

	function ArrayBufferReader(arrayBuffer) {
		var that = this;

		function init(callback, onerror) {
			that.size = arrayBuffer.byteLength;
			callback();
		}

		function readUint8Array(index, length, callback, onerror) {
			callback(new Uint8Array(arrayBuffer.slice(index, index + length)));
		}

		that.size = 0;
		that.init = init;
		that.readUint8Array = readUint8Array;
	}
	ArrayBufferReader.prototype = new Reader();
	ArrayBufferReader.prototype.constructor = ArrayBufferReader;

	function ArrayBufferWriter() {
		var array, that = this;

		function init(callback, onerror) {
			array = new Uint8Array();
			callback();
		}

		function writeUint8Array(arr, callback, onerror) {
			var tmpArray = new Uint8Array(array.length + arr.length);
			tmpArray.set(array);
			tmpArray.set(arr, array.length);
			array = tmpArray;
			callback();
		}

		function getData(callback) {
			callback(array.buffer);
		}

		that.init = init;
		that.writeUint8Array = writeUint8Array;
		that.getData = getData;
	}
	ArrayBufferWriter.prototype = new Writer();
	ArrayBufferWriter.prototype.constructor = ArrayBufferWriter;

	function FileWriter(fileEntry, contentType) {
		var writer, that = this;

		function init(callback, onerror) {
			fileEntry.createWriter(function(fileWriter) {
				writer = fileWriter;
				callback();
			}, onerror);
		}

		function writeUint8Array(array, callback, onerror) {
			var blob = new Blob([ appendABViewSupported ? array : array.buffer ], {
				type : contentType
			});
			writer.onwrite = function() {
				writer.onwrite = null;
				callback();
			};
			writer.onerror = onerror;
			writer.write(blob);
		}

		function getData(callback) {
			fileEntry.file(callback);
		}

		that.init = init;
		that.writeUint8Array = writeUint8Array;
		that.getData = getData;
	}
	FileWriter.prototype = new Writer();
	FileWriter.prototype.constructor = FileWriter;

	zip.FileWriter = FileWriter;
	zip.HttpReader = HttpReader;
	zip.HttpRangeReader = HttpRangeReader;
	zip.ArrayBufferReader = ArrayBufferReader;
	zip.ArrayBufferWriter = ArrayBufferWriter;

	if (zip.fs) {
		ZipDirectoryEntry = zip.fs.ZipDirectoryEntry;
		ZipDirectoryEntry.prototype.addHttpContent = function(name, URL, useRangeHeader) {
			function addChild(parent, name, params, directory) {
				if (parent.directory)
					return directory ? new ZipDirectoryEntry(parent.fs, name, params, parent) : new zip.fs.ZipFileEntry(parent.fs, name, params, parent);
				else
					throw "Parent entry is not a directory.";
			}

			return addChild(this, name, {
				data : URL,
				Reader : useRangeHeader ? HttpRangeReader : HttpReader
			});
		};
		ZipDirectoryEntry.prototype.importHttpContent = function(URL, useRangeHeader, onend, onerror) {
			this.importZip(useRangeHeader ? new HttpRangeReader(URL) : new HttpReader(URL), onend, onerror);
		};
		zip.fs.FS.prototype.importHttpContent = function(URL, useRangeHeader, onend, onerror) {
			this.entries = [];
			this.root = new ZipDirectoryEntry(this);
			this.root.importHttpContent(URL, useRangeHeader, onend, onerror);
		};
	}

})();
/* 
 * DataView.js:
 * An implementation of the DataView class on top of typed arrays.
 * Useful for Firefox 4 which implements TypedArrays but not DataView.
 *
 * Copyright 2011, David Flanagan
 *
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 *
 *   Redistributions of source code must retain the above copyright notice, 
 *   this list of conditions and the following disclaimer.
 *
 *   Redistributions in binary form must reproduce the above copyright notice, 
 *   this list of conditions and the following disclaimer in the documentation.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE 
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE 
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE 
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) 
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT 
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT 
 * OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
"use strict";

(function(global) {
    // If DataView already exists, do nothing
    if (global.DataView) return;

    // If ArrayBuffer is not supported, fail with an error
    if (!global.ArrayBuffer) fail("ArrayBuffer not supported");

    // If ES5 is not supported, fail
    if (!Object.defineProperties) fail("This module requires ECMAScript 5");

    // Figure if the platform is natively little-endian.
    // If the integer 0x00000001 is arranged in memory as 01 00 00 00 then
    // we're on a little endian platform. On a big-endian platform we'd get
    // get bytes 00 00 00 01 instead.
    var nativele = new Int8Array(new Int32Array([1]).buffer)[0] === 1;

    // A temporary array for copying or reversing bytes into.
    // Since js is single-threaded, we only need this one static copy
    var temp = new Uint8Array(8);

    // The DataView() constructor
    global.DataView = function DataView(buffer, offset, length) {
        if (!(buffer instanceof ArrayBuffer)) fail("Bad ArrayBuffer");

        // Default values for omitted arguments
        offset = offset || 0;
        length = length || (buffer.byteLength - offset);

        if (offset < 0 || length < 0 || offset + length > buffer.byteLength) fail("Illegal offset and/or length");

        // Define the 3 read-only, non-enumerable ArrayBufferView properties
        Object.defineProperties(this, {
            buffer: {
                value: buffer,
                enumerable: false,
                writable: false,
                configurable: false
            },
            byteOffset: {
                value: offset,
                enumerable: false,
                writable: false,
                configurable: false
            },
            byteLength: {
                value: length,
                enumerable: false,
                writable: false,
                configurable: false
            },
            _bytes: {
                value: new Uint8Array(buffer, offset, length),
                enumerable: false,
                writable: false,
                configurable: false
            }
        });
    }

    // The DataView prototype object
    global.DataView.prototype = {
        constructor: DataView,

        getInt8: function getInt8(offset) {
            return get(this, Int8Array, 1, offset);
        },
        getUint8: function getUint8(offset) {
            return get(this, Uint8Array, 1, offset);
        },
        getInt16: function getInt16(offset, le) {
            return get(this, Int16Array, 2, offset, le);
        },
        getUint16: function getUint16(offset, le) {
            return get(this, Uint16Array, 2, offset, le);
        },
        getInt32: function getInt32(offset, le) {
            return get(this, Int32Array, 4, offset, le);
        },
        getUint32: function getUint32(offset, le) {
            return get(this, Uint32Array, 4, offset, le);
        },
        getFloat32: function getFloat32(offset, le) {
            return get(this, Float32Array, 4, offset, le);
        },
        getFloat64: function getFloat32(offset, le) {
            return get(this, Float64Array, 8, offset, le);
        },


        setInt8: function setInt8(offset, value) {
            set(this, Int8Array, 1, offset, value);
        },
        setUint8: function setUint8(offset, value) {
            set(this, Uint8Array, 1, offset, value);
        },
        setInt16: function setInt16(offset, value, le) {
            set(this, Int16Array, 2, offset, value, le);
        },
        setUint16: function setUint16(offset, value, le) {
            set(this, Uint16Array, 2, offset, value, le);
        },
        setInt32: function setInt32(offset, value, le) {
            set(this, Int32Array, 4, offset, value, le);
        },
        setUint32: function setUint32(offset, value, le) {
            set(this, Uint32Array, 4, offset, value, le);
        },
        setFloat32: function setFloat32(offset, value, le) {
            set(this, Float32Array, 4, offset, value, le);
        },
        setFloat64: function setFloat64(offset, value, le) {
            set(this, Float64Array, 8, offset, value, le);
        }
    };

    // The get() utility function used by the get methods


    function get(view, type, size, offset, le) {
        if (offset === undefined) fail("Missing required offset argument");

        if (offset < 0 || offset + size > view.byteLength) fail("Invalid index: " + offset);

        if (size === 1 || !! le === nativele) {
            // This is the easy case: the desired endianness 
            // matches the native endianness.
            // Typed arrays require proper alignment.  DataView does not.
            if ((view.byteOffset + offset) % size === 0) return (new type(view.buffer, view.byteOffset + offset, 1))[0];
            else {
                // Copy bytes into the temp array, to fix alignment
                for (var i = 0; i < size; i++)
                temp[i] = view._bytes[offset + i];
                // Now wrap that buffer with an array of the desired type
                return (new type(temp.buffer))[0];
            }
        } else {
            // If the native endianness doesn't match the desired, then
            // we have to reverse the bytes
            for (var i = 0; i < size; i++)
            temp[size - i - 1] = view._bytes[offset + i];
            return (new type(temp.buffer))[0];
        }
    }

    // The set() utility function used by the set methods


    function set(view, type, size, offset, value, le) {
        if (offset === undefined) fail("Missing required offset argument");
        if (value === undefined) fail("Missing required value argument");

        if (offset < 0 || offset + size > view.byteLength) fail("Invalid index: " + offset);

        if (size === 1 || !! le === nativele) {
            // This is the easy case: the desired endianness 
            // matches the native endianness.
            if ((view.byteOffset + offset) % size === 0) {
                (new type(view.buffer, view.byteOffset + offset, 1))[0] = value;
            } else {
                (new type(temp.buffer))[0] = value;
                // Now copy the bytes into the view's buffer
                for (var i = 0; i < size; i++)
                view._bytes[i + offset] = temp[i];
            }
        } else {
            // If the native endianness doesn't match the desired, then
            // we have to reverse the bytes
            // Store the value into our temporary buffer
            (new type(temp.buffer))[0] = value;

            // Now copy the bytes, in reverse order, into the view's buffer
            for (var i = 0; i < size; i++)
            view._bytes[offset + i] = temp[size - 1 - i];
        }
    }

    function fail(msg) {
        throw new Error(msg);
    }
}(this))