//Δtime i.c((x=new Date()).getSeconds(),x.getMilliseconds()),
o={
  d:document,
  w:window,
  W:innerWidth/100,
  H:innerHeight/100,
  gw:innerWidth/1000,
  gh:innerHeight/1000,
  l0p:innerHeight/10,
  f:'FullScreen',
  of:'brick door glass wall window wood'.split(' '),//object folder
  g:new T.PlaneGeometry(100,200),
  m:new T.MeshBasicMaterial(),
  sty:'canvas{left:0;position:fixed;top:0}',
  URL:function(b){return o.w.URL.createObjectURL(b)},
  tn:{//thumbnail, if it´s already added any tx before then it won´t repeat its tn
    blob:{}},//perhaps user'd put his/her own textures
  tdp:{
    curveSegments:1,
    font:'janda manatee solid',
    height:1e-6,
    size:.2},
  usrAgnt:{Chrome:'webkit',Trident:'ms',Firefox:'moz'},
  Δ:[],//its length will be 6;I don't think user´d put into scene more this Quantity of same texture type
  clear:function(clck,msg,tm){
    setTimeout(function(){
      clearInterval(clck)
      i.c(msg+"-clock's renderer has been cleared")},tm)},
  rb:function(F){//read blob; since picture´s source comes from hard disk I´ll have to read it as blob (security reasons:users´ files are private)
    var i=0,f,de,clck//iterator,files,doesn'tExists
    //i.c(i,F.length)
    while(i<F.length){de=!0,f=F[i++]//assigning
      for(var I in o.tn.blob)if(o.tn.blob[I].sz==f.size&&!(de=0))break
      o.add(
        o.φ=de?
          o.URL(f)//since blob de yet, let's create it
          :I,//otherwise it means it alreadyExists/wasCached
        !0,
        f.size)}
    clck=setInterval(o.R,100)
    o.clear(clck,'image-click',500)},
  ad:function(tx,blob){var cp=c.position
    t.ad('1 2['+(blob?tx:tx.split(/img\/(.*)/)[1])+']'+cp.x/100+' '+(cp.y+(o.txt.r.idx?0:-90))/100+' '+(cp.z-150)/100+' '+o.txt.r[o.txt.r.idx])
    //in order to avoid same position o´pictures I´d do either
    //move each picture just a little (based on prior pic´ps)
    //or simply move camera a few back each time
    c.position.y+=.1
    c.position.z+=.1},
  add:function(tx,blob,sz){var tn,ptx,g,m,M,idx,lg,ob
    ptx=o.tx//update last/prior texture
    tx!=o.tx&&(o.txt.r.idx=o.o.parent.id-97)
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
      g=new T.PlaneGeometry(o.gw,o.gh),
      φ=blob?T.ImageUtils.loadTexture(o.tx):o.o.material.map,
      m=new T.MeshBasicMaterial({map:φ}),
      o.s.children[1].add(M=new T.Mesh(g,m)),
      M.position.x=-o.gw*(49-(lg=o.tns.children.length))+o.gw/2,
      M.N=[],
      lg>9&&(o.tns.position.x-=o.gw),
      o.txt.init(M,0),
      o.tns.right-=o.gw)},
  cc:function(){var c=t.s.__lights[0].color//change color lighting intensity
    o.o.il?//increase light
      c.b<1&&(c.b+=.15)//since it hasn't reached 100% it'll increase
      :c.b>.1&&(c.b-=.15),//since it hasn't reached 10% it'll decrese
    c.r=c.g=c.b},//and finally match them all
  dec:function(){i.c('decompress opt')},
  dwn:function(b){
    var URL=location.href=o.URL(b)
    setTimeout(function(){o.w.URL.revokeObjectURL(URL)},1e4)},
  exp:function(){
    if(JSZip){o.z=new JSZip()
      o.z.file('readme md.txt','export/import this whole zip-file generated to'+u.K)
      o.z.folder('assets').file('casa3d.js',rQ.response)//code in base-64? ok let's use {base64:!0}
      o.dwn(o.z.generate({compression:'DEFLATE',type:'blob'}))}
    else alert(ch.l+'% ...'+' 100%')},//save casa3d.js inside descarga.zip
  mv:function(){
    o.st.rll.position.x+=o.o.id==o.left.id&&o.st.rll.position.x<27?//in/decrease only if pnl.ps.x is in inside sliding area
      o.pnlW//left
      :o.o.id==o.right.id&&o.st.rll.position.x>-27&&(//right
        -o.pnlW)},
  R:function(){o.r.render(o.s,o.c)},
  st:{
    app:!1,
    init:function(px){var g,m,M,φ,i=0,c=['red','darkred','green','darkgreen','blue','darkblue'],x=[[],[]],y=[[],[]]
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
      g=new T.PlaneGeometry(o.W,o.pnlH)
      m=new T.MeshLambertMaterial({opacity:0,transparent:!0,visible:!1})
      o.s.add(o.st.pnl=new T.Mesh(g,m))
      o.st.pnl.position.z=-1
      o.st.pnl.c=1//it's got children
      //roll
        g=new T.PlaneGeometry(o.pnlW*6,o.pnlH)//*6 Bcoz o' ceiling,door,floor,stairs,wall,window
        o.st.pnl.add(o.st.rll=new T.Mesh(g,m))
        o.st.rll.position.set(o.st.rll.geometry.width/2-o.W/2+o.gw,0,.0001)
        //o.st.rll.c=1it's got children
/*let it be exactly after left container
          [plane]
          |window width or screeen scope|
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
        g=new T.PlaneGeometry(o.pnlW,o.pnlH)
        while(i<6){var I=0//create rll's children they R 6
          m=new T.MeshBasicMaterial({visible:!1})
          o.st.rll.add(M=new T.Mesh(g,m))
          M.position.x=-o.pnlW*3+o.pnlW/2+(o.pnlW*i++)
          M.c=1}i=0//it's got children
        g=new T.PlaneGeometry(o.gw*2,o.gh*2)
        while(i<6){var I=0
          while(I<4){var l=1,II=I*4//start column & continue with previous row
            φ=new T.ImageUtils.loadTexture('img/'+o.of[i]+'/'+II+'.jpg')
            m=new T.MeshBasicMaterial({map:φ,opacity:.85,transparent:!0})
            o.st.rll.children[i].add(M=new T.Mesh(g,m))
            M.position.set(x[0][I]+x[1][I],y[0][0]+y[1][0],0)
            while(l<4){//finish column: vertically add three more
              φ=new T.ImageUtils.loadTexture('img/'+o.of[i]+'/'+(l+II)+'.jpg')
              m=new T.MeshBasicMaterial({map:φ,opacity:.85,transparent:!0})
              o.st.rll.children[i].add(M=new T.Mesh(g,m))
              M.position.set(x[0][I]+x[1][I],y[0][l]+y[1][l],0);l++}I++}i++}
      //left container
        g=new T.PlaneGeometry(o.gw,o.pnlH)
        φ=new T.ImageUtils.loadTexture('img/icon/left.png')
        m=new T.MeshBasicMaterial({map:φ,opacity:.3,transparent:!0})
        o.st.pnl.add(o.left=new T.Mesh(g,m))
        o.left.position.set(px,0,.001)//-6.446
      //right container
        o.st.pnl.add(o.right=o.left.clone())
        o.right.rotation.z=Math.PI//rotate it 90°
        o.right.position.set(-px,0,.001)}},//6.446
  s:new T.Scene(),//                fov               aspect ratio      near far
  c:new T.PerspectiveCamera(innerHeight/(768/42),innerWidth/innerHeight,1e-3,10),
  r:new T.WebGLRenderer({antialias:!1}),
  pj:new T.Projector(),//raycaster needs it
  V3:new T.Vector3(0,0,.5),
  o:{id:''},
  ops:[
    function(){o.mv()},
    function(){o.mv()},
    function(){//add geometry
      o.st.pnl.position.z=o.st.pnl.position.z?(
        m.rKey&&(m.act()),
        0)
        :-1
      o.st.app=!o.st.app},
    dr.act,//enable/disable drgNrsz's approval
    function(){o.i.click()},
    m.act,//rotate
    m.rt,//rotate -90° 0 means left-key
    function(){m.rt(2)},//rotate 90° 2 means right-key
    function(){o.cc()},//in/decrease lighting intensity
    function(){o.cc()},//it'll rely & decide based on object's id.
    function(){o.exp()},
    function(){
      o.d[o.is]?//if currently browser is in fullscreen then:
        o.d[o.ex]()//exit
        :o.d.body[o.rq]()}],//otherwise request fullscreen
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
  txt:{
    init:function(M,i){var g,nm
      while(i<10){
        M.N[i]=[nm=new T.Mesh(new T.TextGeometry(i++,o.tdp),o.m)]
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
  Y:function(e){o.y=e.clientY
    return o.y<o.l0p||o.y>o.w.innerHeight-o.l0p},
  init:function(){var g,m,φ,M,px,py,i=0,sty=$('style')[0],clck
    sty?
      sty.innerHTML+='\n'+o.sty
      :$(o.d.head).append($('<style>').text(o.sty)[0])
    o.r.setSize(innerWidth,innerHeight)//setting width & height
    o.c.position.z=10
    px=-o.W/2+o.gw/2//left corner-[ | ]    <-- half width
    py=o.H/2-o.gh/2//top corner-[ - ]      <-- half height
    //creating & adding options
    o.st.init(px)
    g=new T.PlaneGeometry(o.gw*96,o.gh)//Width & Height
    m=new T.MeshBasicMaterial({opacity:0,transparent:!0})
    o.s.add(o.tns=new T.Mesh(g,m))
    o.tns.position.set(o.tns.left=o.gw*43,py,0)
    o.tns.c=1//it's got children
    o.tns.right=o.tns.left+o.gw*10
    g=new T.PlaneGeometry(o.W,o.gh)
    m=new T.MeshLambertMaterial({transparent:1,opacity:.5})
    o.menu=new T.Mesh(g,m)
    o.menu.position.y=-py//y: 3.84-.768/2=3.456
    o.menu.c=1//it'got children=!0 true
    o.s.add(o.menu)
    g=new T.PlaneGeometry(o.gw,o.gh)//Width & Height
    while(i<10){
      φ=new T.ImageUtils.loadTexture('img/icon/icon.png')
      φ.repeat.x=.0989,φ.offset.x=i*.0989
      m=new T.MeshBasicMaterial({map:φ,transparent:1})
      //i%2&&(m.opacity=.5,m.transparent=!0)//sort evenly
      M=new T.Mesh(g,m)//repeating 'til 24 PlaneGeometries/room for icons
      M.position.x=px+i*o.gw//x: -6.83+0.5253846153846153=-6.304615384615385 --> it starts to the left, so -half space width+geometry's half width and that's all even though since I want to repeat it then last result + increment*geometrys's width
      i==7&&(M.il=1)
      o.menu.add(M)
      i++}
    $(o.d.body).append(o.r.domElement)//adding all to body as canvas
    o.r.domElement.className='ops '+(u.a?'':'no')
    o.pfx=o.usrAgnt[/(Chrome|Trident|Firefox)/.exec(o.w.navigator.userAgent)[0]]
    o.is=o.pfx+(o.pfx=='webkit'?'Is':'')+o.f
    o.ex=o.pfx+'Cancel'+o.f
    o.rq=o.pfx+'Request'+o.f
    o.tn.id=o.s.children[1].id
    for(i in o.ops)o.ops[Number(i)+(i<2?o.left.id:o.tn.id)]=o.ops[i],delete o.ops[i]
    //x:-2.0434, y:-3.4419 z:9.96 inside o.s.children[1].children[6]
    for(i in o.of)o.Δ[i]=-.62+i*.15,o.txt.lm[i]=Math.pow(10,i)*2-1//position o´ each digit;I don't think user´d put into scene more than a Quantity o´ 6-digit Number of same type/texture
    o.i=$("<input type=file accept=image/* multiple onchange=o.rb(this.files)>")[0]
    clck=setInterval(o.R,500)
    o.clear(clck,'ops',6e3)}}
$(o.w).on({
  click:function(e){var i,sf
    u.a&&(o.Y(e)||o.st.app)&&o.o.id&&(
      o.ops[o.o.id]?(
        o.ops[o.o.id]())
      :(o.o.id>102&&o.o.id<199||o.o.parent.id==o.tn.id)&&(
        o.add((sf=o.o.material.map.sourceFile),/blob/.test(sf))),//let it know if its sourceFile comes from a blob
      o.R())},//know where it comes from, 1 of 6 sliding pages must be though
  mousemove:function(e){//may pass since Y is 'ops territory' and any object's been found
    u.a&&(o.Y(e)||o.st.app)&&(
      ((o.x=e.clientX)<1||o.x>o.w.innerWidth-2)&&o.y<o.l0p?
        !o.app&&(
          o.slide(o.app=!0))
        :o.app&&(o.app=!1),
      o.rc(e)&&(
        o.o.id!=o.rst.object.id&&(
          o.o.id&&(
            (o.o.parent.id==202||o.o.parent.id==203||o.o.parent.id>97&&o.o.parent.id<104)?(
              o.o.position.z=0,
              o.o.material.opacity=.85)
              :o.mc&&(//let's restore its OST color
                (o.mc=o.o.material.color).r=o.pc[0],o.mc.g=o.pc[1],o.mc.b=o.pc[2])),//pick colour
          o.o=o.rst.object,
          (o.o.parent.id==202||o.o.parent.id==203||o.o.parent.id>97&&o.o.parent.id<104)?(
            o.o.position.z=.125,
            o.o.material.opacity=1)
            :!o.o.parent.N&&(o.mc=o.o.material.color,//backing up its color to further restore it when mouse gets out
              o.pc=[o.mc.r,o.mc.g,o.mc.b],
              o.mc.r=o.mc.g=o.mc.b=0),
          o.R())))},
  resize:function(){o.r.setSize(o.w.innerWidth,o.w.innerHeight)}})
o.init()