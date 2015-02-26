//Δtime u.c((x=new Date()).getSeconds(),x.getMilliseconds()),
o={
  a:u.new('a'),
  W:innerWidth/100,
  l0p:innerHeight/10,
  ap:'application/',
  asset:asset,
  Cs:[
    'xyzxyz'.split(''),
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]],
  e:u.s('⥀ 👁 ⥁  '),
  fs:'FullScreen',
  ελ:'αβγδεζηθ'.split(''),//ελλαδα: αβγδεζηθικλμνξοπρστυφχψω
  house:[],
  img:{
    _id:u.s('br do fl gl me wa wi wo'),
    en:u.s('brick door floor glass metal wall window wood'),
    es:u.s('ladrillo puerta piso vidrio metal pared ventana madera')},//object folder: house,brick,door,glass, wall,window,wood
  ob3:new T.Object3D,
  S:510,//offset among houses, 10 is ´coz "I let user notice when finish one house & when starts another"
  Π:Math.PI,
  π:Math.PI/2,
  pl:u.f('a,b','return new T.PlaneGeometry(a,b)'),
  URL:u.f('b','return URL.createObjectURL(b)'),
  ae:u.f('e,a','for(var i in a)e.addEventListener(i,a[i])'),
  tn:{//thumbnail, if it´s already added any tx before then it won´t repeat its tn
    blob:[]},//perhaps user'd put his/her own textures from hard-disk "blob"
  dw:function(){
    this.innerHTML=this.innerHTML==''?'':''
    mn.style.left=mn.style.left?'':-16*2+'%'},
  lr:function(c,r){//left-right: container, right?
    var s=c.style,p=Number(s.left.slice(0,-1))
    this.r||r?
      Math.abs(p/100)+1<c.childElementCount/10&&(s.left=p-100+'%')
      :p&&(s.left=p+100+'%')},
  measure:function(s,m,d){//size, measure, divider
    d=s>1e6?(
      m='M',
      1e6)
      :1e3
    return '<br>'+Number((s/d).toFixed(2))+' '+m+'B'},
  op:[
    u.f('m.r(m.ρκ=0)'),//rotate 90° 0 means left-key
    m.act,//rotate
    u.f('m.rt(2)'),//rotate -90° 2 means right-key
    dr.act,//enable/disable drgNrsz's approval
    u.f(//toggle fullscreen
      'u.d[o.is]?'+//if currently browser is in fullscreen then:
        'u.d[o.ex]()'+//exit
        ':u.b[o.rq]()'),//otherwise request fullscreen
    function(){var p=m.P,r=m.c,v=o.Cs,i,fC,sC,α,ε//position, rotation, Cameras, first, second camera, αχζισ, element
      this.innerHTML=this.innerHTML=='🎥'?(
        fC=1,
        sC=2,
        '📹')
        :(fC=2,
        sC=1,
        '🎥')
      for(i in v[0]){
        //v[fC][i]=p[o.a[i]],v[fC][i+3]=r[o.a[i]],
        ε=i<3?p:r,α=v[0][i]
        v[fC][i]=ε[α] //element's current αχζισ
        ε[α]=v[sC][i]}},
    u.f('o.rst(0)'),
    u.f('o.rst(1)'),
    0,
    u.f(//log out
      'u.shift(),'+
      'setTimeout(u.out,100)'),
    u.f("open(location.href+'support','_new')")],
  tg:function(s,i,r){//parentStyle, className
    u.tc(e,c)
    r=o.dvs[i]
    s[i=r[0]]=s[i]!='0px'?
      0
      :-r[1]+'%'},
  vlz:function(){var v=this.value
    v?
      m.i=v
      :this.value=m.i},
  zhCL:'上左权'.split(''),//Shang, Zuǒ, Quán
  in:function(a,f,m){//accept, function, multiple
    return u.new(
      'input',
      {type:'file',
      accept:a,
      multiple:m,
      onchange:u.f(f+'(this.files)')})},
  rst:function(o){//reset
    var dc=地点.children
    dc[1].children[o].value=dc[2].children[o].value=dc[3].children[o].value=0
    o=c[o?'rotation':'position']
    o.x=o.y=o.z=0},
  mn:function(b){//contextMenu
    var i=0,dv,s=u.s('🌄  ⤴ ⤿ 🔘 ⤾ ⤵'),e
    u.ap(dv=o.mn=u.new('div',{id:'opsMenu'}),h.tls)
    dv.rt=u.f('xy,p','dr.o&&dr.o.id!=6&&(dr.o.rotation[xy]=dr.o.rotation[xy]+o.π/2*p)')
    dv.fn=[
      u.f('o.i.click()'),
      function(O){
        u.sc(dv,'no'),
        (O=dr.o)&&(
          O.parent.id==o.added.id?
            o.added.remove(O)
            :t.s.children[1].remove(O))},
        'x',//lie                                  ⤴
        'y',//rotate to the left               ⤿
        u.f('dr.o&&dr.o.rotation.set(0,0,0)'),//  🔘
        'y',//rotate to the right                     ⤾
        'x']//raise or stand up                   ⤵

    for(i in s){
      u.ap(e=u.new(b,{innerHTML:s[i]}),dv)
      e.onclick=i<3||i==4?
        dv.fn[i]
        :u.f('o.mn.rt("'+dv.fn[i]+'",'+(i<5?'-':'')+'1)')
      i++}},
  usrAgnt:{Chrome:'webkit',Trident:'ms',Firefox:'moz'},
  rb:function(F){//read blob; since picture´s source comes from hard disk I´ll have to read it as blob (security reasons:users´ files are private)
    var i=0,I,a,ф,b=o.tn.blob//,f,de,clck//iterator,files,doesn'tExists,clock
    //u.c(i,F.length)
    while(i<F.length){de=1,f=F[i++]//assigning
      for(I in b)if(b[I].sz==f.size&&!(de=0))break//{u.c('IAE');break}
      o.add(
        de?(
          ф=o.URL(f),
          o.tn.blob.push(a={nm:f.name,src:ф,sz:f.size}),
          ф)//since blob "de" yet, let's create it
          :b[I].src,
        a)}//otherwise it means it !de || alreadyExists/wasCached
    o.F=F},
  add:function(src,a){//source, attributes like: name, parent
    var cp=c.position,P=((cp.x+o.S/2)/o.S+1+'')[0],p=o.ob3.clone()//position
    //console.log('from o.add:',P,src)
    a&&(
      u.ap(
        u.new('div',{
          innerHTML:'<img src='+src+'><label>'+a.nm+' '+o.measure(a.sz,'K'),
          onclick:u.f('o.add(this.children[0].src)')}),
        图片),
      o.lr(图片,1))
    t.ad({
      a:'10 20['+src+'] ',
      p:P>0?
        t.s.children[P]||p
        :p,
      gp:t.s})
    /*, p:o.added append ´em to textures-container aka "added"
    in order to avoid same picture position I´d do either
    move each picture just a little (based on prior pic´s ps)
    or simply move camera a few back each time, like so:*/
    setTimeout(function(v,i,g,o){
      v=(g=(o=t.shape).geometry).vertices
      v[0].x=v[0].y=10,v[2].y=(v[1].x=90)+100
      dr.rsz.centre(t.shape)
      o=o.position
      o.x=cp.x
      o.y=cp.y
      o.z=cp.z-200
      cp.y+=.1
      cp.z+=.1},10)},
  cc:function(){//change color lighting intensity
    var c=t.s.__lights[0].color
    c.r=c.g=c.b=this.value/100},//and finally match them all
  ld:u.f('e','alert(e||"100% ?")'),
  dwn:function(n){//save casa3d.js inside casa# Universal Time C.zip
    o.a.download='casa#'+n+' ('+new Date().toUTCString().split(/, | GMT/)[1]+').zip'
    if(h.nv.msSaveBlob)h.nv.msSaveBlob(blb,o.a.download)
    else{
      clickEvent=u.d.createEvent('MouseEvent')
      clickEvent.initMouseEvent('click',1,1,h.w,0,0,0,0,0,0,0,0,0,0,null)//type, canBubble, cancelable, view,  detail, screenX, screenY, clientX, clientY,  ctrlKey, altKey, shiftKey, metaKey,  button, relatedTarget
      o.a.dispatchEvent(clickEvent)}},
  str:function(P){//spawn string
    var x,g,s='',m,M,f,r,p,rt,i,v//object x, geometry, string, Material, folder, position, rotation/repeat, iterator, vertices
    x=t.s.children[1].children[P]
    p=x.position
    r=x.rotation
    if(g=x.geometry)s=g.width/100+' '+g.height/100
    else{s=''
      v=(x=x.children[0]).geometry.vertices
      for(i in v)s+=Number((v[i].x/100).toFixed(6))+','+Number((v[i].y/100).toFixed(6))+' '
      s=s.slice(0,-1)}
      /*example decodefying string
        1.7 |2.5R|3,|                                   original string
        0,3 2.5,3 2.5,2.5 1.7,2.5 1.7,0 0,0             iteration extended

        0,0 170,0 170,250 250,250 250,300 0,300         final set of vertices

      codefying
        0,0 170,0 170,250 250,250 250,300 0,300         set of vertices

        0,3 2.5,3 2.5,2.5 1.7,2.5 1.7,0 0,0             ?/100
        1.7 |2.5R|3,|                                   iteration analyzed */
    m=(M=x.material).map//double side by default so, dot means 1
    f=/img\/(.*)\./.exec(m.sourceFile)[1]
    rp=(rp=m.repeat.x)!=1?' '+rp:''
    s+='['+f+rp+']'//folder & repeat
    function d(l,a){
      if(l||a)l=(a==1?'':' ')+Number((l/100).toFixed(6))
      return l||''}
    p=(p.x||p.y)?d(p.x,1)+d(p.y,2)+d(p.z):''
    s+=p
    function rt(l,y){// αχζισ аксыс
      if(l){var i=l<0?'-':''
        l=' '+i+(/1.57/.test(l)?
          'p'
          :'P')+(y||'')}
      return l||''}
    χ=rt(r.x)//rotation x
    γ=rt(r.y,'y')//rotation y
    s+=χ+γ+(M.side==2?'':'.')+'_'
    rz+=s},
  zip:function(){
    if(zip&&zip.method&&zip.method.deflate){
      var c=o.o.material.color
      c.r=c.g=c.b=1
      o.o=o.menu
      return 1}},
  exp:function(){//export option: house as js inside zip
    if(o.zip()){
      if(t.s.children.length-1){
        var p=((c.position.x+o.S/2)/o.S+1+'')[0],s,i//position,scene,iterator
        u.c(p=p>0?p:1)
        /*cpx=camera.position.x, o.S=510
        why offset=cpx+255?
        [ . ] I'd say such "dot" is .5 or 50% but actually it's... 0 "just like vertices work" center
              but I wanted it to be like [   ] "dot starts in left square-bracket"
              so, I set as offset its half which actually is 255 "see: o.S"
        Y offset/510?
            'coz I wanted it to set every house apart referenced by cpx
        Y you added 1 to last result?
          'coz I have no house starting at 0 position and also 'coz I cannot let user see h0, h1, h2 "it feels freaky, doesn't it?"
        Y u ended up enclosing it in Quotation marks?
          strings may be treated as vector whilst number not
          that way I'll get very first number #
          and therefore user'd do two things:
            1) now in which current house he/she is
            2) export file like so: casa# dateInfo.zip */
        //o.str(p)//spawn string providing its position
        rz='',s=t.s.children
        s=s[p]||s[s.length-1]
        for(i in s.children)o.str(i)
        s=o.house[p-1]//final string
        x=new Blob([rz.slice(0,-1)]/*[#-1] 'cuz it'd never be 0*/,{type:o.ap+'JavaScript'})//house,mimeType
        x.name='casa3d.js'
        zip.createWriter(
          new zip.BlobWriter(o.ap+'zip'),
          function(e){
            zipWriter=e
            zipWriter.add(
              x.name,
              new zip.BlobReader(x),
              function(){
                //u.c('success reading blob')
                o.a.hidden=0
                zipWriter.close(function(e){
                  o.a.href=o.URL(blb=e)
                  o.dwn(p)})})})}//since 0-->1, this way I'll now current house
      else 0}//in order to download house, first add one or upload your own.
    else o.ld()},
  //cl:u.f('n','return o.menu.children[n].material.color'),
  ntH:function(l,ch){//nth House
        //510
    var s=o.S*l,p,n//space between each house h.ntH (its container) has got -40 in x axis, though
    t.ad({a:t.eval(ch),p:p=o.ob3.clone(),gp:t.s})
    c.position.set(p.position.x=s,1e3,1700)//1700 so that camera can display almost all houses&numbers
    c.rotation.set(0,0,0)//make me sure that camera is infront of them
    h.ntH.add(n=new T.Mesh(new T.TextGeometry(l+1,o.tdp(1,100)),o.m))//number
    n.position.x=s-(l>8?30:0)
    o.house[l]=ch},//yeah I want to save it "as is" string
  imp:function(F){//import house from zip
    if(F&&o.zip()){var z=F[0]//zipped file
      zip.createReader(
        new zip.BlobReader(z),
        function(zr){//on read end
          zr.getEntries(function(e){//entries
            if(E=e=e[0]){
              e.getData(
                new zip.BlobWriter(),
                function(blob){
                  fr=new FileReader()
                  fr.onload=function(){
                    o.ntH(
                      h.ntH.children.length,
                      this.result)}//number above house "label"
                  fr.readAsText(blob)},null)}})})}
      else o.ld()},
  o:{id:''},
  init:function(){var op,D,p,i,w,b='button',B=function(s,i){return '<'+b+(i?' id='+i:'')+'>'+s+'</'+b+'>'}
    u.sc(u.b,'idle')
    h.ga.add(o.added=o.ob3.clone())
    o.added.add(o.grH=new T.GridHelper(1e4,40))

    h.tls.innerHTML+="<div id=th>"+B('➕')+B('')+"<div><div id=图片></div></div>"+B('')+B('🌄','tg')
    dv='<div>🔅<input id=lit type=range></div><div>'
    u.ap(u.new('div',{id:'mn',innerHTML:dv}),h.tls)
    op=mn.children[1]
    for(i in o.e)u.ap(u.new(b,{innerHTML:o.e[i]}),op)
    o.yan=op.children[1]
    op.innerHTML+=B('📹','cmr')+'<input type=number>'

    //地点: location (Dìdiǎn)
    u.ap(D=u.new('div',{id:'地点',innerHTML:'<div>'+B('')+B('🔘')+'</div><div><input><input></div><div><input><input></div><div><input><input>'}),mn)
    mn.innerHTML+='<div>'+B('💾')+B('🔒')+B('ⓘ')+'</div>'
    u.ap(u.new('div',{id:'大师',innerHTML:'<button id=tg>▩</button><div id=师一></div><div id=师二>'}),h.tls)

    p=o.usrAgnt[/(Chrome|Trident|Firefox)/.exec(h.nv.userAgent)[0]],w=p=='webkit'
    u.sty('#fs,canvas,'+b+',#edt{-'+p+'-user-select:none}#mn,#th>button:not(:last-child),#th label{left:0;padding:0}#图片>:nth-child(odd) *~*{background:rgba(0,0,0,.9)}#图片>:nth-child(even) *~*{background:rgba(0,0,0,.5)}#mn{font-size:1.5em;width:'+(w?16:28)+'%}#th,#mn,#师一{background:rgba(0,77,145,.5)}#th{background-image:linear-gradient(rgba(255,255,255,.2),rgba(0,0,0,.5)90%,rgba(255,255,255,.5))}#mn{background-image:linear-gradient(90deg,rgba(0,0,0,.3),rgba(255,255,255,.3)93%,rgba(0,0,0,.6))}#lit{width:60%}#mn '+b+':not(#tg){color:rgba(255,255,255,.8);margin:-.01em}#edt button:not(#tg):hover,#th img:hover{background:radial-gradient(rgba(155,251,228,.8),rgba(5,80,109,.5));text-shadow:#000 -15px 10px 7px;color:#FFF}#mn>:first-child,#地点>*~*{color:#FD0}#mn #tg{left:100%;top:39%}#cmr~*{margin-left:2em;top:-.8em;width:3.5em}#地点>:nth-child(1)>:not(#tg){background:rgba(83,111,117,.5);top:0}#地点>:nth-child(1)>:not(#tg),#opsMenu>:nth-child(-n+2){box-shadow:#000 0 -2px 10px;width:50%}#地点>:nth-child(2):before{content:"X "}#地点>:nth-child(3):before{content:"Y "}#地点>:nth-child(4):before{content:"Z "}#地点 input{width:40%;font-size:1.25em}#opsMenu *{padding:0}#mn{left:0;top:11%}#大师{height:'+(w?77:88)+'%;right:0;width:40%}.上{top:-11%}.左{left:-16%}.权{right:-38%')
    u.sty('#tg{color:rgba(0,0,0,.2);padding:0}#大师>#tg{top:45%}#师一{width:25%}#师二{width:70%}#师二>*{height:12.5%}#师一>*,#师二>*>*{border:5px solid rgba(0,0,0,0)}#师一>*:hover,#师二>*>*:hover{border:5px solid rgba(0,0,0,.5)}#师一>*{height:10.9%;width:91.5%}#师一>*>*{width:100%}#师一 label{background:rgba(0,0,0,.6);color:#FFF;display:inline-block;text-align:center;top:-35%}#师二{top:0;height:800%}#师二>*>*{height:14.15%;width:21.63%}#师二>*>:first-child{height:16.5%;width:96.2%}#师二>*>:nth-child(n+2):nth-child(-n+3){height:29.76%}#师二>*>:nth-child(10){height:14.15%;width:46.2%}#师二>*>:nth-child(11){height:29.84%;width:46.2%}#师二 img:active,.中{-'+p+'-transform:rotateY(5deg)}.α{top:0%}.β{top:-100%}.γ{top:-200%}.δ{top:-300%}.ε{top:-400%}.ζ{top:-500%}.η{top:-600%}.θ{top:-700%')
    u.sty('#th{top:0;height:11%}#th>div{width:85%}#th>button:not(#tg),#大师>#tg{width:5%;z-index:1}#th>#tg{left:48.5%;top:-15%')
    setTimeout(function(){var i,l,dc,x,I=o.img,lng=I[u.lng=='es'?'es':'en'],I=I._id,g=function(e,b){return e.getElementsByTagName(b)}
      u.a=!u.a
      bs=g(mn,b)
      o.op[8]=o.exp
      for(i in o.op)bs[i].onclick=o.op[i]
      u.ap(u.new(b,{innerHTML:'🏃',id:'tg'}),mn)
      dc=地点.children
      m[0]=dc[1].firstChild,m[3]=dc[1].lastChild
      m[1]=dc[2].firstChild,m[4]=dc[2].lastChild
      m[2]=dc[3].firstChild,m[5]=dc[3].lastChild
      lit.onchange=o.cc
      o.vl=cmr.nextSibling
      u.at(o.vl,{value:1,min:.25,step:.25,onchange:o.vlz})

      for(i in I){ι=I[i],l=0
        u.ap(u.new('div',{innerHTML:'<img src=img/'+ι+'0.jpg><label>'+lng[i],onclick:u.f('u.gc(this,"中"),师二.className="'+o.ελ[i]+'"')}),师一)
        u.ap(x=u.new('div'),师二)
        while(l<15)u.ap(u.new('img',{src:'img/'+ι+(l++)+'.jpg',onclick:function(){o.add(this.src.split(/.*\/(.*)\./)[1])}}),x)}

      o.mn(b)//contextMenu
      o.is=p+(p=='webkit'?'Is':'')+o.fs
      o.ex=p+'Cancel'+o.fs
      o.rq=p+'Request'+o.fs
      o.i=o.in('image/*','o.rb',1)
      o.iz=o.in(o.ap+'zip','o.imp')
      o.pfx=p,i=0
      x=g(th,b)
      while(i<tg.length)x[i].onclick=u.f(i?'o.lr(图片,'+(i-1)+')':'o.i.click()'),tg[i].onclick=u.f('u.tc(this.parentNode,"'+o.zhCL[i++]+'")')
      u.sty('#opsMenu{background:radial-gradient(rgba(12,175,124,.5),rgba(24,55,74,.8));border-radius:5px;display:none;width:10%}#opsMenu>:nth-child(3),#opsMenu>:last-child{width:100%}#opsMenu>button:nth-child(n+4):nth-child(-n+6){width:33%')
      u.sty('#图片{width:1000%}#图片>*{width:1%}#th label{text-shadow:#000 -1px 1px 2px;top:-30%;display:inline-block}#th label:hover{top:-104%')
    },1e3)}}
o.init()