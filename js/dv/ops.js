//Δtime i.c((x=new Date()).getSeconds(),x.getMilliseconds()),
o={
  a:$('<a>')[0],
  d:document,
  w:window,
  W:innerWidth/100,
  l0p:innerHeight/10,
  ap:'application/',
  fs:'FullScreen',
  house:[],
  of:'house brick door glass wall window wood'.split(' '),//object folder
  m:new T.MeshBasicMaterial,
  ob3:new T.Object3D,
  sty:'canvas{left:0;position:fixed;top:0;',
  S:510,//offset among houses, 10 is ´coz "I let user notice when finish one house & when starts another one"
  Π:Math.PI,
  π:Math.PI/2,
  pl:function(a,b){return new T.PlaneGeometry(a,b)},
  URL:function(b){return URL.createObjectURL(b)},
  tn:{//thumbnail, if it´s already added any tx before then it won´t repeat its tn
    blob:{}},//perhaps user'd put his/her own textures from hard-disk "blob"
  tdp:function(h,s){//height,size
    return{//text default parameters
      curveSegments:1,
      font:'janda manatee solid',
      height:h,
      size:s}},
  usrAgnt:{Chrome:'webkit',Trident:'ms',Firefox:'moz'},
  Δ:[],//its length will be 6;I don't think user´d put into scene more this Quantity of same texture type
  clear:function(clck,msg,tm){
    setTimeout(function(){
      clearInterval(clck)
      i.c(msg+"-clock's renderer has been cleared")
      console.clear()},tm)},
  rb:function(F){//read blob; since picture´s source comes from hard disk I´ll have to read it as blob (security reasons:users´ files are private)
    var i=0,f,de,clck//iterator,files,doesn'tExists,clock
    //i.c(i,F.length)
    while(i<F.length){de=1,f=F[i++]//assigning
      for(var I in o.tn.blob)if(o.tn.blob[I].sz==f.size&&!(de=0))break//{i.c('IAE');break}
      o.add(
        o.φ=de?
          o.URL(f)//since blob "de" yet, let's create it
          :I,//otherwise it means it !de || alreadyExists/wasCached
        1,
        f.size)}
    clck=setInterval(o.R,100)
    o.clear(clck,'image-click',500)},
  ad:function(tx,blob){var cp=c.position,p//camera´s position,parent
    t.ad({
      a:'1 2['+(
        blob?
          tx
          :tx.split(/img\/(.*)/)[1])+']'+(cp.x/100).toFixed(0)+' '+(
            cp.y+(
              /1|2|4/.test(o.txt.r.idx)?//124 it might be door, glass or window
                0
                :-90))/100+' '+(cp.z-150).toFixed(1)/100+' '+o.txt.r[o.txt.r.idx]})
    /*, p:o.added append ´em to textures-container aka "added"
    in order to avoid same picture position I´d do either
    move each picture just a little (based on prior pic´s ps)
    or simply move camera a few back each time, like so:*/
    c.position.y+=.1
    c.position.z+=.1},
  add:function(tx,blob,sz){var tn,ptx,g,m,M,idx,lg,ob
    ptx=o.tx//update last/prior texture
    tx!=o.tx&&(o.txt.r.idx=o.o.parent.id-o.st.rll.children[0].id)//determine whether it should be floor (lie), wall (stand), in other words rotation o´ each texture (see o.txt.r)
    o.ad(o.tx=(blob&&tx.length==36?'blob:http%3A//localhost%3A3000/':'')+tx,blob)//add geometry but first of all update current texture
    blob&&tx.length!=36&&(tx=tx.substr(31,tx.length-1))
    //o.rs(t.shape.geometry,50) I dunno Y´ts no wrkn´
    ob=o.tn[tx]||o.tn.blob[tx]
    ob?(
      o.tn.o=o.tns.children[ob.id],
      o.txt.get(++ob.x+''))
    :(blob?
        o.tn.blob[tx]={id:o.tns.children.length,sz:sz,x:1}
        :o.tn[tx]={id:o.tns.children.length,x:1},
        g=o.pl(o.gw,o.gh),
        φ=blob?T.ImageUtils.loadTexture(o.tx):o.o.material.map,
        m=o.m.clone(),
        m.map=φ,
        o.tns.add(M=new T.Mesh(g,m)),//add new born thumbnail
        M.position.x=-o.gw*(49-(lg=o.tns.children.length))+o.gw/2,
        M.N=[],
        lg>9&&(o.tns.position.x-=o.gw),
        o.txt.init(M,0),
        o.tns.right-=o.gw)},
  cc:function(){var c=t.s.__lights[0].color//change color lighting intensity
    o.o.il?//increase light
      c.b<1&&(c.b+=.15)//since it hasn't reached 100% it'll increase
      :c.b>.1&&(c.b-=.15),//since it hasn't reached 15% it'll decrese
    c.r=c.g=c.b},//and finally match them all
  ld:function(e){alert(e||'100% ?')},
  dwn:function(n){//save casa3d.js inside casa# Universal Time C.zip
    o.a.download='casa#'+n+' ('+new Date().toUTCString().split(/, | GMT/)[1]+').zip'
    if(navigator.msSaveBlob)navigator.msSaveBlob(blb,o.a.download)
    else{
      clickEvent=o.d.createEvent('MouseEvent')
      clickEvent.initMouseEvent('click',1,1,o.w,0,0,0,0,0,0,0,0,0,0,null)//type, canBubble, cancelable, view,  detail, screenX, screenY, clientX, clientY,  ctrlKey, altKey, shiftKey, metaKey,  button, relatedTarget
      o.a.dispatchEvent(clickEvent)}},
  zip:function(){
    if(zip&&zip.method&&zip.method.deflate){
      var c=o.o.material.color
      c.r=c.g=c.b=1
      o.o=o.menu
      return 1}},
  exp:function(){//export option: house as js inside zip
    if(o.zip()){
      if(o.house.length){
        var x,p=((c.position.x+o.S/2)/o.S+1+'')[0]
        p=p>0?p:1
        /*cpx=camera.position.x, o.S=510
        why offset=cpx+255?
        [ . ] I'd say that "dot" is .5 or 50% but actually it's... 0 "just like vertices work"
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
            1) now in which house is. "currently, I mean"
            2) export file like so: casa# dateInfo.zip */
        x=new Blob([o.house[p-1]]/*[#-1] 'cuz it'd never be 0*/,{type:o.ap+'JavaScript'})//house,mimeType
        x.name='casa3d.js'
        zip.createWriter(
          new zip.BlobWriter(o.ap+'zip'),
          function(e){
            zipWriter=e
            zipWriter.add(
              x.name,
              new zip.BlobReader(x),
              function(){
                //i.c('success')
                o.a.hidden=0
                zipWriter.close(function(e){
                  o.a.href=o.URL(blb=e)
                  o.dwn(p)})})})}//since 0-->1, this way I'll now current house
      else o.ld(o.fi)}//in order to download house, first add one or upload your own.
    else o.ld()},
  cl:function(n){return o.menu.children[n].material.color},
  ntH:function(l,ch){var s=o.S*l,p,n//space between each house h.ntH (its container) has got -40 in x axis, though
    t.ad({a:eval(ch),p:p=o.ob3.clone(),gp:t.s})
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
  mv:function(){//slide to the left/right
    o.st.rll.position.x+=o.o.id==o.left.id&&o.st.rll.position.x<o.left.lim?//in/decrease only if pnl.ps.x is in inside sliding area
      o.pnlW//left
      :o.o.id==o.right.id&&o.st.rll.position.x>o.right.lim&&(//right
        -o.pnlW)},
  R:function(){o.r.render(o.s,o.c)},
  how:function(){//show keyboard controls
    var g,m,M,spk,ks,ctrl
    if(o.kb)o.kb.position.z=o.kb.position.z?0:-1
    else{
      g=o.pl(o.W,o.H)
      m=new T.MeshLambertMaterial
      o.s.add(o.kb=new T.Mesh(g,ma=m.clone()))
      ma.transparent=1
      ma.opacity=.5

      g=o.pl()
      o.kb.add(spk=new T.Mesh(g,m))//special keys
      o.kb.add(ks=spk.clone())     //directional keys
      spk.add(james=new T.Mesh(g=o.pl(o.gw,o.gh),m))//watch Adventure Time to Understand it
      spk.add(M=james.clone())

      spk.position.set(-o.gw*3,-o.gh,0)
      ks.position.set(o.gw*2,-o.gh,0)
      M.position.y=-o.gh/1.9

      g=new T.CylinderGeometry(0,.2,.2)
      m=new T.MeshBasicMaterial
      james.add(new T.Mesh(g,m))

      g=new T.TextGeometry('ctrl',o.tdp(1e-6,.2))
      M.add(ctrl=new T.Mesh(g,m))
      ctrl.position.x=-o.gw/5


      ks.add(M=james.clone())//  ^
      M.position.y=o.gh/1.9

      ks.add(M=james.clone())//  >
      M.position.x=o.gw/1.3
      M.rotateZ(-o.π)

      ks.add(M=james.clone())//  v
      M.position.y=-o.gh/1.9
      M.rotateZ(o.Π)

      ks.add(M=james.clone())//  <
      M.position.x=-o.gw/1.3
      M.rotateZ(o.π)

      james.position.y=o.gh/1.9}},
  st:{
    app:!1,
    init:function(px){var g,m,M,φ,i=0,x=[[],[]],y=[[],[]],r//geo,mat,Mesh,foto,iteration,"height-width matriX",roll
/*          h [.0123,.00498]      v
                                [
                                .0085
                                .00498
                                ]*/
      x[0][3]=-(x[0][0]=(x[0][1]=-(x[0][2]=o.gw))*3)
      y[0][0]=-(y[0][3]=(y[0][2]=-(y[0][1]=o.gh))*3)
      x[1][0]=-(x[1][3]=123e-4)
      x[1][1]=y[1][2]=-(x[1][2]=y[1][1]=498e-5)
      y[1][3]=-(y[1][0]=85e-4)
      o.pnlW=o.W-o.gw*2,o.pnlH=o.H-o.gh*2
    //panel
      g=o.pl(o.W,o.pnlH)
      m=new T.MeshLambertMaterial({opacity:0,transparent:!0,visible:!1})
      o.s.add(o.st.pnl=new T.Mesh(g,m))
      o.shwm()
      o.st.pnl.c=1//it's got children
      //roll
        g=o.pl(o.pnlW*o.of.length,o.pnlH)//*7 Bcoz o' house,ceiling,door,floor,stairs,wall,window
        o.st.pnl.add(r=o.st.rll=new T.Mesh(g,m))
        r.position.set(r.geometry.width/2-o.pnlW,0,.0001)
        //o.st.rll.c=1it's got children
/*let it be exactly after left container
          [plane]
          |window-width or screeen-scope|
           --screen scope=ss==window width=ww
        [––‐|--|‐––] 6 dashes but as ss can only see it in 0 in x axis
        then its offset would be -plane´s half width
           | [-|-–––––] now plane is right in the middle of ss plane´s half width/2
           but I´d got to subtract ww´s half to current position o.w/2
            |.[–|–––––]it is right after left container .

      everything started like this:
      divide hall new sliding into 4 since 2 was too small
      then it´ll be 4x4
      go back to uppermostleft and get plane´s half-width forward
      |.-----|          |. . . .|
      |      |   --->   |. . . .|
      |      |          |. . . .|
      |------|          |. . . .|
      til´ finally get accurate measurement and fill it
      iterate 6x that "4x4" slide and fill it with ceiling,door,floor,stairs,wall,window*/
        g=o.pl(o.pnlW,o.pnlH)
        for(i in o.of){var I=0//create rll's children they R 6
          m=new T.MeshBasicMaterial({visible:!1})
          r.add(M=new T.Mesh(g,m))
          M.position.x=-o.pnlW*3+o.pnlW/2+o.pnlW*i
          M.c=1}
        o.f=r.children[0].id
        o.l=r.children[o.of.length-1].id
        g=o.pl(o.gw*2,o.gh*2)
        for(i in o.of){var I=0
          while(I<4){var l=1,II=I*4,f=o.of[i]//start column & continue with previous row
            φ=new T.ImageUtils.loadTexture('img/'+f+'/'+(f=='house'?0:II)+'.jpg')
            m=new T.MeshBasicMaterial({map:φ,opacity:.85,transparent:!0})
            r.children[i].add(M=new T.Mesh(g,m))
            M.position.set(x[0][I]+x[1][I],y[0][0]+y[1][0],0)
            while(l<4){//finish column: vertically add three more
              φ=new T.ImageUtils.loadTexture('img/'+f+'/'+(f=='house'?0:l+II)+'.jpg')
              m=new T.MeshBasicMaterial({map:φ,opacity:.85,transparent:!0})
              r.children[i].add(M=new T.Mesh(g,m))
              M.position.set(x[0][I]+x[1][I],y[0][l]+y[1][l],0),l++}I++}}
      //left container
        g=o.pl(o.gw,o.pnlH)
        φ=new T.ImageUtils.loadTexture('img/icon/left.png')
        m=new T.MeshBasicMaterial({map:φ,opacity:.3,transparent:!0,blending:0,color:'lightgrey'})
        o.st.pnl.add(o.left=new T.Mesh(g,m))
        o.left.position.set(px,0,.001)//-6.446
        o.left.lim=27
      //right container
        o.st.pnl.add(o.right=o.left.clone())
        o.right.rotation.z=o.Π//rotate it 180° "upsidedown"
        o.right.position.set(-px,0,.001)
        o.right.lim=-38}},//6.446
  s: new T.Scene,//                fov               aspect ratio      near far
  c: new T.PerspectiveCamera(innerHeight/(768/42),innerWidth/innerHeight,1e-3,10),
  r: new T.WebGLRenderer,
  pj:new T.Projector,//raycaster needs it
  V3:new T.Vector3(0,0,.5),
  o:{id:''},
  kbd:function(){o.kb&&(!o.kb.position.z&&(o.kb.position.z=-1))},
  shwm:function(){//show "add geometry" menu
    o.st.pnl.position.y=o.st.pnl.position.y?(
      m.rKey&&(m.act()),
      0)
      :o.H
    o.kbd()},
  ops:[
    0,//move
    0,//move
    0,//how
    function(){//toggle mode
      var p,i,l,x=o.menu.children//position
      p=o.menu.rotation.z?[
        (l=1)*o.gw*4.3,
        0,
        0]
        :[
        0,
        (l=-1)*o.H/2+o.gh*1.1,
        o.π]
      o.menu.rotation.z=p[2]
      o.menu.position.set(p[0],p[1],0)
      for(i in x)x[i].rotateZ(l*o.π)},
    0,//add geometry
    function(){//import φoto/texture
      o.in.click()},
    dr.act,//enable/disable drgNrsz's approval
    dr.act,//enable/disable drgNrsz's approval
    m.rt,//rotate -90° 0 means left-key
    function(){m.rt(2)},//rotate 90° 2 means right-key
    0,//change colour decrease light intensity
    0,//change colour increase light intensity
    m.act,//rotate
    function(){//toggle fullscreen
      o.d[o.is]?//if currently browser is in fullscreen then:
        o.d[o.ex]()//exit
        :o.d.body[o.rq]()},//otherwise request fullscreen
    0,//export option
    function(){//import option
      o.im.click()},
    function(){open(location.href+'support','_new')},
    function(){//log out
      u.shift()
      setTimeout(u.out,100)}],
  rc:function(e){//10% & position of mouse in Y
    o.V3.x=(e.clientX/o.w.innerWidth)*2-1,o.V3.y=-(o.y/o.w.innerHeight)*2+1
    o.pj.unprojectVector(o.V3,o.c)
    o.rC=new T.Raycaster(o.c.position,o.V3.sub(o.c.position).normalize())
    o.rst=o.rC.intersectObjects(o.s.children,true)

    for(var i in o.rst)if(o.rst[i].object.parent.c)return o.rst=o.rst[i]
    return o.rst=o.rst[0]},//it'll return children that been found may be 0 though
  slide:function(){var l,T,x//move/slide thumbnails´ parent
    o.app&&(T=o.tns,x=T.position.x,
      ((l=o.x&&x>T.right)||!o.x&&x<T.left)&&(
          T.position.x-=l?
            .05
            :-.05,
            requestAnimationFrame(o.slide),
            o.R()))},
  at:function(){//addMenu&thumbnailsMenu proceed only if it comes from thumbnails or rll's children
                                  //is between first rlls' child & last one (they're 7: h & 6 texture-types though)
    return o.o.parent.id==o.tn.id||o.o.parent.id>=o.f&&o.o.parent.id<=o.l},
  txt:{
    init:function(M,i){var g,nm
      while(i<10){
        M.N[i]=[nm=new T.Mesh(new T.TextGeometry(i++,o.tdp(1e-6,.2)),o.m)]
        nm.position.x=-.65
        nm.position.y=.4
        M.add(nm)}},
    hd:function(N,pX){var L1=N.length-1,obj=o.tn.o.N[N[pX=pX?L1-pX:L1]][pX]
      obj&&(
        obj.position.y!=.4&&(
          obj.position.y=.4))},
    mv:function(N,pX){var L1=N.length-1,O=o.tn.o,ON=O.N[N[pX=pX?L1-pX:L1]]//get specific Number from main Vector of that 1-3 or 1-4 length Number
      obj=ON[pX]//try to get that N from specific pX position
      !obj&&(//if it doesn´t exists yet so, create it...
        O.add(obj=ON[pX]=ON[0].clone()))//and add it to scene
      obj.position.set(o.Δ[pX],.09,0)},//finally set its position
    lm:[],//[,19,199,1999,19999,199999],//limit o´ zeroes (i.e 20,200...) since I do not want 2 use >= I'd use > instead; p.s. ps0 won't be used
    it:function(N,c,l){//Number, counter & length
      N[l-c]==0&&(
        o.txt.mv(N,c),
        N>o.txt.lm[c]&&(
          o.txt.hd(N-1+'',c),
          o.txt.it(N,c+1,l)))},
    get:function(N){//concidering it & lm part o´ this then 10 lines o´ code
      o.txt.mv(N)//move/request new last digit
      o.txt.it(N,1,N.length)//iteration is always almost needed
      o.txt.hd(N-1+'')},//hide previous number
    /*original "get" script; 27 lines
    get:function(N){o.txt.mv(N)
      var l=N.length//,Zs//Zeroes
      N[l-1]==0&&(
        //Zs='x0',
        o.txt.mv(N,1),
        N>19&&(
          o.txt.hd(N-1+'',1),
          N[l-2]==0&&(
            //Zs='x00',
            o.txt.mv(N,2),
            N>199&&(
              o.txt.hd(N-1+'',2),
              N[l-3]==0&&(
                //Zs='x000',
                o.txt.mv(N,3),
                N>1999&&(
                  o.txt.hd(N-1+'',3),
                  N[l-3]==0&&(
                    //Zs='x0000',
                    o.txt.mv(N,4),
                    N>19999&&(
                      o.txt.hd(N-1+'',4),
                      N[l-3]==0&&(
                        //Zs='x00000',
                        o.txt.mv(N,5))))))))))
      //Zs&&(i.c(Zs))
      o.txt.hd(N-1+'')},*/
    r:'p  p p'.split(/|/)},//rotation o´ each texture
  init:function(){var g,m,φ,M,px,py,i=0,sty=$('style')[0],clck,msh
    o.gh=(o.H=o.l0p/10)/10
    o.gw=o.W/10
    o.g=o.pl(100,200)
    o.ops[0]=o.ops[1]=o.mv
    o.ops[2]=o.how
    o.ops[4]=o.shwm
    o.ops[10]=o.ops[11]=o.cc
    o.ops[14]=o.exp
    h.ga.add(o.added=o.ob3.clone())
    o.im=$('<input type=file accept='+o.ap+'zip onchange=o.imp(this.files)>')[0]
    o.fi=u.lng=='es'?'con el fin de exportar una casa, 1ro debes añadir o importar alguna':'in order to export house, first you must add one or import your own'
    o.pfx=o.usrAgnt[/(Chrome|Trident|Firefox)/.exec(o.w.navigator.userAgent)[0]]
    o.sty+='-'+o.pfx+'-user-select:none}'
    sty?
      sty.innerHTML+='\n'+o.sty
      :$(o.d.head).append($('<style>').text(o.sty)[0])
    o.r.setSize(innerWidth,innerHeight)//setting width & height
    o.c.position.z=10
    px=-o.W/2+o.gw/2//left corner-[ | ]    <-- half width
    py=o.H/2-o.gh/2//top corner-[ - ]      <-- half height
    //creating & adding options
    o.st.init(px)
    g=o.pl(o.gw*96,o.gh)//Width & Height
    m=new T.MeshBasicMaterial({opacity:0,transparent:!0})
    o.s.add(o.tns=new T.Mesh(g,m))
    o.tns.position.set(o.tns.left=o.gw*43,py,0)
    o.tns.c=1//it's got children
    o.tns.right=o.tns.left+o.gw*10
    g=o.pl(o.gw*1.25,o.gh*8.5)
    m=new T.MeshLambertMaterial({transparent:1,opacity:.5,blending:0})
    o.menu=new T.Mesh(g,m)
    o.menu.position.set(
      o.gw*4.3,
      -o.gh/4,
      0)
    o.menu.c=1//it'got children=!0 true
    o.s.add(o.menu)
    g=o.pl(o.gw/2,o.gh)//Width & Height

/*    v=[[-.3,3.5], [.3,3.5],//Original matrix
       [-.3,2.5], [.3,2.5],
       [-.3,1.5], [.3,1.5],
       [-.3,.5],  [.3,.5],
       [-.3,-.5], [.3,-.5],
       [-.3,-1.5],[.3,-1.5],
       [-.3,-2.5],[.3,-2.5],
       [-.3,-3.5],[.3,-3.5]]*/
    function msh(I){
      φ=new T.ImageUtils.loadTexture('img/icon/menu.png')
      φ.repeat.y=.0625,φ.offset.y=(i*2+I)*.0625
      /*     Δ=.0625
      ⌨ 0      📌.0625
      ➕.125    🌄.1875
      ✋.25      ↔.3125
      ⟲.375     ⟳.4375
      🌙.5      ☀.5625
      ⌖.625     🎦.6875
      📥.75     📤.8125
      ⓘ.875    🔒.9375 */
      m=new T.MeshBasicMaterial({map:φ,transparent:1})
      //i%2&&(m.opacity=.5,m.transparent=!0)//sort evenly
      M=new T.Mesh(g,m)
      M.position.set(o.gw*.3*(I?1:-1),o.gh*(3.5-i),0)
      o.menu.add(M)}//repeating 'til 24 PlaneGeometries/room for icons
    while(i<8)msh(0),msh(1),i++==4&&(M.il=1)//increase light
    $(o.d.body).append(o.r.domElement)//adding all to body as canvas
    o.r.domElement.className='ops '+(u.a?'':'no')
    o.is=o.pfx+(o.pfx=='webkit'?'Is':'')+o.fs
    o.ex=o.pfx+'Cancel'+o.fs
    o.rq=o.pfx+'Request'+o.fs
    o.tn.id=o.s.children[1].id
    for(i in o.ops)o.ops[Number(i)+(i<2?o.left.id:o.tn.id)]=o.ops[i],delete o.ops[i]
    //x:-2.0434, y:-3.4419 z:9.96 inside o.s.children[1].children[6]
    for(i in o.of)o.Δ[i]=-.62+i*.15,o.txt.lm[i]=Math.pow(10,i)*2-1//position o´ each digit;I don't think user´d put into scene more than a Quantity o´ 6-digit Number of same type/texture
    o.in=$("<input type=file accept=image/* multiple onchange=o.rb(this.files)>")[0]
    clck=setInterval(o.R,500)
    o.clear(clck,'ops',6e3)
    o.re=new RegExp(o.left.id+'|'+o.menu.children[0].id+'|'+o.menu.children[2].id+'|'+o.right.id)}}
$(o.w).on({
  contextMenu:function(){
    alert('remove, change texture')},
  click:function(e){var i,sf
    u.a&&(
      o.o.id&&(
        o.ops[o.o.id]?
          o.ops[o.o.id]()
          :o.at()&&(//let it proceed since it comes from add-menu or thumbnails
            o.o.parent.id==o.f?//first rll´s child means "import-house section"
              o.zip()&&o.ntH&&o.ntH(
                t.s.children.length-1,
                o.asset)
              :(sf=o.o.material.map.sourceFile)&&(o.add(sf,/blob/.test(sf))))),//let it know if its sourceFile comes from a blob
      //left kbrd add right
      !o.st.pnl.position.y&&!o.re.test(o.o.id)&&o.shwm(),
      o.R())},//know where it comes from, 1 of 6 sliding pages must be though
  mousemove:function(e){//may pass since Y is 'ops territory' and any object's been found
    u.a&&(o.y=e.clientY,
      ((o.x=e.clientX)<1||o.x>o.w.innerWidth-2)?
        !o.app&&o.slide(o.app=1)
        :o.app&&(o.app=0),
      o.rc(e)&&(
        o.o.id!=o.rst.object.id&&(
          o.o.id&&(
            o.at()?(//set ps.z & opacity only if it comes from thumbnails or rll's children
              o.o.position.z=0,
              o.o.material.opacity=.85)
              :o.mc&&(//let's restore its OST color, I mean Original. ("Original Soundtrack" though)
                (o.mc=o.o.material.color).r=o.pc[0],o.mc.g=o.pc[1],o.mc.b=o.pc[2])),//pick colour
          o.o=o.rst.object,
          o.at()?(
            o.o.position.z=.125,
            o.o.material.opacity=1)
            :!o.o.parent.N&&(o.mc=o.o.material.color,//backing up its color to further restore it when mouse gets out
              o.pc=[o.mc.r,o.mc.g,o.mc.b],
              o.mc.r=o.mc.g=o.mc.b=0),
          o.R())))},
  resize:function(){o.r.setSize(o.w.innerWidth,o.w.innerHeight)}})
o.init()
/*u.a=!u.a
setTimeout(function(){u.a=!u.a},1e3)*/