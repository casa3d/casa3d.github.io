s={//support
  d:document,
  cl:'green blue darkcyan goldenrod saddlebrown red grey'.split(' '),
  l:ops.classList,
  nv:navigator,
  wk:new Worker('js/worker.js'),
  p:'zero one two three four five six'.split(' '),// -percent position
  ae:function(x,fn,e){e=e||s.ch[x]
    e.addEventListener('click',function(){fn(x)})},
  bad:function(symptom){alert(' : (  '+symptom)},
  clear:function(){
    clearInterval(s.clock)
    send.disabled=!1,
    send.innerText=s.txt,
    send.title=s.tt,
    send.innerText<2&&(s.bad('internet ?'))},
  clss:function(p){
    s.l.remove(s.l[1])
    s.l.add(s.cl[p])},
  send:function(){alert('pending to do')},
  sld:function(p){//slide
    roll.className=s.p[p]
    s.clss(p)
    s.sv()},
  //IndexedDB fns 
  log:function(m){console.log(m)},
  df:function(){return roll.className!=s.rc},//are original and backed up different?
  sv:function(){
    s.u&&s.df()&&s.tr({
      tbl:'users',
      obj:s.u,
      cbck:function(){var r=this.result
        r.support.section=s.p.indexOf(roll.className)
        s.ob.put(r)}})},
  tr:function(o){var ss='session',u='users'
    s.t=s.db.transaction([ss,u],'readwrite')
    s.t.onerror=function(e){s.log(e)}
    s.ob=s.t.objectStore(o.tbl)
    o.tbl==ss&&(
      s.usr=s.t.objectStore(u))
    s.rsp=s.ob.get(o.obj)
    s.rsp.onsuccess=o.cbck},
  rs:function(e){return e.target.result},
  idb:function(scss){
    s.idxDB=indexedDB
    s.rq=s.idxDB.open('DB',3)//request DataBase
    s.rq.onupgradeneeded=function(e){dbe=0
      s.log('upgrade needed')
      s.db=s.rs(e)
      !s.db&&(
        s.db.createObjectStore('session',{keyPath:'type'}),
        s.db.createObjectStore('users',{keyPath:'user.name',autoIncrement:!0}))}
    s.rq.onsuccess=scss},

  init:function(h){var i=0,em,dbe=1//does database already exist?
    s.idb(function(e){//I'd fetch records, as long as idb already exists "onsuccess"
      s.db=s.rs(e)
      dbe&&(
        s.tr({
          tbl:'session',
          obj:'current',
          cbck:function(){
            s.dt=s.usr.get(s.u=this.result.user),
            s.dt.onsuccess=function(){var p=this.result.support.section
              s.df(s.rc=s.p[p])&&(
                roll.className=s.rc,
                s.clss(p))}}}))})//try to get last-position (of support-sections) from IDB
    
    onblur=s.sv

    s.ch=ops.children
    s.wk.postMessage({ua:(/Trident|AppleWebKit|Firefox/i).exec(s.nv.userAgent),lng:s.nv.language,rf:location.href,w:innerWidth,x:4})
    s.wk.onmessage=function(e){var d=e.data,x
      d.fn?
        eval(d.fn)
        :(s.ae(d.i,s.sld),
        s.ch[d.i].title=s.lng[d.i],
        em=s.d.createElement('div'),
        em.innerHTML=d.cnt,
        roll.appendChild(em),
        d.i==0&&(f=send.parentElement.children,
          x=new Date(),
          (/AppleWebKit/i).test(s.nv.userAgent)?
            dt.valueAsDate=x
            :dt.value=x.getFullYear()+'-'+x.getMonth()+'-'+x.getDate(),
          send.onclick=function(){
            if(s.nv.onLine){
              if(/\d{4}-\d{1}|\d{2}-\d{1}\d{2}/.test(f[3].value)){
                if(f[8].value.length>15){
                  s.txt=send.innerText,s.tt=send.title
                  send.disabled=!0,send.innerText=30
                  send.title=' . . . '
                  s.clock=setInterval(function(){send.innerText--},1000)
                  setTimeout(s.clear,3e4)
                  xhr({URL:'php/mailer.php',fn:"s.clear(),alert('OK!')"},{recipient:f[7].value,subject:f[1].value,message:f[8].value,from:f[5].value,dt:f[3].value,lng:s.nv.language})}
                else s.bad(f[8].placeholder+' ...')}
              else s.bad(f[3].placeholder+' 📅')}
            else s.bad('internet ?')},
          send.innerHTML='✔'))}}}
console.clear()
onload=s.init