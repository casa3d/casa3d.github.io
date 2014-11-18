f={//filler
  d:document,
  s:'script',
  blob:function(dt){
    var b=new Blob([dt],{type:'application/java'+f.s})
    return URL.createObjectURL(b)},
  new:function(o){var s
    f.d.head.appendChild(s=f.d.createElement(f.s))
    s.src=o.src
    o.cb&&(s.onload=o.cb)},
  callback:function(){
    zipFs=new zip.fs.FS()
    //console.log('importing lbs.zip')
    zipFs.importHttpContent(
      f.file,
      0,//false because I don't need RangeData
      function(){f.ch=zipFs.root.children
        //console.log('ok, imported. now reading big file')
        f.ch[0].getText(
          function(data){//callback when data finishes loading
            f.new({src:f.blob(data)})})})},
  init:function(){
    f.new({
      src:'js/zip.js',
      cb:f.callback})}}
f.init(f.file='js/lbs.zip')