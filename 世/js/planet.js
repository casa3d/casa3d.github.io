/*ORIGINAL CODE: Three.js 'tutorials by example', Author: Lee Stemkoski
 MODIFIED BY: Luis Avila (In order to make it faster, I've disabled several lines & parts of lines)

VARIABLES
console.log(0,A=new Date,A.getMilliseconds()) */
code=1, drag=chosen=X=Y=0
projector  = new T.Projector
mouse2D    = new T.Vector3(0,0,.5)

// FUNCTIONS
var get=get||F('s','alert(s)'),lg={}

//animate sphere
x='lookupContext.clearRect(0,0,code+1,1)'
y='lookupContext.fillRect(code'
z=',0,1,1),p.lay(lookupTexture.needsUpdate=1)'
p={
 i:0,
 l:F('C.innerHTML=v,L.innerHTML="";'+
  'for(h in w)v=w[h],L.innerHTML+="<a>"+(бзو一l[v]||v)'),
 ro:F('drag&&p.lay(requestAnimationFrame(p.ro))'),
 aint:F(x+','+y+'=newCode'+z),
 toggle:F('if(chosen)(p.i=!p.i)?'+x+':'+(Z=y+z)),
 tx:F('(v=new T.Texture(v,0,w=1001,w,h=w+2,h)).needsUpdate=!0;return v'),
 lay:function(){//commit changes
 //renderer.clear()
  renderer.render( scene, camera )/*composer.render() // use this line for anti-aliasing*/
//stats.update()
  drag&&controls.update()
/* if(drag){
  controls.update()
  camera.position.length()<300&&(console.log(3),camera.position.setLength(300))
  camera.position.length()>1000&&(console.log(1),camera.position.setLength(1000))}} */},
 cb:function(){//callback
  p.l('◕',['75%'])
  mapTexture=p.tx(img)
  tx = c('img',{onload:p.fy,src:'img/0.jpg'})
  onmousemove=function(e){
   if(!drag&&!chosen){
    mouse2D.x =   (e.pageX / innerWidth  ) * 2 - 1
    mouse2D.y = - (e.pageY / innerHeight ) * 2 + 1
    rayCaster = projector.pickingRay( mouse2D.clone(), camera )
    if(data=rayCaster.intersectObject(mesh)[0]){
      d = data.point.clone().normalize()
      u = Math.round(4096 * (1 - (.5 + Math.atan2(d.z, d.x) / (2 * Math.PI))))
      v = Math.round(2048 * (.5 - Math.asin(d.y) / Math.PI))
      if(code&&(newCode=mapContext.getImageData(u,v,1,1).data[0])){
       code!=newCode&&p.aint(p.l(rel[newCode][0],rel[newCode][1]))}}}
   else chosen=1}},

 fy:function(){//finally
  p.l('●',['100%'])
  outlineTexture = p.tx(tx)
 //lookupTexture.needsUpdate = mapTexture.needsUpdate = outlineTexture.needsUpdate = 1

  planeMaterial = new T.ShaderMaterial({
   uniforms:{
    width:      { type: 'f', value: W },
    height:     { type: 'f', value: H },
    outline:    { type: 't', value: outlineTexture },
    mapIndex:   { type: 't', value: mapTexture },
    lookup:     { type: 't', value: lookupTexture }},
   vertexShader:   globeVertexShader.textContent,
   fragmentShader: globeFragmentShader.textContent})

  geometry = new T.SphereGeometry( 100, 64, 32 )
  mesh = new T.Mesh( geometry, planeMaterial )
  scene.remove(scene.children[1])
  scene.add(mesh)
  p.aint(newCode=150)
  setTimeout(F("p.l('USA',['en'])"),500)},

 init:function(){//initialize
  //CONTROLS, EVENTS
  onmousedown=onmouseup=F('p.ro(drag=/d/.test(v.type))')
  onclick=F("(L.className=chosen=!chosen)?p.tg=setInterval(p.toggle,500):((w=v.target.text)&&((w=lg[w])?get(w,1):(h=new Date,alert(h.getFullYear()+'.'+(h.getMonth()+1)+'.30'))),"+(Z='clearInterval(p.tg),'+Z)+')')
  onresize=F('setTimeout(p.lay),'+(rz='W=innerWidth,H=innerHeight'))
  addEventListener('keyup',onblur=F(Z))
  eval(rz)

  // SCENE
  scene = new T.Scene()

  // CAMERA
  camera = new T.PerspectiveCamera( 45, W / H, .1, 20000)
  scene.add(camera)
  camera.position.set(0,200,200)
  camera.lookAt(scene.position)

  scene.add(mesh=new T.Mesh(new T.SphereGeometry( 100, 64, 32 ),new T.MeshBasicMaterial({color:0x092636})))

 /*
  renderer.sortObjects = 0
  renderer.generateMipmaps = 0
  renderer.setClearColor(0x000000)
 */

  // RENDERER
  container.appendChild(cv=(renderer = new T.WebGLRenderer).domElement )
  renderer.setSize(W, H)
  /* STATS
  stats = new Stats
  stats.domElement.setAttribute('style','position:absolute;bottom:0;z-index:100')
  container.appendChild( stats.domElement )*/
  p.lay()

  lookupContext = (lookupCanvas=c(256,1)).getContext('2d')
  lookupContext.fillStyle='#440'
  lookupTexture = p.tx(lookupCanvas)

  mapContext = c(4096,2048).getContext('2d')
  //console.log(1,x=new Date,x.getMilliseconds())
  img=c('img',{onload:F('p.cb(mapContext.drawImage(this,0,0))'),src:'img/1.png'})

  ////////////////////
  // POSTPROCESSING //
  ////////////////////

  renderer.autoClear = 0
  composer = new T.EffectComposer( renderer )
  renderModel = new T.RenderPass( scene, camera )
  effectFXAA = new T.ShaderPass( T.FXAAShader )
  effectFXAA.uniforms.resolution.value.set( 1 / (W || 2), 1 / (H || 2))

  effectCopy = new T.ShaderPass( T.CopyShader )
  effectCopy.renderToScreen = 1

  composer.addPass( renderModel )
  composer.addPass( effectFXAA )
  composer.addPass( effectCopy )
  controls = new T.OrbitControls( camera, cv )

 // EVENTS
  Tx.WindowResize(renderer, camera)
  //console.log(3,x=new Date,x.getMilliseconds())
  p.l('◑',['50%'])
  var l,L,r,R,t
  for(l in бзو一l)lg[бзو一l[l]]=l
  for(l in rel)rel[l][1]=rel[l][1].split(',')}}

//LET THE PARTY START!
p.init()