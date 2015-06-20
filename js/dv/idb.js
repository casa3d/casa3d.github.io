//'*{transition:1s'.i()
i={
 e:i.e,
 p:i.p,
 tbl:'users',
 v:{
  x:0,
  y:0,
  z:0},
 Δ:{},
 c:F('e','console.log(e)'),
 add:F(//add user only if this one doesn't exist already
  'i.rsp.onsuccess=F("i.rsp.result?alert(D[1]):i.ob.add(i.cmp(i.登录||new i.user,i.登录=0))")'),//D1: user found already
 bad:F("alert(D[0])"),//D0: login error
 b4:F('s','return btoa(s).toLowerCase()'),
 cmp:F('e,O','i.shift(i.wipe(u.u=u.a?i.mg=i.upr():(O=e.house,i.mg=O.img,c2={position:O.position,rotation:O.rotation},e),!i.session&&i.ss()));return e'),
 er:F('alert(":( IndexedDB")'),
 LG:function(k,v,x){
  console.log(k),console.log(v),console.log(x);
  (i.x=x=new XMLHttpRequest).open('POST','php/LG.php')
  x.setRequestHeader('content-type','application/x-www-form-urlencoded')
  x.onload=function(p,A,X){
   if(eval('O='+this.response)){A={}
    // '000:br0|0,111:br1|1'
    // '1111:br1|1','222:br2|2'
    if(O.img)for(var A={},p=O.img,l=0;l<p.length;l++)console.log(l),a=p[l].s(':'),A[a[0]]=a[1]
    // {1111:'br1|1',222:'br2|2'}
    P=O.position,R=O.rotation
    eval('X={house:{ip:"'+O.ip+'",position:'+P+',rotation:'+R+'},support:{lang:"'+O.lang+'",page:'+O.page+'},user:{name:"'+O.name+'",pass:'+O.pass+'}}')
    X.house.img=A
    i.登录=X
    i.tr('add')
    P=JSON.parse(P),R=JSON.parse(R)
    m.P.set(P.x,P.y,P.z),m.c.set(R.x,R.y,R.z)
    console.log(X)}}
  x.send(v='nm='+k+'&pw=['+v+']')},
 upr:function(p,r){p=m.P,r=m.c//upgrade position/rotation
  i.Δ.house={
   position:{x:p.x,y:p.y,z:p.z},
   rotation:{x:r.x,y:r.y,z:r.z}}
  i.user(i.tr('set'))
  return {}},
 user:function(t,O,p,r){
  p=typeof m!='undefined'?(
   r=m.c,
   m.P)
   :r={x:0,y:0,z:0}
  return'users'==i.tbl?
  (O={house:{
   img:i.mg||{},
   ip:i.p,
   position:{
    x:p.x,
    y:p.y,
    z:p.z},
   rotation:{
    x:r.x,
    y:r.y,
    z:r.z}},
   support:{
    lang:u.lg,
    page:u.pg},
   user:{
    name:i.key,
    pass:i.val}},
   t!='LG'&&i.xhr(O),
   O)
  :{type:'current',
   user:i.key}},
 xhr:function(O,x,U){//Object, XHR, new?
  (i.x=x=new XMLHttpRequest).open('POST','php/IN.php')
  U=u.a?'y':'n'//update? if y it means: user's logging out so, update possible Δ data
  x.setRequestHeader('content-type','application/x-www-form-urlencoded')
  v='up='+U+'&nm='+i.key+'&ip='+i.p+'&pw=['+i.val+']&lg='+u.lg+'&pg='+O.support.page+'&ps='+JSON.stringify(O.house.position)+'&rt='+JSON.stringify(O.house.rotation)
  x.onload=F(U?'console.log("user-server Δata=0")':'location.reload()')
  x.send(v)
  return O},
 set:function(){//add user
  i.rsp.onsuccess=function(){var t,s,r,e=i.object=i.rsp.result
   if('users'==i.tbl)for(s in i.Δ)for(r in t=i.Δ[s])e[s][r]=t[r]
   else e?
    e.user=i.Δ.user
    :e=new i.user
   //console.log('i.rsp.result:',e)
   i.ob.put(e)}},
 get:function(){//get user from idx or user logs in
  i.rsp.onsuccess=function(){var e=i.rsp.result,p
   i.tbl=='users'?
    i.session?
     i.cmp(e)//,console.log('session')
     :e&&(p=e.user.pass)?
      p.二?
       i.val.二(p)?
        i.cmp(e)//,console.log('二')
        :i.bad()
       :i.cmp(setTimeout(i.up,1e3))
      :i.LG(i.key,i.val)
    :e&&e.user&&(
     i.key=e.user,
     i.tr('get'),
     i.session=1/*,
     console.log(0,i.key)*/)}},
 tr:function(me,t){//transaction: method,table
  i.t=i.db.transaction(i.tbl=t||'users','readwrite')
  i.t.onerror=i.bad
  i.ob=i.t.objectStore(i.tbl)
  i.rsp=i.ob.get(t?'current':i.key)
  i[me]()},
 rst:F('e/*result from upgradeneeded／success event*/',
  'i.db=e.target.result'),
 ss:F(//set session:value
  //'console.log("ss"),'+
  'i.Δ.user=i.入(u.登录?0:2),'+
  "i.tr('set','session')"),
 shift:F(//i.c('called shift fn')
  //'console.log("welcome back: "+i.key),'+
  "高.c((u.a=!u.a)?'二':'一'),"+
  'typeof h!="undefined"&&h.R(h.cmr())'),
 up:F(//should pass not to be Uint8Array, pass shall be updated (encoded)
  'i.Δ=i.user(i.tbl="users"),'+//just updating pass & adding UUID key (universally unique identifier IN ITS V4)
  'i.tr("set")'),/*committing changes*/
  //'console.log("ok, pass' been updated")'
 入:F('l/*Shūrù input: return its value, i=index*/',
  'v=i.b4(输入[l||0].value);'+//from Binary-String to 64Bit-String
  'return l%2?i.val=v:i.key=v'),//is odd?val:key
 wipe:F(
  'for(var l=0;l<输入.length;l++)输入[l].value=""'),
 ln:F('s',//length
  'return i.入(s).length>=4'),
 vl:function(检,k,v,o,m){//validate: 检 (Jiǎn: check), key, value, option, message
  u.登录&&(检=v=1,k=0,o='get',m=1)
  检&&i.入(4)==i.入(m=3)&&i.ln(k,m=2)&&i.ln(v)&&(i.val=u.E(i.val))?
   i.tr(o)
   :alert(D[m])},
   /* 4 agree terms & condition
      3 password match
      2 user name & password >=4
      1 user already exist
      0 log in error */
 始:function(s,rest){//shǐ: start
  (i.dx=indexedDB)?u.A(
   i.rq=i.dx.open('DB',3),
   {onupgradeneeded:function(e){i.new=1
    i.rst(e)
    !i.db.objectStoreNames[0]&&(
     i.SS=i.db.createObjectStore('session',{keyPath:'type'}),
     i.ob=i.db.createObjectStore('users',{keyPath:'user.name',autoIncrement:!0}))},
   onsuccess:function(e){
    i.rst(e)
    !i.new&&i.tr('get','session')}})
  :i.er()
 /* in 'three rest 界 世'
   out     'three 界 世 rest' */
  rest='vectrix t asset house move drgNrsz ops fnt zip deflate'//
  s='three '+(i.key?
   rest+' 界 世'
        :'界 世 '+rest)
  s.中()}}
i.始(倒挂.G('button').e("this.blur(),i.vl(倒挂.g('检')[0],2,3,'add',4)"))//Dàoguà: upside-down