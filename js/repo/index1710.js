/*Emoji$027A1$AAD RenderedEmoji
Emoji$02B05$AAB RenderedEmoji*/
f=Function('v,f','return Function(f?v:"",f||v)')
u={
  cl:'one two three four five six seven'.split(' '),
  d:document,
  hch:hd.children,//head children
  nv:navigator,
  p:chk.parentNode,
  sp:lnk.parentNode,
  c:f('m','console.log(m)'),
  new:f('tg,p',
    'tg=u.d.createElement(tg);'+
    'for(var i in p)tg[i]=p[i];'+
    'return tg'),
  g:f('n','return u.d.getElementsByTagName(n)'),
  gc:f('e,cl,act',
    'cl=cl||"active",'+
    'act=u.d.getElementsByClassName(cl)[0],'+
    //console.log('prev active',act)
    'act&&u.sc(act,""),'+/*,console.log('removing...')*/
    'u.sc(e,cl)'),
  tt:f('t',
    "title.innerHTML!=t+'&nbsp'&&(title.innerHTML=t+'&nbsp')"),
  tx:f('e',
    'var t=e.innerHTML.split(/[<>]/);'+//text
    "e.innerHTML='Estoy de acuerdo con estos <'+t[1]+'>Terminos & Condiciones de uso</a>'"),
  t:function(n){//test
    return new RegExp(n?'\\w{4}':'[a-z]{3}').test((u.st=u.i[n||0].value))&&!/\W/.test(u.st)},
  sc:f('e,c','return e.className=c'),
  tc:f('e,c',//toggle class: element,class
    'return e&&e.classList.toggle(c)'),
  shcl:f(//class
    'u.tc(u.p,"no"),'+
    'u.value.className=(u.lg=!u.lg)||u.match()'),
  shCl:f('i,lim',//shift class
    '(roll.className!=(lim||u.cl[this.idx||i]))&&('+
      //console.log('i:',i,'idx:',this.idx)
      'roll.className=u.cl[this.idx||i],'+
      'i=i>-1?'+
        'u.hch[i]'+
        ':this,'+
      //console.log('next:',i)
      'u.gc(i))'),
  slide:f('i',
    'u.sc(menu,u.sc(info,"")),'+
    'cnt.children[1].className=u.cl[i]'),
  cmr:function(){//shifting camera
    //only if he/she hasn't an active session
    u.a?(//you R gettin' out so, save c1 as camera, and let's shift to c2 (as main camera)
      c1={p:c.position,r:c.rotation},
      typeof c2!='undefined'&&(
        c.position=c2.p,
        c.rotation=c2.r))
      :(//gettin' in so, restore suitable camera
      c2={p:c.position,r:c.rotation},
      typeof c1!='undefined'&&(
        c.position=c1.p,
        c.rotation=c1.r))},
  shift:f(//i.c('called shift fn')
    'u.cmr(u.tc(ops,"no"),u.tc(cv,"no")),'+
    'u.sc(u.tg,"no"),'+
    'h.R(u.a=!u.a)'),
  ss:f('v',//set session:value
    'i.Δ.user=v||0,'+
    "i.tr('set','session')"),
  in:function(opt){
    i.cmp=function(){
      u.a===!1&&(
        u.ss(u.i[0].value),
        //i.c('Logged In as: '+i.key),
        u.i[0].value=u.i[1].value=u.i[2].value='',
        u.shift())}
    i.tr(opt)},
  match:function(){return u.i[1].value==u.i[2].value},
  vl:function(){var n=i.key=u.i[0].value,v=i.val=u.i[1].value,v=Number(v)||v//validate
    u.lg?
      u.t()&&u.t(1)?
        u.in('get')
        :alert(u.fill)
      :chk.checked&&u.t()&&u.t(1)&&u.match()?
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
  sgn:f(//sign up
    'chk.onclick!=u.chk&&('+
    'chk.onclick=u.sp.onclick=u.chk)'),
  cas:function(f){//create&append script
    u.b=u.d.body,u.H=u.d.head
    u.sty("body{margin:0;overflow:hidden_span,body>*>div>label,#fs>div>label,button,input:not([type=email]),a,h4{color:#fff_button,a,span,label,code,fieldset,trgt{font-family:Segoe UI Symbol,verdana_body,.menu{background:linear-gradient(rgba(0,0,0,.2),rgba(121,0,2,.2)),repeating-linear-gradient(27deg,rgba(0,0,0,.2),rgba(0,121,171,.2)5%),#004d91_#hd,#roll{text-align:center_#roll{height:700px;width:300%_#roll>button,#intro button{border:1px ridge #fff;border-radius:5em;height:100px;margin:.5em;outline:0;width:100px_#roll>button{position:fixed_#prev{left:0_#next{right:0_#roll>div{float:left;height:100%;width:33.3333%;padding-top:1em_#info{padding-top:4em_#info>*{margin:7px;float:left;font-size:2.5em_#info>*>*:after{display:block;font-size:20px_#info>*:nth-child(1){height:53%;margin-left:4em;width:36%_#info>*:nth-child(1) button{margin-bottom:10px;width:46%_#info>*:nth-child(1)>*:nth-child(1){background:linear-gradient(90deg,#006f6f,#008b8b)_#info>*:nth-child(1)>*:nth-child(2){background:linear-gradient(90deg,#4b4090,#6456b2)_#info>*:nth-child(1)>*:nth-child(3){background:linear-gradient(90deg,#dd5600,#ff7400)_#info>*:nth-child(1)>*:nth-child(4){background:linear-gradient(90deg,#007c00,#009d00)_#info>*:nth-child(2){width:11.5%_#info>*:nth-child(2)>*{margin-bottom:8%;width:100%_#info>*:nth-child(2)>*:nth-child(1){background:linear-gradient(90deg,#007af0,#1e90ff)_#info>*:nth-child(2)>*:nth-child(2){background:linear-gradient(90deg,#832583,#a323a3)_#info>*:nth-child(3){font-size:5.65em_#info>*:nth-child(3)>*{background:linear-gradient(90deg,#b54823,#cd5932)_#cnt{height:100%;position:fixed;top:0;width:100%_#cnt>*:nth-child(1){background:rgba(0,0,0,.5);height:13.25%;width:100%_#cnt>*:nth-child(1) label,#cnt>*:nth-child(1)>*:nth-child(2){float:right_#cnt>*:nth-child(2){background:#d3d3d3;height:87%;position:relative;width:700%_#cnt>*:nth-child(2)>*:nth-child(1){background:linear-gradient(rgba(185,185,185,.48),rgba(46,46,46,.5)),linear-gradient(90deg,#006f6f,#008b8b)_#cnt>*:nth-child(2)>*:nth-child(2){background:linear-gradient(rgba(185,185,185,.48),rgba(46,46,46,.5)),linear-gradient(90deg,#4b4090,#6456b2)_#cnt>*:nth-child(2)>*:nth-child(3){background:linear-gradient(rgba(185,185,185,.48),rgba(46,46,46,.5)),linear-gradient(90deg,#dd5600,#ff7400)_#cnt>*:nth-child(2)>*:nth-child(4){background:linear-gradient(rgba(185,185,185,.48),rgba(46,46,46,.5)),linear-gradient(90deg,#007c00,#009d00)_#cnt>*:nth-child(2)>*:nth-child(5){background:linear-gradient(rgba(185,185,185,.48),rgba(46,46,46,.5)),linear-gradient(90deg,#007af0,#1e90ff)_#cnt>*:nth-child(2)>*:nth-child(5) legend:before{content:'vr'_#cnt>*:nth-child(2)>*:nth-child(5) label:before{content:'2014.'_#cnt>*:nth-child(2)>*:nth-child(6){background:linear-gradient(rgba(185,185,185,.48),rgba(46,46,46,.5)),linear-gradient(90deg,#832583,#a323a3)_#cnt>*:nth-child(2)>*:nth-child(7){background:linear-gradient(rgba(185,185,185,.48),rgba(46,46,46,.5)),linear-gradient(90deg,#b54823,#cd5932)_#cnt>*:nth-child(2) div{float:left;height:100%;overflow-y:auto;width:14.2858%_#cnt>*:nth-child(2) fieldset{background:linear-gradient(#e1e0e0,#f5f5f5);box-shadow:#000 -4px 4px 10px;margin:1em_#cnt>*:nth-child(2) fieldset legend{background:#d5d5ff;font-style:oblique;text-shadow:#fff 3px 0 2px_#send,#fs label,legend>label,a,code{display:block_#fs,#fs label,#play,#hd,textarea{font-size:1.6em_input:not([type=email]){background:linear-gradient(rgba(0,0,0,.5),transparent,rgba(0,0,0,.5));font-size:.7em;text-align:center_#cnt>*:nth-child(1),h4,#intro>label{font-size:1.5em_input,fieldset,legend{border-radius:7px_#hd{width:100%_#intro label{border:solid_#intro label:before{content:'🔼';font-size:2em;left:46%;top:-27.5%_#intro label code{background:radial-gradient(#000 80%,transparent);border-radius:10px;color:#d3b746_#intro label a{display:inline-block_#intro button{left:-18%;text-shadow:#00dfff 2px 0 10px;top:-15%_button:not(#chk){font-size:2.5em_button{background:transparent_button:focus{text-shadow:#000 -5px 5px 9px_button:hover{background:rgba(0,178,255,.51)_#ok,#chk{font-size:1em_button:not(#prev):not(#play):not(#next){border:0_#ok:focus{border:#09f 4px double_#cv,#dm:not(.back){background:linear-gradient(#fff,#7d7ddf 90%,#1b186d)_a{cursor:alias_button,#chk{cursor:pointer;text-shadow:#000 2px 2px 3px_.noread{color:#d2db00_.ok{border:#006400 2px dashed_.bad{border:#f00 2px dashed_.bModal,.no{display:none_.false{border:#f00 3px groove_.active,.lgsu{background:#00b2ff_#roll,#intro button:not(.z),.embed{position:relative_#intro label,#intro label:before{position:absolute_.embed{border:solid #fff;left:6%;width:36.5%_.full{width:100%_.back{background:url(../img/pre.jpg)0/cover_.pr{padding-right:0_.hidden{height:1%!important;overflow:hidden_.menu{left:0;position:fixed;width:100%!important;z-index:1_.one{left:0_.two{left:-100%_.three{left:-200%_.four{left:-300%_.five{left:-400%_.six{left:-500%_.seven{left:-600%");
    var i,s='idb filler2'.split(' '),w=(/chrome/i).test(u.nv.userAgent)?1:0
    u.sty('.embed{height:'+(w?'45%':'')+'_#intro>label{left:'+(w?/zh/.test(u.nv.language)?8.2:3.3:3.45)+'%;top:'+(w?51:37)+'%_#intro>button{top:'+(w?-20:-15)+'%')
    dm.classList.add('back')
    u.a=0
    for(i in s)u.ap(u.new('script',{src:'js/'+s[i]+'.js'}),'head')
	setTimeout(u.f('u.sty("body *{transition:.6s")'))},
  ap:f('c,e',//append: content,element
    '(u.d[e]||e).appendChild(c)'),
  sty:f('s',
    'var e,i;'+//style element, style content, iterator
    's=s.split("_"),'+
    'e=u.d.styleSheets[0]||u.H.appendChild(u.new("style")).sheet;'+
    //console.log(u.el=e,u.s=s,i)
    'for(i in s)e.insertRule(s[i]+"!important}",e.cssRules.length)'),
  init:function(){//let's initiate
    var ich,i=info.children,i0=i[0].children,i1=i[1].children//initialize or initiate
    play.innerHTML='⏳'
    u.hch[0].className='active'
    play.onclick=function(){
      dm.R&&(
        !u.a&&dm.R(m.rKey=u.a=1),
        cnt.className=this.className='z',
        cnt.children[1].classList.add('no'),
        menu.className='no',
        dm.className='full',
        u.tt('🏠 house'),
        u.tsk=function(){
          dm.className='embed'
          play.className='pr'
          m.rKey=u.a=0})}
    u.ich=[i0[0],i0[1],i0[2],i0[3],i1[0],i1[1],i[2].children[0]]
    for(i in u.ich)u.ich[i].idx=i,u.ich[i].onclick=f(
      'u.sc(cnt,""),'+
      'u.slide(this.idx)')
    for(i in u.hch)u.hch[i].idx=i,u.hch[i].onclick=u.shCl
    prev.lim='one',  prev.l=-1
    next.lim='three',next.l=1
    prev.onclick=next.onclick=f(
      //console.log(this.lim,this.l),
      'u.shCl(u.cl.indexOf(roll.className)+this.l,this.lim)')
    lnk.onclick=f(
      'cnt.className="",'+
      'u.slide(6)')
    back.onclick=f(
      "cnt.className!='no'&&(cnt.className='no',info.className=''),"+
      'u.tsk&&(u.tsk())')
    menu.onclick=f(
      "info.className=info.className=='menu'?'':'menu'")
    u.fch=[fs.children[0],fs.children[1]]
    for(i in u.fch)u.fch[i].idx=i,u.fch[i].onclick=function(){
      !this.className&&(
        //console.log('shifting class'),
        u.gc(this,'lgsu'),
        u.shcl())}
    u.out=u.ss
    u.i=u.g('input')
    u.name=u.i[0],u.value=u.i[1]
    u.sgn()//assigning check-event ☑⬛
    ok.onclick=u.vl
    for(i in u.i)if(!isNaN(i))u.i[i].idx=Number(i),u.i[i].onkeypress=function(){th=this
      setTimeout(u.f(
        'if(!u.lg)th.className=th.idx?'+
          '(u.i[2].value&&(u.i[th.idx>1?1:2].className=u.match()))&&u.t(th.idx)'+
          ':u.t(th.idx)'))}
    ich=intro.children[0]
    ch.msg=/es/.test(u.nv.language)?(
      ich.innerHTML="Explora la casa dentro de tu propia pagina web<br><code>&lt;meta charset=UTF-8&gt;<br>&lt;script src=<a>//casa3d.hostzi.com/api.js</a> data-set=<a>'//casa1.js 300x200'</a>&lt;/script&gt;</code><li>no te preocupes, auto-asincronizacion</li><li>su mision: coexistir dentro de la página</li>",
      u.tx(u.sp),
      u.lgErr='Usuario o Contraseña incorrecta',
      u.suErr='Este usuario ya existe',
      u.fill='Por Favor verifique que usted:\n1: NO use carácteres especiales\n2: llene el nombre minimo 3\n3: llene y coincida la contraseña minimo 4',
      chk.msg=u.fill+'\n4: Acepte ☑ los T&Cs',
      u.lng='es',
      'Si acepta, la pagina cargaria un 50% MAS RAPIDO\ny ademas tendria acceso a esta pagina AUN SIN internet!')
    :(
      ich.innerHTML="Explore house inside your own website<br><code>&lt;meta charset=UTF-8&gt;<br>&lt;script src=<a>//casa3d.hostzi.com/api.js</a> data-set=<a>'//casa1.js 300x200'</a>&lt;/script&gt;</code><li>don't worry it's asynchronized</li><li>It'll co-exist while being there</li>",
      u.lgErr='Incorrect Username or Password',
      u.suErr='This username already exists',
      u.fill='Please check that you:\n1: DO NOT use special characters\n2: Fill name at least 3\n3: Fill and match password at least 4',
      chk.msg=u.fill+'\n4: Accepted T&Cs',
      u.lng='en',
      'If you accept, this page would load 50% faster\nand furthermore you would have access to this website EVEN WITHOUT internet!')
    setTimeout(function(){ich.removeAttribute('class')})
    u.f=f}}
u.init()
onload=u.cas