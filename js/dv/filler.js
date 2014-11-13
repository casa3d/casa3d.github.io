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
      0,//false because I don't need ...
      function(){f.ch=zipFs.root.children
        //console.log('ok, imported. now reading files')
        var i,n=f.n=[],gv=f.gv=[],go=f.go='jquery-2.x three t house move drgNrsz ops vectrix asset fnt deflate'.split(' ')
        for(i in f.ch)gv[i]=f.ch[i].name.split('.js')[0]
        for(i in go)n[i]=gv.indexOf(go[i])
        go=go.length,f.i=0
        f.load=function(){
          /*console.log('reading file #',f.i,':',f.ch[n[f.i]].name)
          f.i<f.go.length&&console.log(f.i,':',f.ch[f.n[f.i]],'==',f.go[f.n[f.i]])*/
          f.ch[n[f.i]].getText(
            function(data){//callback when data finishes loading
              //console.log(f.ch[f.i]&&f.ch[f.i].name)
              if(++f.i==go-2)return f.load(o.asset=data)
              var url=f.blob(data)
              return f.i<go?
                f.new({
                  src:url,
                  cb:f.load})
                :(
                $(f.s).remove(),
                zip.method.deflate=url)})}//I'm setting deflate 'cuz 2nd parameter is false (I did'nt send it)
        f.load()})},
  init:function(){
    f.new({
      src:'js/zip.js',
      cb:f.callback})}}
f.init(f.file='js/lbs.zip')