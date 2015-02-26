dr={
  crs:'',
  pj:new T.Projector,//raycaster needs it
  sty:'.drg{cursor:url(css/drg.cur),auto}.drgn{cursor:url(css/drgn.cur),auto}.e-rz{cursor:e-resize}.n-rz{cursor:n-resize}.nw-rz{cursor:nw-resize}.sw-rz{cursor:sw-resize',
  V3:new T.Vector3(0,0,.5),
  act:function(){
    dr.app=dr.app?(
      dr.m&&(
        dr.m.emissive.g&&(dr.m.emissive.g--),
        dr.o=void 0),
      0)
      :1
    u.tc(u.b,'idle')
    u.tc(u.b,dr.drg.crs)},
  intrsct:function(){
    dr.o!=dr.new&&(
      dr.o&&(dr.o.material.emissive.g--),
      (dr.m=(dr.o=dr.new).material).emissive.g+=1)},
  rc:function(e){//instantiating new raycaster based on e.clientX/Y
    dr.pj.unprojectVector(dr.V3,c)
    dr.rC=new T.Raycaster(c.position,dr.V3.sub(c.position).normalize())
    //it'll return children found by raycaster, may be 0 though
    dr.rst=dr.rC.intersectObjects(t.s.children,true)[0]
    return dr.rst&&dr.rst.object&&dr.rst.object.parent&&(dr.rst.object.parent.id==4||dr.rst.object.id==o.grH.id)?
      0
      :dr.rst},
  drg:{
    crs:'drg',
    rv:1,
    init:function(){var r=dr.rst.point,z=dr.rsz.point
      if(Math.abs(r.z-z.z)<50){
        var o=dr.drg.o,op=o.position,cv=dr.cover,cp=cv.position
        o.geometry instanceof T.ShapeGeometry&&(r.x-=o.parent.position.x,r.y-=o.parent.position.y)
        op.x=r.x
        dr.drg.z?
          op.z+=o.rotation.x?
            r.z-z.z
            :o.rotation.y?
              !dr.new.rotation.y?
                z.y-r.y
                :r.z-z.z
              :z.y-r.y
          :o.rotation.x?
            dr.new.id==o.id?(
              dr.follow(),
              cp.y+=(cp.y<c.position.y?.1:-.1))
              :dr.new.id!=cv.id?
                Math.abs(op.y-r.y)<100&&(op.y=r.y)
              :op.y>cp.y&&op.y<c.position.y?
                cp.y+=(op.y-cp.y)*2
                :op.y+=(z.z-r.z)*(op.y>c.position.y?-1:1)
            :op.y=r.y}}},
  follow:function(rst){for(var i in {x:0,y:0,z:1})dr.cover.position[i]=rst?i=='z'?-600.1:0:dr.new.position[i],dr.cover.rotation[i]=rst?0:dr.new.rotation[i]},
  rsz:{//object wich holds fns and vars that manages resizing
    app:!1,//approval wich depends on rsz's crs
    δ:function(NO){var δ=
      dr.rst?
        dr.o.position[NO=='v'?'y':dr.o.rotation.y?'z':'x']-dr.rst.point[NO=='v'?'y':dr.o.rotation.y?'z':'x']
        :15
      return NO?δ:Math.abs(δ)},
    brdr:function(){var x
      return (dr.rsz.crs=(x=dr.o.geometry.width/2-dr.rsz.δ()<3)?'e-rz':!1)||(dr.rsz.crs=(x=dr.o.geometry.height/2-Math.abs(dr.rsz.δ('v'))<15)?'n-rz':!1)},
    centre:function(o){//It fixes geometry's vertices/position, it's needed in mouseup event & rsz's init fn (if position in x and/or y steps on half of geometry)
      var g,f=(g=(o=o||dr.o).geometry).vertices,H,w,h,V,δ,a
      //console.log(o)
      /*δ stands for difference between two points, like this first-second
      in order to make me sure 'bout correct results I use a to convert both first and second as absolute numbers*/
      a=function(n){return Math.abs(n)}//I avoid repeating 9x
      a(f[0].x)!=f[1].x&&(
        H=!0,//Horizontal is activated,because it's undergone changings, so it's got to be fixed
        w=(g.width=a(f[0].x)+a(f[1].x))/2,
        δ=(Math.max(a(f[0].x),
          a(f[1].x))-Math.min(
            a(f[0].x),
            a(f[1].x)))/2,
        //actually y stands for prior/original/given height, x for original width, w for half width & h for half height
        dr.rsz.Δ='',
        o.position[o.rotation.y?'z':'x']+=δ*(a(f[0].x)>a(f[1].x)?-1:1))//δ*-1 tells that x decreases
      f[0].y!=a(f[2].y)&&(
        V=!0,//Vertical is activated=it's changed, so it's to be fixed
        h=(g.height=a(f[0].y)+a(f[2].y))/2,
        δ=(Math.max(a(f[0].y),
          a(f[2].y))-Math.min(
            a(f[0].y),
            a(f[2].y)))/2,
        o.position.y+=δ*(a(f[0].y)>a(f[2].y)?1:-1))//δ*1 tells that y won't decreases
      if(V||H)for(var i in f)H&&(g.vertices[i].x=w*(i%2?1:-1)),V&&(g.vertices[i].y=h*(i<2?1:-1))
      g.verticesNeedUpdate=!0//let renderer know ´bout these changings
/*
+ means geometry´s point in (x,y,z) axis
---------           ------          -------
|   +   |           |   +|          |  +  |
---------           ------          -------
original          resized by         fixed
geometry             user

If I don´t fix geometry´s vertices/position after resizing rsz´s cursor would detect an inaccurate/incorrect geometry´s border
explanation
correct vertices means ABSOLUTE number of all vertices in x are the same
and all vertices in y are the same
correct position means geometry´s space must match with before and after
in example bellow geometry has 65 as width & 251 as height
as you can see greater geometry is the original one and + is its original half point
on the other hand that little square means user´s finished resizing original one
furthermore little dot means that + MUST BE where dot is
-32.5,125.5------------------------------------ 32.5,125.5
        |                                           |
        |                                           |
        |                                           |
        |                                           |
        |    -20.8,33.5------------------------ 32.5,33.5
        |         |                                 |
        |         |           +                     |       +=(217.5,425.5,-299.9)
        |         |                                 |
        |         |               .                 |       .= GOAL: correct position but first of all I´ll fix vertices
        |         |                                 |
        |         |                                 |
        |    -20.8|-125.5                       32.5|-125.5
-32.5,-125.5------|---------------------------- 32.5,-125.5
        --------------------------------------------
        |                                           |
        |                                           |
        |-26,79----------------------------- 26,79  |
        |   |                                  |    |
        |   |                                  |    |
        |   |                                  |    |
        |   |                 +                |    |       +=(217.5,425.5,-299.9)
        |   |                                  |    |       vertices are OK noe, I only have to fix position tough
        |   |                                  |    |
        |   |                                  |    |
        |-26,-79---------------------------- 26,79  |
        |                                           |
        |-------------------------------------------|
-32.5,125.5------------------------------------ 32.5,125.5
        |                                           |
        |                                           |
        |                                           |
        |                                           |
        | -26.4924,79.26835----------------- 26.4924,79.26835
        |         |                                 |
        |         |                                 |
        |         |                                 |
        |         |               +                 |       +=(223.5076,379.26835,-299.9)
        |         |                                 |       position fixed, user´d never know this tough
        |         |                                 |
        | -26.4924|-79.26835                 26.4924|-79.26835
-32.5,-125.5------|---------------------------- 32.5,-125.5*/},
    init:function(crs){
      var v=(dr.rsz.v=dr.rsz.crs=='n-rz'?!0:dr.rsz.crs=='e-rz'?!1:dr.rsz.v);Δ=dr.rsz.δ(v?'v':!0),dr.rsz.Δ=Math.abs(Δ)
      dr.o.geometry.vertices[Δ>0?2:v?0:3][v?'y':'x']=dr.o.geometry.vertices[Δ>0?v?3:0:1][v?'y':'x']=-Δ
      dr.o.geometry.verticesNeedUpdate=!0
      dr.rsz.Δ<(dr.o.geometry.width>30?16:6)&&(dr.rsz.centre())
            /*inside vertices I detect whether positive or negative
              and finally whether vertical or horizontal
      -32.5--------- 32.5       32.5=width/2
      |      217.5      |
      -32.5--------- 32.5
      0-------1 + point stands for geometry's position in x,y,z
      |   +   | so, if I want 2 increase its height then I'd rather ask:
      2-------3 regarding to x axis: -left and right+
                choose: 0,2 or 1,3 (here it's where positive and negative intervene/audit)
                  + would choose 0,2 because as you can see + is higher than 0,2
                  - would choose 1,3 because as you can see + is lower than 1,3
       125.5-------- 125.5      -bottom
      |      425.5      |    125.5=height/2
      -125.5------- -125.5        top+*/}},
  xy:function(e){
    dr.V3.x=(e.clientX/innerWidth)*2-1,dr.V3.y=-(e.clientY/innerHeight)*2+1}}
$(h.w).on({
  mousemove:function(e){
    dr.app&&(dr.xy(e),
      dr.rc(e)&&(
        dr.new!=dr.rst.object&&(dr.new=dr.rst.object),
        !dr.rsz.app&&(dr.intrsct()),
        dr.drg.app?
          dr.drg.init()
          :(dr.rsz.brdr()?
              u.b.className!=dr.rsz.crs&&(u.b.className=dr.rsz.crs)
              :!dr.rsz.app&&(u.b.className!=dr.drg.crs&&(u.b.className=dr.drg.crs)),
            dr.rsz.app&&(
              dr.rsz.point&&(dr.follow()),
              dr.rsz.init(dr.rsz.crs))),
          dr.rsz.point=dr.rst.point))},
  mousedown:function(){dr.app&&(dr.rsz.crs?dr.rsz.app=!0:(u.b.className='drgn',dr.drg.o=dr.new,dr.drg.app=!0))},
  mouseup:function(){
    dr.app&&(
      (dr.rsz.app||dr.drg.app)&&(
        dr.rsz.app&&(dr.rsz.app=!1,
          dr.rsz.Δ&&(dr.rsz.centre()),
          dr.follow(1)),
        dr.drg.app&&(dr.drg.app=!1,dr.follow(1)),
        !dr.rsz.brdr()&&(u.b.className=dr.drg.crs='drg')))},
  keydown:function(e){dr.app&&(dr.drg.z=e.ctrlKey)},
  keyup:function(e){
    dr.app&&(dr.drg.z=!1)
    e.keyCode==77&&(dr.act())}})
u.sty(dr.sty)
t.ad({a:'12 24[!|]0 0 -600.1',p:h.ga})
dr.cover=t.shape