s={
  d:document,
  c:'green blue darkcyan goldenrod saddlebrown red grey'.split(' '),
  l:ops.classList,
  w:window,
  nv:navigator,
  wk:new Worker('js/full/worker.js'),
  init:function(h){var i=0,em
    s.ch=ops.children
    s.wk.postMessage({ua:(/Trident|AppleWebKit|Firefox/i).exec(s.nv.userAgent),on:s.nv.onLine,lng:s.nv.language,rf:location.href,w:s.w.innerWidth,x:4})
    s.wk.onmessage=function(e){var d=e.data,x=new Date()
      d.fn?
        eval(d.fn)
        :(s.ae(d.i,s.sld),
        s.ch[d.i].title=s.lng[d.i],
        em=s.d.createElement('div'),
        em.innerHTML=d.cnt,
        roll.appendChild(em),
        d.i==0&&(f=send.parentElement.children,
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
          send.innerHTML='✔'))}
    roll.style.left=s.ck()
    s.l.add('green')
    s.w.onbeforeunload=s.w.onblur=s.sv},
  ae:function(x,fn,e){e=e||s.ch[x]
    e.addEventListener('click',function(){fn(x)})},
  bad:function(symptom){alert(' : (  '+symptom)},
  ck:function(){
    k=/support=(.)/.exec(s.d.cookie)
    return k?-k[1]*100+'%':0},
  clear:function(){
    clearInterval(s.clock)
    send.disabled=!1,
    send.innerText=s.txt,
    send.title=s.tt,
    send.innerText<2&&(s.bad('internet ?'))},
  clss:function(p){
    s.l.remove(s.l[1])
    s.l.add(s.c[p])},
  send:function(){alert('pending to do')},
  sld:function(p){
    roll.style.left=p?
      -p*100+'%'
      :0
    s.clss(p)},
  sv:function(){var v=roll.style.left.charAt(1)
    v!='%'&&(s.d.cookie='support='+v)}}
console.clear()
s.init() 