u={
  cl:'one two three four five six seven'.split(' '),
  d:document,
  hch:hd.children,//head children
  nv:navigator,
  p:chk.parentNode,
  sp:lnk.parentNode,
  c:function(tg){
    return u.d.createElement(tg)},
  g:function(n){
    return u.d.getElementsByTagName(n)},
  gc:function(e,cl,act){cl=cl||'active',act=
    u.d.getElementsByClassName(cl)[0]
    //console.log('prev active',act)
    act&&(
      //console.log('removing...'),
      act.className='')
    e.className=cl},
  tt:function(t){
    title.innerHTML!=t+'&nbsp'&&(title.innerHTML=t+'&nbsp')},
  tx:function(e){var t=e.innerHTML.split(/[<>]/)//text
    e.innerHTML='Estoy de acuerdo con estos <'+t[1]+'>Terminos & Condiciones de uso</a>'},
  t:function(n){//test
    return new RegExp(n?'\\w{4}':'[a-z]{3}').test((u.st=u.i[n||0].value))&&!/\W/.test(u.st)},
  shcl:function(){//class
    u.p.className=u.p.className=='no'?'':'no'
    u.value.className=(u.lg=!u.lg)||u.match()},
  shCl:function(i,lim){//shift class
    if(roll.className!=(lim||u.cl[this.idx||i])){
      //console.log('i:',i,'idx:',this.idx)
      roll.className=u.cl[this.idx||i]
      i=i>-1?
        u.hch[i]
        :this
      //console.log('next:',i)
      u.gc(i)}},
  slide:function(i){
    info.className!=''&&(info.className='')
    menu.className!=''&&(menu.className='')
    cnt.children[1].className=u.cl[i]},
  cmr:function(){//shifting camera
    dm&&(//only if he/she hasn't an active session
      c=u.a?(//you R gettin' out so, save c1 as camera, and let c2 as main camera
        c1=c.clone(),
        c2)
        :(//gettin' in so, restore suitable camera
        c2=c.clone(),
        c1))},
  shift:function(){//i.c('called shift fn')
    ops.className=cv.className=cv.className?'':'no'
    u.cmr()
    $('trgt').toggleClass('no')
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
  sgn:function(){//sign up
    chk.onclick!=u.chk&&(
    chk.onclick=u.sp.onclick=u.chk)},
  cas:function(f){//create&append script
    dm.classList.add('back')
    u.a=0
    var i,s='idb filler'.split(' ')
    for(i in s){
      fl=u.c('script')
      fl.src='js/'+s[i]+'.js'
      u.d.head.appendChild(fl)}},
  init:function(){var i=info.children,i0=i[0].children,i1=i[1].children//initialize or initiate
    play.innerHTML='⏳'
    u.hch[0].className='active'
    play.onclick=function(){
      dm.R&&(
        !u.a&&dm.R(m.rKey=u.a=1),
        cnt.className=this.className='',
        cnt.children[1].classList.add('no'),
        menu.className='no',
        dm.className='full',
        u.tt('🏠 house'),
        u.tsk=function(){
          dm.className='embed'
          play.className='z'
          m.rKey=u.a=0})}
    u.ich=[i0[0],i0[1],i0[2],i0[3],i1[0],i1[1],i[2].children[0]]
    for(i in u.ich)u.ich[i].idx=i,u.ich[i].onclick=function(){
      cnt.className=''
      u.slide(this.idx)}
    for(i in u.hch)u.hch[i].idx=i,u.hch[i].onclick=u.shCl
    prev.lim='one',  prev.l=-1
    next.lim='three',next.l=1
    prev.onclick=next.onclick=function(){
      //console.log(this.lim,this.l),
      u.shCl(u.cl.indexOf(roll.className)+this.l,this.lim)}
    lnk.onclick=function(){
      cnt.className=''
      u.slide(6)}
    back.onclick=function(){
      cnt.className!='no'&&(cnt.className='no',info.className='')
      u.tsk&&(u.tsk())}
    menu.onclick=function(){
      info.className=info.className=='menu'?
        ''
        :'menu'}
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
      setTimeout(function(){
        if(!u.lg)th.className=th.idx?
          (u.i[2].value&&(u.i[th.idx>1?1:2].className=u.match()))&&u.t(th.idx)
          :u.t(th.idx)})}
    ch.msg=(u.lng=/(es||en)/.exec(u.nv.language)[0])=='es'?(
      u.tx(u.sp),
      u.lgErr='Usuario o Contraseña incorrecta',
      u.suErr='Este usuario ya existe',
      u.fill='Por Favor verifique que usted:\n1: NO use carácteres especiales\n2: llene el nombre minimo 3\n3: llene y coincida la contraseña minimo 4',
      chk.msg=u.fill+'\n4: Acepte ☑ los T&Cs',
      'Si acepta, la pagina cargaria un 50% MAS RAPIDO\ny ademas tendria acceso a esta pagina AUN SIN internet!')
    :(
      u.lgErr='Incorrect Username or Password',
      u.suErr='This username already exists',
      u.fill='Please check that you:\n1: DO NOT use special characters\n2: Fill name at least 3\n3: Fill and match password at least 4',
      chk.msg=u.fill+'\n4: Accepted T&Cs',
      'If you accept, this page would load 50% faster\nand furthermore you would have access to this website EVEN WITHOUT internet!')}}
u.init()
console.clear()
onload=u.cas