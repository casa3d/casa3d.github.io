f={//filler
  s:'script',
  d:document,
  blob:function(dt){
    var b=new Blob([dt],{type:'text/java'+f.s})
    return URL.createObjectURL(b)},
  bs:typeof u!='undefined'&&u.path?
    u.path
    :'',
  callback:function(){
    zipFs=new zip.fs.FS()
    //console.log('importing lbs.zip')
    zipFs.importHttpContent(
      f.file,
      0,//false because I don't need RangeData
      function(){f.ch=zipFs.root.children
        //console.log('ok,',f.file,'imported.')
        f.ch[0].getText(
          function(data){//callback when data finishes loading
            f.new({
              src:f.blob(data),
              cb:/s\./.test(f.file)?(
                f.file=f.bs+'js/lbs2.zip',
                f.callback)
                :0})})})},
  new:function(o){var s
    f.d.head.appendChild(s=f.d.createElement(f.s))
    s.src=o.src
    o.cb&&(s.onload=o.cb)},
  init:function(){
    f.new({
      src:f.bs+'js/zip.js',
      cb:f.callback})}}
f.init(f.file=f.bs+'js/lbs.zip')