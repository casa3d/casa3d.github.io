h={i:0,//increase
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
    u.a&&(requestAnimationFrame(h.R),
    r.render(t.s,c))},
  pf:function(_v){return parseFloat(_v)}}//I want to store NUMBERS that have come from string e.g(5.4 instead of '5.4')
t.s=new T.Scene()   //t needs it for adding incoming geometries
c=new T.PerspectiveCamera(90,h.H/h.W,1,1200)//fov,aspect ratio,near,far
  c.position.set(0,100,0)
r=new T.WebGLRenderer({antialias:!1})//I don't Want to render while moving so fast
  r.setSize(h.W,h.H)//setting canvas' width & height
  r.domElement.className='no'
  $(b).append(r.domElement)//appending/adding it to body as canvas
  r.domElement.id='cv'//I set id if it's needed
xhr('js/assets.js','u.a&&(u.shift(u.a=0)),t.ad(eval(this.response))')//load default assets and add them to scene
h.w.onresize=function(){r.setSize(h.w.innerWidth,h.w.innerHeight)}//when user resizes his page the it'll auto-fit
r.render(t.s,c)//let's render
t.st=new T.Object3D()//stairs
while(h.i<14)t.ad('B.999 .2 .128[brick/0]2 '+((2.7-.2*h.i)+1e-3)+' '+(3.07+.128*h.i++),t.st)//build repeating cubes/boxes that compose stairs
