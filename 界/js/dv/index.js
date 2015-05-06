/*support
 一 二  三  四  五  六  七  八   九  十
 yī èr sān sì  wǔ liù  qī  bā  jiǔ shí */
s={
  d:document,
  l:ops.classList,
  nv:navigator,
  wk:new Worker('js/worker.js'),
  p:'一二三四五六七'.split(''),// -percent position
  style:'body{margin:0;overflow:hidden_button,fieldset{font-family:Segoe UI Symbol,verdana,emoji_div{transition:.6s ease_div{font-weight:bold_#ops:hover{top:0_#ops{height:15%;position:fixed;min-height:100px;width:100%_#ops button{border:0;border-radius:15px 0;box-shadow:#1e90ff 4px 3px 10px;color:#fff;cursor:pointer;font-size:4.4em;height:100%;min-width:90px;opacity:.9;padding:0;transition:.4s;width:13.7%_#ops button:hover{text-shadow:-5px 5px 9px #000_#ops button:nth-of-type(1){background:linear-gradient(45deg,#004c4c,#00c9c9)_#ops button:nth-of-type(2){background:linear-gradient(45deg,#070032,#917cff)_#ops button:nth-of-type(3){background:linear-gradient(45deg,#D9671F,#FFA100)_#ops button:nth-of-type(4){background:linear-gradient(45deg,#004a00,#00e500)_#ops button:nth-of-type(5){background:linear-gradient(45deg,#003971,#68c2ff)_#ops button:nth-of-type(6){background:linear-gradient(45deg,#62005d,#f84cf8)_#ops button:nth-of-type(7){background:linear-gradient(45deg,#691b00,#ff6f3e)_div#roll{height:100%;position:absolute;width:700%_div#roll>div{height:100%;float:left;font-size:1.15em;overflow:auto;width:14.2857%_div#roll>div>h1{text-transform:capitalize_.in{top:0_.out{top:-13.5%_.一{background:#54a095;left:0%_.二{background:#9189c0;left:-100%_.三{background:#d3894d;left:-200%_.四{background:#469e4a;left:-300%_.五{background:#4e99d5;left:-400%_.六{background:#b268b9;left:-500%_.七{background:#d38266;left:-600%',
  new:function(o){
    var i,e=s.d.createElement(o.tg)
    for(i in o)i!='tg'&&(e[i]=o[i])//,console.log(i,':',o[i])
    return e},
  ap:function(e,p){
    return p.appendChild(e)},
  ae:function(x,fn,e){e=e||s.ch[x]
    e.addEventListener('click',function(){fn(x)})},
  sty:function(r){//rules list
    var i,e=s.d.styleSheets[0]||s.ap(s.new({tg:'style'}),s.d.head).sheet
    r=r.split('_')
    for(i in r)e.insertRule(r[i]+'}',e.cssRules.length)},
  bad:function(symptom){alert(' : (  '+symptom)},
  clear:function(){
    clearInterval(s.clock)
    send.disabled=!1,
    send.innerText=s.txt,
    send.title=s.tt,
    send.innerText<2&&(s.bad('internet ?'))},
  send:function(){alert('pending to do')},
  sld:function(p){//slide
    roll.className=s.p[p]
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
  me:function(i,F){//mouse enter, increment, Fieldset, 玩: wán, 视频: shìpín
    s.F=F=roll.children[3].getElementsByTagName('fieldset')
    setTimeout(function(){
      s.ap(玩,s.F[0].children[玩.i=0])
      玩.onclick=function(){var v=视频
        v.hidden=v.src==location.href+'vids/'+玩.i+'.mp4'?
          v.hidden?
            0
            :1
          :(
          v.src='vids/'+玩.i+'.mp4',
          0)
        v.hidden?
          v.pause()
          :v.play()}
      for(i in F){
        F[i].i=i
        F[i].onmouseenter=function(){
          玩.i=this.i
          s.ap(玩,this.children[0])}}},2e3)},

  init:function(h){var i=0,dbe=1//does database already exist?
    s.idb(function(e){//I'd fetch records, as long as idb already exists "onsuccess"
      s.db=s.rs(e)
      dbe&&(
        s.tr({
          tbl:'session',
          obj:'current',
          cbck:function(){
            s.dt=s.usr.get(s.u=this.result.user),
            s.dt.onsuccess=function(){var p=this.result
              p&&(p=p.support.section)&&s.df(s.rc=s.p[p])&&(
                roll.className=s.rc)}}}))})//try to get last-position (of support-sections) from IDB
    
    onblur=s.sv

    s.ch=ops.children
    s.wk.postMessage({ua:(/Trident|AppleWebKit|Firefox/i).exec(s.nv.userAgent),lng:s.nv.language,rf:location.href,w:innerWidth,x:4})
    s.wk.onmessage=function(e){var d=e.data
      d.fn?
        eval(d.fn)
        :(s.ae(d.i,s.sld),
        //console.log(d.i,':',d.t,'\n',d.cnt,'\n\n'),
        s.ch[d.i].title=s.lng[d.i],
        s.ap(s.new({tg:'div',innerHTML:d.cnt}),roll),
        d.i==5&&typeof send!='undefined'&&(f=send.parentElement.children,
          s.me(0),
          send.onclick=function(){
            if(s.nv.onLine){
              if(f[6].value.length>15){
                s.txt=send.innerText,s.tt=send.title
                send.disabled=!0,send.innerText=30
                send.title=' . . . '
                s.clock=setInterval(function(){send.innerText--},1000)
                setTimeout(s.clear,3e4)
                xhr({URL:'mail.php',fn:"s.clear(),alert('OK!')"},{recipient:f[5].value,subject:f[1].value,message:f[6].value,from:f[3].value,dt:f[3].value,lng:s.nv.language})}
              else s.bad(f[6].placeholder+' ...')}
            else s.bad('internet ?')},
          send.innerHTML='✔'))}
    s.sty(s.style);
    (/linux/i).test(s.nv.platform)&&s.sty('@font-face{font-family:emoji;src:url(../css/emoji.woff)')
    s.ap(s.new({tg:'script',src:'js/xhr.js',onload:function(){for(var x=s.d.scripts,i=x.length;i;)x[--i].remove()}}),s.d.head)}}
console.clear()
onload=s.init