u={
	K:' casa3d.hostzi.com',
	lng:/es/.test(navigator.language)?'es':'en',
	d:document,
	p:chk.parentNode,
	lp:lnk.parentNode,
  c:function(tg){return u.d.createElement(tg)},
  g:function(n){return u.d.getElementsByTagName(n)},
	tx:function(e){var t=e.innerHTML.split(/[<>]/)//text
		e.innerHTML='Estoy de acuerdo con estos <'+t[1]+'>Terminos & Condiciones de uso</a>'},
	t:function(n){//test
		return new RegExp(n?'\\w{4}':'[a-z]{3}').test((u.st=u.i[n||0].value))&&!/\W/.test(u.st)},
	shift:function(){//i.c('called shift fn')
		$('canvas').toggleClass('no')
		h.R(u.a=!u.a)},
	ss:function(v){//set session:value
		i.Δ.user=v||0
		i.tr('set','session')},
	in:function(opt){
		i.cmp=function(){
      u.a===!1&&(
  			u.ss(u.i[0].value),
  			//i.c('Logged In as: '+i.key),
  			u.i[0].value=u.i[1].value=u.i[2].value='',
  			u.shift())}
		i.tr(opt)},
	vl:function(){var n=i.key=u.i[0].value,v=i.val=u.i[1].value,v=Number(v)||v//validate
		u.lg?
			u.t()&&u.t(1)?
				u.in('get')
				:alert('fill name, password')
			:chk.checked&&u.t()&&u.t(1)&&v==u.i[2].value?
				u.in('add')
				:alert(chk.msg)},
	//extra fns
	chk:function(){//class
		lnk.className=lnk.className?(
      chk.checked=!0,
			chk.innerHTML='☑',
			'')
			:(
      chk.checked=!1,
      chk.innerHTML='⬛',
			'noread')},
	cl:function(){//class
		u.p.className=u.p.className=='no'?'':'no'
		u.lg=!u.lg
		fs.className=(lg.className=u.lg?'lg':'su')+'bg'},
	sgn:function(){//sign up
		chk.onclick!=u.chk&&(
			chk.onclick=u.lp.onclick=u.chk,
			chk.onkeypress=chk.click)},
	cas:function(s){//create&append script
		fl=u.c('script')
		fl.src=s+'.js'
		u.d.head.appendChild(fl)},
	init:function(){//initialize or initiate
    lg.innerHTML='&nbsp;📝 🏠 '
    var p,a,l=0,x=[
      'jquery.com_jQuery v2.1.1',
      'threejs.org_Three.js rv61, Ricardo Cabello. Barcelona, Spain',
      'gildas-lormeau.github.io/zip.js_zip.js, Gildas Lormeau. Rennes, France',
      'www.blender.org_blender 2.72a']
		u.out=u.ss
		u.i=u.g('input')
		u.name=u.i[0],u.value=u.i[1]
		lg.onclick=u.cl
		u.sgn()
		ok.onclick=u.vl
		info.onclick=function(){open(location.href+'support','_blank')}
		u.lg&&(u.cl(u.lg=0))
		ch.msg=u.lng=='es'?(
			u.tx(u.lp),
      chk.msg='Por Favor verifique que usted:\n1: NO use carácteres especiales\n2: Llene el nombre minimo 3\n3: Llene y coincida la contraseña minimo 4\n4: Acepte los T&Cs',
      'Si acepta, la pagina cargaria un 50% MAS RAPIDO\ny ademas tendria acceso a'+u.K+' AUN SIN internet!')
			:(
      chk.msg='Please check that you:\n1: DO NOT use special characters\n2: Fill name at least 3\n3: Fill and match password at least 4\n4: Accepted T&Cs',
      'If you accept, this page would load 50% faster\nand furthermore you would have access to'+u.K+' EVEN WITHOUT internet!')
    while(l<4){
      a=u.c('a')
      a.href='//'+(p=x[l++].split('_'))[0]
      a.title=p[1]
      a.target='_blank'
      ft.appendChild(a)}}}
u.init(u.lg=0)
chk.checked=0
window.onload=function(){u.cas('js/lib/filler')}