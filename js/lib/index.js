u={K:" casa3d.hostzi.com",lng:/es/.test(navigator.language)?"es":"en",d:document,p:chk.parentNode,lp:lnk.parentNode,tx:function(n){var e=n.innerHTML.split(/[<>]/);n.innerHTML="Estoy de acuerdo con estos <"+e[1]+">Terminos & Condiciones de uso</a>"},t:function(n){return new RegExp(n?"\\w{4}":"[a-z]{3}").test(u.st=u.i[n||0].value)&&!/\W/.test(u.st)},shift:function(){var n,e=[cv,".ops",fs,info,ft];for(n in e)$(e[n]).toggleClass("no");h.R(u.a=!u.a)},ss:function(n){i.Δ.user=n||0,i.tr("set","session")},"in":function(n){i.cmp=function(){u.a===!1&&(u.ss(u.i[0].value),u.i[0].value=u.i[1].value=u.i[2].value="",u.shift())},i.tr(n)},vl:function(){var n=(i.key=u.i[0].value,i.val=u.i[1].value),n=Number(n)||n;u.lg?u.t()&&u.t(1)?u.in("get"):alert("fill name, password"):chk.checked&&u.t()&&u.t(1)&&n==u.i[2].value?u.in("add"):alert("Please check that you:\n1: fill name > 3\n2: fill and match password >4\n3: Accepted T&Cs?")},chk:function(){lnk.className=lnk.className?(chk.checked=!0,""):(chk.checked=!1,"noread")},cl:function(){u.p.className="no"==u.p.className?"":"no",u.lg=!u.lg,fs.className=(lg.className=u.lg?"lg":"su")+"bg"},sgn:function(){chk.onclick!=u.chk&&(chk.onclick=u.lp.onclick=u.chk,chk.onkeypress=chk.click)},cas:function(n){fl=u.d.createElement("script"),fl.src=n+".js",u.d.head.appendChild(fl)},init:function(){u.out=u.ss,u.i=u.d.getElementsByTagName("input"),u.name=u.i[0],u.value=u.i[1],lg.onclick=u.cl,u.sgn(),ok.onclick=u.vl,info.onclick=function(){open(location.href+"support","_blank")},u.lg&&u.cl(u.lg=0),ch.msg="es"==u.lng?(u.tx(u.lp),"Si acepta, la pagina cargaria un 50% MAS RAPIDO\ny ademas tendria acceso a"+u.K+" AUN SIN internet!"):"If you accept, this page would load 50% faster\nand furthermore you'd have access to"+u.K+" EVEN WITHOUT internet!"}},u.init(u.lg=0),chk.checked=0,window.onload=function(){u.cas("js/lib/filler")}