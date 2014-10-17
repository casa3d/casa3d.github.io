s={
  d:document,
  c:'green blue darkcyan goldenrod saddlebrown red grey'.split(' '),
  l:ops.classList,
  w:window,
  wk:new Worker('js/worker.js'),
  init:function(h){var i=0,em,nv=navigator
    s.ch=ops.children
    s.wk.postMessage({ua:(/Trident|AppleWebKit|Firefox/i).exec(nv.userAgent),on:nv.onLine,lng:nv.language,rf:location.href,w:s.w.innerWidth,x:4})
    s.wk.onmessage=function(e){var d=e.data
      d.fn?
        eval(d.fn)
        :(s.ae(d.i,s.sld),
        s.ch[d.i].title=s.lng[d.i],
        em=s.d.createElement('div'),
        em.innerHTML=d.cnt,
        roll.appendChild(em),
        d.i==0&&(
          dt.valueAsDate=new Date(),
          send.innerHTML='❗✔',
          s.ae(0,s.send,send)))
        /*setTimeout(function(){s.wk.terminate()},1e2)*/}
    roll.style.left=s.ck()
    s.l.add('green')
    s.w.onbeforeunload=s.w.onblur=s.sv},
  ae:function(x,fn,e){e=e||s.ch[x]
    e.addEventListener('click',function(){fn(x)})},
  ck:function(){
    k=/support=(.)/.exec(s.d.cookie)
    return k?-k[1]*100+'%':0},
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