s={d:document,c:'green blue darkcyan goldenrod saddlebrown red grey'.split(' '),l:ops.classList,w:window,ua:navigator.userAgent,wk:new Worker('js/worker.js'),init:function(h){var i=0,em;s.ch=ops.children,s.wk.postMessage({ua:/Trident|AppleWebKit|Firefox/i.exec(s.ua),w:s.w.innerWidth,x:4}),s.wk.onmessage=function(e){var d=e.data;d.fn?eval(d.fn):(s.ae(d.i,s.sld),em=s.d.createElement('div'),em.innerHTML=d.cnt,roll.appendChild(em),1==d.i&&(dt.valueAsDate=new Date,send.innerHTML='SEND',s.ae(1,s.send,send)))},roll.style.left=s.ck(),s.l.add('green'),s.w.onbeforeunload=s.w.onblur=s.sv},ae:function(e,n,d){d=d||s.ch[e],d.addEventListener('click',function(){n(e)})},ck:function(){return k=/support=(.)/.exec(s.d.cookie),k?100*-k[1]+'%':0},clss:function(e){s.l.remove(s.l[1]),s.l.add(s.c[e])},send:function(){alert('pending to do')},sld:function(e){roll.style.left=e?100*-e+'%':0,s.clss(e)},sv:function(){var e=roll.style.left.charAt(1);'%'!=e&&(s.d.cookie='support='+e)}},console.clear(),s.init();