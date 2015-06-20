//Δtime u.c((x=new Date()).getSeconds(),x.getMilliseconds()),
o={
 usrAgnt:{Chrome:'webkit',Trident:'ms',Firefox:'moz',f:'FullScreen'},
 a:'a'.c(),
 ap:'application/',
 asset:A,
 A:{
  click:function(p){p=o.中文//escapeKey toggle event
   for(var l=0;l<p.length;l++)o.dv[l+1].ς(p[l])}},//current order goes opsMenu,th,mn,大师 that's why I've increased by 1
 c:')0/cover',
 Cs:[
  'xyzxyz'.s(),
  [0,0,0,0,0,0],
  [0,0,0,0,0,0]],
 ελ:'αβγδεζηθι'.s(),//ελλινικα: αβγδεζηθικλμνξοπρστυφχψω
 lbl:师二.G('ol')[0],
 hs:{
  ch:[],
  fn:[
   '',//click on colourPickerInput
   'o.this=this,o.iz.click()',//in order to import casa#date.zip click on inputZip
   'o.exp()',//export current house infront of camera
   'i.cmp(i.session=0)'],//log out
  slot:F('n,s',//name, size
   "'li'.a(o.lbl,{HTML:o.mez(s)+' | '+n})")},
 i:地点.G('input'),
 img:{
  id:'br do fl gl me wa wi wo'.S(),
  0:'transparent,rgba(0,0,0,.6',//even
  1:'-15deg,rgba(255,255,255,.3),transparent,rgba(0,0,0,.7',//odd
  init:function(dv,i,l,O,M,m){//division, index, object Odd, Even, Material
   M=(O=o.img).id[i-1]
   '#师一>:nth-child('.i(1+i+'){background:url(img/'+O.id[i-1]+'0.jpg'+o.c)
   while(l<15)u.A('img'.a(dv,{'':'o.ii(this)'}),{本:m=M+l+'.jpg'}),'#师二>:nth-child('.i(1+i+')>:nth-child('+(++l)+'){background:linear-gradient('+O[l%2]+')),url(img/'+m+o.c)}},
 alt:function(b,O){//alternative key: blob:URL, Object aka files[0]
//console.log(O)
  o.mg[b]=i.mg[O.size].s('|')[1]},
 mg:{},
 mt:new T.MeshBasicMaterial,
 ob3:new T.Object3D,
 S:510,//offset among houses, 10 is ´coz "I let user notice when finish one house & when starts another"
 Π:Math.PI,
 pl:F('a,b','return new T.PlaneGeometry(a,b)'),//^^
 URL:F('b','return URL.createObjectURL(b)'),
 tn:{//thumbnail, if it´s already added any tx before then it won´t repeat its tn
  blob:[]},//perhaps user'd put his/her own textures from hard-disk "blob"
 tdp:function(h,s){//height,size
  return{//text default parameters
   curveSegments:1,
   font:'janda manatee solid',
   height:h,
   size:s}},
 UP:function(O){
  console.log('from: UP')
  i.mg[O.sz]&&console.log(O.up=1)},
 upload:function(f0,b,l){//upload image: files[0], blob:URL, length
  (x=new XMLHttpRequest).open('POST','img/A.php')
  x.upload.onprogress=function(e){
   if(e.lengthComputable){
    console.log(e.loaded/e.total*100+'% uploaded')}}
  x.onload=function(e){
   console.log('ok')
   i.Δ.house={img:i.mg}
   i.tr('set')}
  f=new FormData
  f.append(l=Object.keys(i.mg).length,f0)//keys-length will be position-name of image
  x.send(f)
  i.mg[f0.size]=f0.name.s(/.jpg$/)[0]+'|'+l
  console.log(b)
  o.mg[b]=l},
 lr:function(c,r){//left-right: container, right?
  //u.c('called')
  var s=c.style,p=Number(s.left.slice(0,-1))
  this.r||r?
   Math.abs(p/100)+1<c.childElementCount/10&&(s.left=p-100+'%')
   :p&&(s.left=p+100+'%')},
 m:[[1e6,'MB'],[1e3,'KB'],[1,'bytes']],
 mez:function(n,i,d){//number
  for(i=0;i<o.m.length;i++)if(n>(d=o.m[i][0]))break
  return Number((n/d).toFixed(2))+' '+o.m[i][1]},
 op:['','','','',
  F('m.r(m.ρκ=0)'),//rotate 90° 0 means left-key
  F('m.act(o.A.click())'),// <- rotate by moving mouse ->
  F('m.rt(2)'),//rotate -90° 2 means right-key
  dr.act,//enable/disable drgNrsz's approval
  function(i){//toggle between full & normal screen
   i=u.d[this.I]
   u[i?'d':'b'][i?this.C:this.R]()},
  function(){var p=m.P,r=m.c,v=o.Cs,i,Ca,Cb,α,ε//position, rotation, Cameras, first, second camera, αχζισ, element
   this.innerHTML=this.innerHTML=='Ⓑ'?(
    Ca=1,
    Cb=2,
    'Ⓐ')
    :(Ca=2,
    Cb=1,
    'Ⓑ')
   for(i=0;i<v[0].length;i++){
    //v[Ca][i]=p[o.a[i]],v[Ca][i+3]=r[o.a[i]],
    ε=i<3?p:r,α=v[0][i]
    v[Ca][i]=ε[α] //element's current αχζισ
    ε[α]=v[Cb][i]}},
  F('o.rst(0)'),
  F('o.rst(3)')],
 vlz:function(v){
  (v=this.value)?
   m.i=v
   :this.value=m.i},
 中文:'左上权'.s(),//Zuǒ, Shang, Quán
 in:function(a,f,m){//accept, function, multiple
  return 'input'.a(
   {type:'file',
   accept:a,
   multiple:m},
   {change:f+'(this.files)'})},
 rst:function(p,i){//reset: position, input
  c[p?'rotation':'position'].set(o.i[p+0].value=0,o.i[p+1].value=0,o.i[p+2].value=0)},
 mn:function(b){//contextMenu
  var i=0,D,s='⊹⤴⤿◉⤾⤵'.s(),e
  D=o.mn='div'.p(h.M,{id:'opsMenu',class:'no'})
  D.rt=F('xy,p','o.mn.o&&(o.mn.o.rotation[xy]=o.mn.o.rotation[xy]+o.π/2*p)')
  D.ф=F('s','o.mn.o.material.map=T.ImageUtils.loadTexture(s)')
  D.fn=[
   F('o.ip.click(),o.mn.up=1'),
   function(O){
    (O=o.mn.o)&&(
     o.mn.c('no'),
     O.parent.id==o.added.id?
      o.added.remove(O)
      :t.s.children[1].remove(O),
     o.mn.up=0)},
    'x',//lie                                   ⤴
    'y',//rotate to the left                ⤿
    F('o.mn.o&&o.mn.o.rotation.set(0,0,0)'),// ◉
    'y',//rotate to the right                      ⤾
    'x']//raise or stand up                    ⤵

  for(i=0;i<s.length;i++){
   b.a(D,
    {HTML:s[i]},
    {'':i<2||i==4?
     D.fn[i]
     :F('o.mn.rt("'+D.fn[i]+'",'+(i<5?'-':'')+'1)')})}},
 rb:function(F){//read blob: since picture´s source comes from hard disk I´ll have to read it as blob (security reasons:users´ files are private)
  if(F.length){
   var x,l=0,I,a='',Δ,b=o.tn.blob,de//clck, iterator, files,doesn'tExists,clock
   //u.c(i,F.length;)
   x=setInterval(function(){de=1,f=F[l]//assigning
    for(I in b)if(b[I].sz==f.size&&!(de=0))break//{u.c('IAE: it already exists');break}
    de&&o.pt(
     a={
      nm:f.name,
      sz:f.size,
      up:(Δ=i.mg[f.size])&&!f.name.search(Δ),//if exactly such size was found then ask following: does the store Δname is anywhere inside given name; it means: uploaded already
      本:o.URL(f),
      图片:f},
     b.push(a))
      //:b[I].本//otherwise it means it !de || alreadyExists/wasCached
    if(++l>=F.length)clearInterval(x)/*,u.c('cleared !OK '+i+'/'+F.length)*/,de&&o.lr(图片,1)},100)
   o.F=F}
  else o.mn.up=0},
 ii:function(O){//insert image: Object
  var cp=c.position,P=((cp.x+o.S/2)/o.S+1+'')[0],p=o.ob3.clone()//position
  //console.log('from o.add:',P,O.本)
  o.mn.up?
   o.mn.ф(O.本)
   :(
   t.ad({
   a:'10 20['+O.本+'] ',
   p:P>0?
    t.s.children[P]||p
    :p,
   gp:t.s}),
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
    cp.z+=.1},10))
  O.本.length>8&&(//>8 means if 本 comes from user
   O.up?
    o.alt(O.本,O.图片)
    :o.upload(O.图片,O.本,O.up=!0))},//upload just inserted image
 pt:function(O){//push thumbnail: Object
  u.A(
   'div'.a(
    图片,
    {HTML:'<img><label>'+O.nm+'<br>'+o.mez(O.sz)},
    {'':'o.ii(this)'}),
   {up:O.up,图片:O.图片,本:O.本})
  '#图片>:nth-child('.i(图片.childElementCount+') img{background:url('+O.本+o.c)},
 cc:function(){//change color lighting intensity
  var c=t.s.__lights[0].color
  c.r=c.g=c.b=this.value/100},//and finally match them all
 ld:F('e','alert(e||"100% ?")'),
 dwn:function(n){//save casa3d.js inside casa# Universal Time C.zip
  o.a.download='casa#'+n+' ('+new Date().toUTCString().s(/, | GMT/)[1]+').zip'
  if(u.n.msSaveBlob)u.n.msSaveBlob(blb,o.a.download)
  else{
   clickEvent=u.d.createEvent('MouseEvent')/*
/*                                               screenY     metaKey
                                             detail      altKey
                             type      cancelable    clientY     relatedTarget */
   clickEvent.initMouseEvent('click',1,1,h.w,0,0,0,0,0,0,0,0,0,0,null)
   /*                                canBubble.    clientX     button     
                                         view          ctrlKey
                                               screenX     shiftKey */
   o.a.dispatchEvent(clickEvent)}},
 str:function(P){//spawn string
  var x,g,s='',m,M,f,r,p,rt,i,v//object x, geometry, string, Material, folder, position, rotation/repeat, iterator, vertices
  x=t.s.children[1].children[P]
  p=x.position
  r=x.rotation
  if(g=x.geometry)s=g.width/100+' '+g.height/100
  else{s=''
   //My Goal: B1 .2 .128 x15[br0]2 2.9005 2.936
   i=(x=x.children).length
   v=(x=x[0]).geometry
   if(i>1){
    s+='B'+v.width/100+' '+v.height/100+' '+v.depth/100+' x'+i}
   else{
    v=v.vertices
    for(i in v)s+=Number((v[i].x/100).toFixed(6))+','+Number((v[i].y/100).toFixed(6))+' '
    s=s.slice(0,-1)}}
   /*example decodefying string
    1.7 |2.5R|3,|                  original string
    0,3 2.5,3 2.5,2.5 1.7,2.5 1.7,0 0,0       iteration extended

    0,0 170,0 170,250 250,250 250,300 0,300     final set of vertices

   codefying
    0,3 2.5,3 2.5,2.5 1.7,2.5 1.7,0 0,0       ?/100
    1.7 |2.5R|3,|                  iteration analyzed */
  f=(m=(M=x.material).map).sourceFile//double side by default so, dot means 1
  rp=(rp=m.repeat.x)!=1?' '+rp:''
  s+='['+
   (/blob\:/.test(f)?
    '⎇'+o.mg[f]
    :/img\/(.*)\./.exec(f)[1])
   +rp+']'//Alternative Key Symbol, folder & repeat
  function d(l,a){
   if(l||a)l=(a==1?'':' ')+Number((l/100).toFixed(6))
   return l||''}
  p=(p.x||p.y)?d(p.x,1)+d(p.y,2)+d(p.z):''
  s+=p
  function rt(l,y){// αχζισ || аксыс
   if(l){var i=l<0?'-':''
    l=' '+i+(/1.57/.test(l)?
     'p'
     :'P')+(y||'')}
   return l||''}
  χ=rt(r.x)//rotation x
  γ=rt(r.y,'y')//rotation y
  s+=χ+γ+(M.side==2?'':'.')+'_'
  rz+=s},
 zip:F('return zip&&zip.method&&zip.method.deflate'),//compress
 exp:function(){//export option: house as js inside zip
  if(o.zip()){
   if(t.s.children.length-1){
    var p=((c.position.x+o.S/2)/o.S+1+'')[0],s//position,scene,iterator
    p=p>0?p:1
    /*console.log(p=p>0?p:1)
    cpx=camera.position.x, o.S=510
    why offset=cpx+255?
    [ . ] I'd say such "dot" is .5 or 50% but actually it's... 0 "just like vertices work" center
       but I wanted it to be like [  ] "dot starts in left square-bracket"
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
    for(var l=0;l<s.children.length;l++)o.str(l)
    s=o.hs.ch[p-1]//final string
    x=new Blob([rz.slice(0,-1)+'\n'+i.p]/*[#-1] 'cuz it'd never be 0*/,{type:o.ap+'JavaScript'})//house,mimeType
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
 imp:function(s,f){//string, file
                //510
  var p,n,l=h.ntH.children.length,S=o.S*l//space between each house h.ntH (its container) has got -40 in x axis, though
  t.ad({a:s,p:p=o.ob3.clone(),gp:t.s})
  c.position.set(p.position.x=S,1e3,1700)//1700 so that camera can display almost all houses&numbers
  c.rotation.set(0,0,0)//make me sure that camera is infront of them
  h.ntH.add(n=new T.Mesh(new T.TextGeometry(l+1,o.tdp(1,100)),o.mt))//number
  n.position.x=S-(l>8?30:0)
  f&&(//if it comes from file reader then it means it's new
   o.hs.ch.push({raw:s,name:f.name,size:f.size}),
   o.hs.slot(f.name,f.size))},
 ext:function(F,i){//extract house from zip
  if(F&&F[0]&&o.zip()){var i,c=o.hs.ch,z=F[0]//zipped file
   for(i=0;i<c.length;)if(z.size==c[i++].size)return
   zip.createReader(
    new zip.BlobReader(z),
    function(zr){//on read end
     zr.getEntries(function(e){//entries
      if(e=e[0])e.getData(
       new zip.BlobWriter(),
       function(blob){
        fr=new FileReader()
        fr.onload=function(r){//result
         r=this.result.split(/\n/)
         t.p=r[1]//foreign key aka ip=t.p
         o.imp(
          r[0],//asset
          z)}
        fr.readAsText(blob)},null)})})}
   else o.ld()},
 o:{id:''},
 始:function(P,p,L,D){
  u.a&&h.pr(u.u.house)
  //FINISHING Objects o,m
  D=地点.G('input')
  m[0]=D[0],m[1]=D[1],m[2]=D[2]//position xyz
  m[3]=D[3],m[4]=D[4],m[5]=D[5]//rotation xyz
  o.ip=o.in('image/*','o.rb',1)
  o.iz=o.in(o.ap+'zip','o.ext')//extract zip
  o.dv=h.M.children
  o.π=o.Π/2
  //MESH FLOOR
  h.ga.add(o.added=o.ob3.clone())
  h.R(o.added.add(o.grH=new T.GridHelper(1e4,40)))
  o.grH.position.y=-.9
  //BINDING EVENTS TO ELEMENTS
  lit.onchange=o.cc
  vlz.onchange=o.vlz, m.i=vlz.value
  h.M.E({
   contextmenu:function(e){var r,s,c='no'
    e.preventDefault(),e.stopPropagation()
    //!dr.app&&dr.act()
    r=dr.rc(e,dr.xy(e))
    if(r&&(o.mn.o=r=r.object)&&r.id!=6){s=o.mn.style,c=''
     s.left=e.clientX+'px'
     s.top=e.clientY+'px'}
    o.mn.up=!o.mn.c(c)},
   keydown:function(e,k){//user ops shortcuts (师二's buttons)  I use keydown so that i could identify 0-9 keyboard keys
    u.d.activeElement.type!='text'&&o.x[k=e.which]&&o.x[k].click()}})
  //loops as background
  setTimeout(function(B,b,β,f,p,P,П,t){
   b=师二.G(B='button'),p=mn.G(B),t=h.M.g('tg')
   o.x={27:o.A,49:t[0],50:t[1],51:t[2],52:o.A,98:b[3],99:p[9],103:b[2],122:b[1]}
   P=/w/.test(П='-'+i.e+'-')?'webkit':'',o.yan=p[5],β=p[8]
   β.I=P+'Is'+(f='FullScreen'),β.C=P+'Cancel'+f,β.R=P+'Request'+f
   for(var l=0;l<p.length;l++)p[l].e(o.op[l])
   p=o.hs.fn,
   /s/.test(П)?//ms: trident
    (p[0]='o.hs.cp.ς("no")',
    o.hs.cp='iframe'.a(师二.firstElementChild.children[1],{class:'no',src:'З'},{load:'this.contentWindow.ж.f=u.sty'}))
   :(p[0]='o.hs.cp.click()',
    o.hs.cp='input'.p(师二.firstElementChild,{type:'color',value:u.pc},{change:'u.sty(u.pc=this.value)'}))
   for(var l=0;l<p.length;l++)b[l].e(p[l])
   p=o.中文,b=th.G(B)
   for(var l=0;l<p.length;l++){
    b[l].e(l?'o.lr(图片,'+(l-1)+')':'o.ip.click()')
    t[l].e(o.dv[l].id+'.ς("'+o.中文[l]+'")')}
   p=师一.children,'#师二>*{height:'.i(L=100/9,'%')
   for(var l=0;l<p.length;l++)p[l].e('中.id="",this.id="中",师二.c(o.ελ['+l+'])'),l&&o.img.init('div'.c().a(师二),l,0,'.'.i(o.ελ[l]+'{'+П+'transform:translate3D(20%,-'+(L*l)+'%,0)'))
   o.mn(B)},500)}}//contextMenu
o.始()
  /*
  //th.c('上'),mn.c('左'),大师.c('权')
*/
