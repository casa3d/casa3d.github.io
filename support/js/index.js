s={d:document,c:"green blue darkcyan goldenrod saddlebrown red grey".split(" "),l:ops.classList,w:window,nv:navigator,wk:new Worker("js/full/worker.js"),init:function(h){var i=0,em;s.ch=ops.children,s.wk.postMessage({ua:/Trident|AppleWebKit|Firefox/i.exec(s.nv.userAgent),on:s.nv.onLine,lng:s.nv.language,rf:location.href,w:s.w.innerWidth,x:4}),s.wk.onmessage=function(e){var d=e.data,x=new Date;d.fn?eval(d.fn):(s.ae(d.i,s.sld),s.ch[d.i].title=s.lng[d.i],em=s.d.createElement("div"),em.innerHTML=d.cnt,roll.appendChild(em),0==d.i&&(f=send.parentElement.children,/AppleWebKit/i.test(s.nv.userAgent)?dt.valueAsDate=x:dt.value=x.getFullYear()+"-"+x.getMonth()+"-"+x.getDate(),send.onclick=function(){s.nv.onLine?/\d{4}-\d{1}|\d{2}-\d{1}\d{2}/.test(f[3].value)?f[8].value.length>15?(s.txt=send.innerText,s.tt=send.title,send.disabled=!0,send.innerText=30,send.title=" . . . ",s.clock=setInterval(function(){send.innerText--},1e3),setTimeout(s.clear,3e4),xhr({URL:"php/mailer.php",fn:function(){s.clear(),send.title=send.innerText="OK!",alert(this.response)}},{recipient:f[7].value,subject:f[1].value,message:f[8].value,from:f[5].value,dt:f[3].value,lng:s.nv.language})):s.bad(f[8].placeholder+" ..."):s.bad(f[3].placeholder+" 📅"):s.bad("internet ?")},send.innerHTML="✔"))},roll.style.left=s.ck(),s.l.add("green"),s.w.onbeforeunload=s.w.onblur=s.sv},ae:function(e,n,t){t=t||s.ch[e],t.addEventListener("click",function(){n(e)})},bad:function(e){alert(" : (  "+e)},ck:function(){return k=/support=(.)/.exec(s.d.cookie),k?100*-k[1]+"%":0},clear:function(){clearInterval(s.clock),send.innerText<2&&(send.disabled=!1,send.innerText=s.txt,send.title=s.tt,s.bad("internet ?"))},clss:function(e){s.l.remove(s.l[1]),s.l.add(s.c[e])},send:function(){alert("pending to do")},sld:function(e){roll.style.left=e?100*-e+"%":0,s.clss(e)},sv:function(){var e=roll.style.left.charAt(1);"%"!=e&&(s.d.cookie="support="+e)}},console.clear(),s.init();