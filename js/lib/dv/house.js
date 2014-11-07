t.s=new T.Scene   //t needs it for adding incoming geometries
c=new T.PerspectiveCamera(90,innerHeight/innerWidth,1,3600) //fov,aspect ratio,near,far
h={i:0,             //increase
  ga:new T.Object3D,//container o´ global assets
  st:[],            //stairs
  w:window,
  W:innerWidth,     //1366 in fullscreen
  H:innerHeight,    //768 in fullscreen
  cp:function(co){  //set camera's position & rotation
    c.position.set(
      h.pf(co[0]),  //x
      h.pf(co[1]),  //y
      h.pf(co[2]))  //z
    c.rotation.set(
      h.pf(co[3]),  //x
      h.pf(co[4]),  //y
      h.pf(co[5]))},//z
  R:function(){
    u.a&&(
      requestAnimationFrame(h.R),
      r.render(t.s,c))},
  pf:function(_v){return parseFloat(_v)},//I want to store NUMBERS that have come from string e.g(5.4 instead of '5.4')
  init:function(){
    h.ntH=h.ga.clone()
    t.s.add(h.ga)
    h.ga.add(new T.AmbientLight)
    h.ga.add(h.ntH)
    h.ntH.position.set(-40,1100,600)
    c.position.set(0,100,0)
    r=new T.WebGLRenderer({stencil:!1})
      r.setSize(h.W,h.H)//setting canvas' width & height
      $(b).append(r.domElement)//appending/adding it to body as canvas
      r.domElement.id='cv'//I set its id (just in case)
      u.a?
        h.R()
        :r.domElement.className='no'
    //xhr('js/assets.js','u.a&&(u.shift(u.a=0)),t.ad({a:eval(this.response),p:new T.Object3D(),gp:t.s})')//load default assets and add them to scene
    h.w.onresize=function(){r.setSize(h.w.innerWidth,h.w.innerHeight)}}}//when user resizes his page then it'll auto-fit
h.init()