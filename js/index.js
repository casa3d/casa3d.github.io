u={cl:'one two three four five six seven'.split(' '),d:document,hch:hd.children,nv:navigator,p:chk.parentNode,sp:lnk.parentNode,c:function(e){return u.d.createElement(e)},g:function(e){return u.d.getElementsByTagName(e)},gc:function(e,n,c){n=n||'active',c=u.d.getElementsByClassName(n)[0],c&&(c.className=''),e.className=n},tt:function(e){title.innerHTML!=e+'&nbsp'&&(title.innerHTML=e+'&nbsp')},tx:function(e){var n=e.innerHTML.split(/[<>]/);e.innerHTML='Estoy de acuerdo con estos <'+n[1]+'>Terminos & Condiciones de uso</a>'},t:function(e){return new RegExp(e?'\\w{4}':'[a-z]{3}').test(u.st=u.i[e||0].value)&&!/\W/.test(u.st)},shcl:function(){u.p.className='no'==u.p.className?'':'no',u.value.className=(u.lg=!u.lg)||u.match()},shCl:function(e,n){roll.className!=(n||u.cl[this.idx||e])&&(roll.className=u.cl[this.idx||e],e=e>-1?u.hch[e]:this,u.gc(e))},slide:function(e){''!=info.className&&(info.className=''),''!=menu.className&&(menu.className=''),cnt.children[1].className=u.cl[e]},cmr:function(){u.a?(c1={p:c.position,r:c.rotation},'undefined'!=typeof c2&&(c.position=c2.p,c.rotation=c2.r)):(c2={p:c.position,r:c.rotation},'undefined'!=typeof c1&&(c.position=c1.p,c.rotation=c1.r))},shift:function(){ops.className=cv.className=cv.className?'':'no',u.cmr(),$('trgt').toggleClass('no'),h.R(u.a=!u.a)},ss:function(e){i.Δ.user=e||0,i.tr('set','session')},in:function(e){i.cmp=function(){u.a===!1&&(u.ss(u.i[0].value),u.i[0].value=u.i[1].value=u.i[2].value='',u.shift())},i.tr(e)},match:function(){return u.i[1].value==u.i[2].value},vl:function(){var e=(i.key=u.i[0].value,i.val=u.i[1].value),e=Number(e)||e;u.lg?u.t()&&u.t(1)?u.in('get'):alert(u.fill):chk.checked&&u.t()&&u.t(1)&&u.match()?u.in('add'):alert(chk.msg)},chk:function(){lnk.className=lnk.className?(chk.checked=!0,chk.innerHTML='☑',''):(chk.checked=!1,chk.innerHTML='⬛','noread')},sgn:function(){chk.onclick!=u.chk&&(chk.onclick=u.sp.onclick=u.chk)},cas:function(){dm.classList.add('back'),u.a=0;var e,n='idb filler'.split(' ');for(e in n)fl=u.c('script'),fl.src='js/'+n[e]+'.js',u.d.head.appendChild(fl)},init:function(){var e=info.children,n=e[0].children,c=e[1].children;play.innerHTML='⏳',u.hch[0].className='active',play.onclick=function(){dm.R&&(!u.a&&dm.R(m.rKey=u.a=1),cnt.className=this.className='',cnt.children[1].classList.add('no'),menu.className='no',dm.className='full',u.tt('🏠 house'),u.tsk=function(){dm.className='embed',play.className='z',m.rKey=u.a=0})},u.ich=[n[0],n[1],n[2],n[3],c[0],c[1],e[2].children[0]];for(e in u.ich)u.ich[e].idx=e,u.ich[e].onclick=function(){cnt.className='',u.slide(this.idx)};for(e in u.hch)u.hch[e].idx=e,u.hch[e].onclick=u.shCl;prev.lim='one',prev.l=-1,next.lim='three',next.l=1,prev.onclick=next.onclick=function(){u.shCl(u.cl.indexOf(roll.className)+this.l,this.lim)},lnk.onclick=function(){cnt.className='',u.slide(6)},back.onclick=function(){'no'!=cnt.className&&(cnt.className='no',info.className=''),u.tsk&&u.tsk()},menu.onclick=function(){info.className='menu'==info.className?'':'menu'},u.fch=[fs.children[0],fs.children[1]];for(e in u.fch)u.fch[e].idx=e,u.fch[e].onclick=function(){!this.className&&(u.gc(this,'lgsu'),u.shcl())};u.out=u.ss,u.i=u.g('input'),u.name=u.i[0],u.value=u.i[1],u.sgn(),ok.onclick=u.vl;for(e in u.i)isNaN(e)||(u.i[e].idx=Number(e),u.i[e].onkeypress=function(){th=this,setTimeout(function(){u.lg||(th.className=th.idx?u.i[2].value&&(u.i[th.idx>1?1:2].className=u.match())&&u.t(th.idx):u.t(th.idx))})});ch.msg='es'==/es/.test(u.nv.language)?(u.lng='es',intro.children[0].innerHTML='con casa3d usted recreara una casa basada en un modelo precargado',u.tx(u.sp),u.lgErr='Usuario o Contraseña incorrecta',u.suErr='Este usuario ya existe',u.fill='Por Favor verifique que usted:\n1: NO use carácteres especiales\n2: llene el nombre minimo 3\n3: llene y coincida la contraseña minimo 4',chk.msg=u.fill+'\n4: Acepte ☑ los T&Cs','Si acepta, la pagina cargaria un 50% MAS RAPIDO\ny ademas tendria acceso a esta pagina AUN SIN internet!'):(u.lng='en',u.lgErr='Incorrect Username or Password',u.suErr='This username already exists',u.fill='Please check that you:\n1: DO NOT use special characters\n2: Fill name at least 3\n3: Fill and match password at least 4',chk.msg=u.fill+'\n4: Accepted T&Cs','If you accept, this page would load 50% faster\nand furthermore you would have access to this website EVEN WITHOUT internet!')}},console.clear(),u.init(),onload=u.cas