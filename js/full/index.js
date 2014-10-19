u={
	K:' casa3d.hostzi.com',
	lng:/es/.test(navigator.language)?'es':'en',
	d:document,
	p:chk.parentNode,
	lp:lnk.parentNode,
	tx:function(e){var t=e.innerHTML.split(/[<>]/)//text
		e.innerHTML='Estoy de acuerdo con estos <'+t[1]+'>Terminos & Condiciones de uso</a>'},
	t:function(n){//test
		return new RegExp(n?'\\w{4}':'[a-z]{3}').test((u.st=u.i[n||0].value))&&!/\W/.test(u.st)},
	shift:function(){//i.c('called shift fn')
		var e=[cv,'.ops',fs,info,ft],l
		for(l in e)$(e[l]).toggleClass('no')
		h.R(u.a=!u.a)},
	ss:function(v){//session,value
		i.Δ.user=v||0,
		i.tr('set','session')},
	in:function(opt){
		i.cmp=function(){
			u.ss(u.i[0].value)
			//i.c('Logged In as: '+i.key)
			u.i[0].value=u.i[1].value=u.i[2].value=''
			u.shift()}
		i.tr(opt)},
	vl:function(){var n=i.key=u.i[0].value,v=i.val=u.i[1].value,v=Number(v)||v//validate
		u.lg?
			u.t()&&u.t(1)?
				u.in('get')
				:alert('fill name, password')
			:chk.checked&&u.t()&&u.t(1)&&v==u.i[2].value?
				u.in('add')
				:alert('Please check that you:\n1: fill name > 3\n2: fill and match password >4\n3: Accepted T&Cs?')},
	//extra fns
	chk:function(){//class
		lnk.className=lnk.className?(
			chk.checked=!0,
			'')
			:(chk.checked=!1,
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
		fl=u.d.createElement('script')
		fl.src=s+'.js'
		u.d.head.appendChild(fl)},
	init:function(){//initialize or initiate
		u.out=u.ss
		u.i=u.d.getElementsByTagName('input')
		u.name=u.i[0],u.value=u.i[1]
		lg.onclick=u.cl
		u.sgn()
		ok.onclick=u.vl
		info.onclick=function(){open(location.href+'support','_blank')}
		u.lg&&(u.cl(u.lg=0))
		ch.msg=u.lng=='es'?
			(u.tx(u.lp),'Si acepta, la pagina cargaria un 50% MAS RAPIDO\ny ademas tendria acceso a'+u.K+' AUN SIN internet!')
			:"If you accept, this page would load 50% faster\nand furthermore you'd have access to"+u.K+' EVEN WITHOUT internet!'
		u.cas('js/filler')}}
u.init(u.lg=0)
chk.checked=0