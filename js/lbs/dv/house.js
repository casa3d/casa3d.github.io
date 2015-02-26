t.s=new T.Scene   //t needs it for adding incoming geometries
c=new T.PerspectiveCamera(90,innerHeight/innerWidth,1,3600) //fov,aspect ratio,near,far
h={i:0,             //increase
  ga:new T.Object3D,//container o´ global assets
  nv:navigator,
  w:window,
  cp:function(co){  //set camera's position & rotation
    c.position.set(
      h.pf(co[0]),  //x
      h.pf(co[1]),  //y
      h.pf(co[2]))  //z
    c.rotation.set(
      h.pf(co[3]),  //x
      h.pf(co[4]),  //y
      h.pf(co[5]))},//z
  R:u.f('u.a&&('+'requestAnimationFrame(h.R),'+'r.render(t.s,c))'),
  pf:u.f('v',
    'return parseFloat(v)'),//I want to store NUMBERS that have come from string e.g(5.4 instead of '5.4')
  init:function(){
    h.ntH=h.ga.clone()
    t.s.add(h.ga)
    h.ga.add(new T.AmbientLight)
    h.ga.add(h.ntH)
    h.ntH.position.set(-40,1100,600)
    c.position.set(0,100,0)
    r=new T.WebGLRenderer({stencil:!1,canvas:u.cv})
    r.setSize(innerWidth,innerHeight)//setting canvas' width & height
    !u.a&&(edt.className='no')
    u.ap(u.cv=u.at(r.domElement,{id:'cv'}),edt)//appending/adding it to editor as canvas
    u.a&&h.R()
    u.ap(h.tls=u.new('div'),edt)
    onresize=u.f('u.rz(r.setSize(innerWidth,innerHeight))')}}//when user resizes his page then it'll auto-fit
h.init()