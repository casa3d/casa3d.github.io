i={
  tbl:'users',
  v:{
    x:0,
    y:0,
    z:0},
  Δ:{},
  c:function(e){
    console.log(e)},
  e:function(){
    alert(':( this web-browser does not support IndexedDB, please read'+u.K+'/support')},
  user:function(){return'users'==i.tbl?
    {house:{
      position:{
        x:0,
        y:0,
        z:0},
      rotation:{
        x:0,
          y:0,
          z:0}},
      support:{
        lang:u.lng,
        section:0},
      user:{
        name:i.key,
        pass:i.val}}
    :{type:'current',
      user:i.key}},
  add:function(){
    i.ob.add(new i.user)
    u.a=!1},
  set:function(){
    i.rsp.onsuccess=function(){var e,t,s,r
      if(e=i.object=i.rsp.result,'users'==i.tbl)for(s in i.Δ)for(r in t=i.Δ[s])e[s][r]=t[r]
      else e?
        e.user=i.Δ.user
        :e=new i.user
      i.ob.put(e)}},
  get:function(){
    i.rsp.onsuccess=function(){var e=i.rsp.result
      u.a=0
      'users'==i.tbl?
        u.lg?
          e?
            e.user.pass==i.val&&(u.a=!1)
            :i.bad()
          :(u.a=1,u.h=e.house)
        :e&&e.user&&(
          i.key=e.user,i.tr('get'))}},
  bad:function(){
    alert(' : ( ')},
  tr:function(e,t){
    i.t=i.db.transaction(i.tbl=t||'users','readwrite')
    i.t.onerror=i.bad
    !t&&(i.t.oncomplete=i.cmp)
    i.ob=i.t.objectStore(i.tbl)
    'add'!=e&&(i.rsp=i.ob.get(t?'current':i.key))
    i[e]()},
  rst:function(e){
    i.db=e.target.result},
  init:function(){
    (i.dx=indexedDB)?(
      i.rq=i.dx.open('DB',3),
      i.rq.onupgradeneeded=function(e){i.new=1
        i.rst(e)
        !i.db.objectStoreNames[0]&&(
          i.ss=i.db.createObjectStore('session',{keyPath:'type'}),
          i.ob=i.db.createObjectStore('users',{keyPath:'user.name',autoIncrement:!0}))},
      i.rq.onsuccess=function(e){
        i.rst(e)
        !i.new&&i.tr('get','session')})
    :i.e()}}
i.init()