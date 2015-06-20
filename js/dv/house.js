t.s=new T.Scene  //t needs it for adding incoming geometries
c=new T.PerspectiveCamera(90,innerHeight/innerWidth,1,3600) //fov,aspect ratio,near,far
h={i:0,          //increase
 ga:new T.Object3D,//container o´ global assets
 cl:'☸ㄨ'.s(),
 cmr:function(){//m.P=c.position & m.c=c.rotation
  u.a?(
   c1={position:c.position,rotation:c.rotation},
   'undefined'!=typeof c2&&h.pr(c2))
   :(c2={position:c.position,rotation:c.rotation},
   'undefined'!=typeof c1&&h.pr(c1))},
 pr:function(O,p,r){ //set camera's position & rotation
  p=O.position,r=O.rotation
  m.P.set(p.x,p.y,p.z)
  m.c.set(r.x,r.y,r.z)},
 M:mn.parentNode,
 R:F('u.a&&(requestAnimationFrame(h.R),r.render(t.s,c))'),
 始:function(){
  h.ntH=h.ga.clone()
  t.s.add(h.ga)
  h.ga.add(new T.AmbientLight)
  h.ga.add(h.ntH)
  h.ntH.position.set(-40,1100,600)
  c.position.y=100
  r=new T.WebGLRenderer({canvas:edt.firstChild})
  R='r.setSize('+W+','+H+');'
  c.position.set(u.tu=0,800,1500)//timeup
  dm=高.G('em')[0].n(1)
  dm.r=new T.WebGLRenderer({canvas:dm})
  dm.R=F('u.a&&(requestAnimationFrame(dm.R),dm.r.render(dm.s,c))')
  t.ad({a:A,
   p:dm.p=new T.Object3D,
   gp:dm.s=t.s.clone(),
   cb:F("u.t=setInterval(F('dm.r.render(dm.s,c),u.tu++>1&&(clearInterval(u.t))'),1e3)")})
  dm.n(2).firstElementChild.e('dm.R(this.innerHTML=dm.parentNode.c(h.cl[(u.a=!u.a)?1:0]),this.blur())').α({HTML:dm.parentNode.c('☸')})

  onresize=F(z+=',dm.'+R+R)//when user resizes his page then it'll auto-fit
  F(z)()}}//setting canvas' width & height
h.始()