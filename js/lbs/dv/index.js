/*Emoji$027A1$AAD RenderedEmoji
Emoji$02B05$AAB RenderedEmoji   */
f=Function('v,f','return Function(f?v:"",f||v)')
u={
  d:document,
  new:function(t,p){
    t=u.d.createElement(t)
    for(var i in p)t[i]=p[i]
    return t},
  sty:f('s',
    'var e,i;'+//style element, style content, iterator
    's=s.split("}"),'+
    'e=u.d.styleSheets[0]||u.H.appendChild(u.new("style")).sheet;'+
    //console.log(u.el=e,u.s=s,i)
    'for(i in s)e.insertRule(s[i]+"!important}",e.cssRules.length)'),
  at:f('e,a,i','for(i in a)e[i]=a[i];return e'),
  set:function(){//let's initiate
    var i=info.children,i0=i[0].children,i1=i[1].children,ich=intro.children[0]
    play.innerHTML='⏳'
    u.sc(u.hch[0],'active')
    play.onclick=function(){
      dm.R&&(
        !u.a&&dm.R(m.rKey=u.a=1),
        u.sc(cnt,u.sc(this,'z')),
        cnt.children[1].classList.add('no'),
        u.sc(menu,'no'),
        u.sc(dm,'full'),
        u.tt('🏠 house'),
        u.tsk=function(){
          u.sc(dm,'embed')
          u.sc(play,'pr')
          m.rKey=u.a=0})}
    u.ich=[i0[0],i0[1],i0[2],i0[3],i1[0],i1[1],i[2].children[0]]
    for(i in u.ich)u.ich[i].idx=i,u.ich[i].onclick=f(
      'u.sc(cnt,""),'+
      'u.slide(this.idx)')
    for(i in u.hch)u.hch[i].idx=i,u.hch[i].onclick=u.shCl
    prev.lim='one',  prev.l=-1
    next.lim='three',next.l=1
    prev.onmouseenter=f('this.innerHTML=""')
    next.onmouseenter=f('this.innerHTML=""')
    prev.onmouseout=f('this.innerHTML=""')
    next.onmouseout=f('this.innerHTML=""')
    prev.onclick=next.onclick=f(
      //console.log(this.lim,this.l),
      'u.shCl(u.cl.indexOf(roll.className)+this.l,this.lim)')
    lnk.onclick=f(
      'u.sc(cnt,""),'+
      'u.slide(6)')
    back.onclick=f(
      "u.sc(cnt,'no'),"+
      "u.sc(info,''),"+
      'u.tsk&&u.tsk()')
    menu.onclick=f(
      "u.tc(info,'menu')")
    u.fch=[fs.children[0],fs.children[1]]//fieldset children
    for(i in u.fch)u.fch[i].idx=i,u.fch[i].onclick=f(
      '!this.className&&('+
        //console.log('shifting class'),
       'u.gc(this,"lgsu"),'+
        'u.shcl())')
    u.out=u.ss
    u.i=u.g('input')
    u.name=u.i[0],u.value=u.i[1]
    u.sgn()//assigning check-event ☑⬛
    ok.onclick=u.vl
    for(i in u.i)if(!isNaN(i))u.i[i].idx=Number(i),u.i[i].onkeypress=f('u.th=this,u.clk(u.kp)')
    ch.msg=/es/.test(u.nv.language)?(
      ich.innerHTML="Explora la casa dentro de tu propia pagina web<br><code>&lt;meta charset=UTF-8&gt;<br>&lt;script src=<a>//casa3d.hostzi.com/api.js</a> data-set=<a>'//casa1.js 300x200'</a>&lt;/script&gt;</code><li>no te preocupes, auto-asincronizada</li><li>su mision: coexistir dentro de la página</li>",
      u.tx(u.sp),
      u.lgErr='Usuario o Contraseña incorrecta',
      u.suErr='Este usuario ya existe',
      u.fill='Por Favor verifique que usted:\n1: NO use carácteres especiales\n2: llene el nombre minimo 3\n3: llene y coincida la contraseña minimo 4',
      chk.msg=u.fill+'\n4: Acepte ☑ los T&Cs',
      u.lng='es',
      'Si acepta, la pagina cargaria un 50% MAS RAPIDO\ny ademas tendria acceso a esta pagina AUN SIN internet!')
    :(
      ich.innerHTML="Explore house inside your own website<br><code>&lt;meta charset=UTF-8&gt;<br>&lt;script src=<a>//casa3d.hostzi.com/api.js</a> data-set=<a>'//casa1.js 300x200'</a>&lt;/script&gt;</code><li>don't worry it's asynchronized</li><li>It'll co-exist while it's there</li>",
      u.lgErr='Incorrect Username or Password',
      u.suErr='This username already exists',
      u.fill='Please check that you:\n1: DO NOT use special characters\n2: Fill name at least 3\n3: Fill and match password at least 4',
      chk.msg=u.fill+'\n4: Accepted T&Cs',
      u.lng='en',
      'If you accept, this page would load 50% faster\nand furthermore you would have access to this website EVEN WITHOUT internet!')
    ich.removeAttribute('class')},
  init:function(){//create&append script
    u.H=u.d.head
    u.sty("body{margin:0;overflow:hidden}span,body>*>div>label,#fs>div>label,button,input:not([type=email]),a,h4{color:#fff}button,a,span,label,code,fieldset,trgt{font-family:Segoe UI Symbol,verdana,emoji}body,.menu{background:linear-gradient(rgba(0,0,0,.2),rgba(121,0,2,.2)),repeating-linear-gradient(27deg,rgba(0,0,0,.2),rgba(0,121,171,.2)5%),#004d91}#hd,#roll{text-align:center}#roll{height:700px;width:300%}#roll>button,#intro button{border:1px ridge #fff;border-radius:5em;height:100px;margin:.5em;outline:0;width:100px}#roll>button{position:fixed}#prev{left:0}#next{right:0}#roll>div{float:left;height:100%;width:33.3333%;padding-top:1em}#info{padding-top:4em}#info>*{margin:7px;float:left;font-size:2.5em}#info>*>*:after{display:block;font-size:20px}#info>*:nth-child(1){height:53%;margin-left:4em;width:36%}#info>*:nth-child(1) button{margin-bottom:10px;width:46%}#info>*:nth-child(1)>*:nth-child(1){background:linear-gradient(90deg,#006f6f,#008b8b)}#info>*:nth-child(1)>*:nth-child(2){background:linear-gradient(90deg,#4b4090,#6456b2)}#info>*:nth-child(1)>*:nth-child(3){background:linear-gradient(90deg,#dd5600,#ff7400)}#info>*:nth-child(1)>*:nth-child(4){background:linear-gradient(90deg,#007c00,#009d00)}#info>*:nth-child(2){width:11.5%}#info>*:nth-child(2)>*{margin-bottom:8%;width:100%}#info>*:nth-child(2)>*:nth-child(1){background:linear-gradient(90deg,#007af0,#1e90ff)}#info>*:nth-child(2)>*:nth-child(2){background:linear-gradient(90deg,#832583,#a323a3)}#info>*:nth-child(3){font-size:5.65em}#info>*:nth-child(3)>*{background:linear-gradient(90deg,#b54823,#cd5932)}#cnt{height:100%;position:fixed;top:0;width:100%}#cnt>*:nth-child(1){background:rgba(0,0,0,.5);height:13.25%;width:100%}#cnt>*:nth-child(1) label,#cnt>*:nth-child(1)>*:nth-child(2){float:right}#cnt>*:nth-child(2){background:#d3d3d3;height:87%;position:relative;width:700%}#cnt>*:nth-child(2)>*:nth-child(1){background:linear-gradient(rgba(185,185,185,.48),rgba(46,46,46,.5)),linear-gradient(90deg,#006f6f,#008b8b)}#cnt>*:nth-child(2)>*:nth-child(2){background:linear-gradient(rgba(185,185,185,.48),rgba(46,46,46,.5)),linear-gradient(90deg,#4b4090,#6456b2)}#cnt>*:nth-child(2)>*:nth-child(3){background:linear-gradient(rgba(185,185,185,.48),rgba(46,46,46,.5)),linear-gradient(90deg,#dd5600,#ff7400)}#cnt>*:nth-child(2)>*:nth-child(4){background:linear-gradient(rgba(185,185,185,.48),rgba(46,46,46,.5)),linear-gradient(90deg,#007c00,#009d00)}#cnt>*:nth-child(2)>*:nth-child(5){background:linear-gradient(rgba(185,185,185,.48),rgba(46,46,46,.5)),linear-gradient(90deg,#007af0,#1e90ff)}#cnt>*:nth-child(2)>*:nth-child(5) legend:before{content:'vr'}#cnt>*:nth-child(2)>*:nth-child(5)>*:nth-child(-n+21) label:before{content:'2014.'}#cnt>*:nth-child(2)>*:nth-child(5)>*:nth-child(n+22) label:before{content:'2015.'}#cnt>*:nth-child(2)>*:nth-child(6){background:linear-gradient(rgba(185,185,185,.48),rgba(46,46,46,.5)),linear-gradient(90deg,#832583,#a323a3)}#cnt>*:nth-child(2)>*:nth-child(7){background:linear-gradient(rgba(185,185,185,.48),rgba(46,46,46,.5)),linear-gradient(90deg,#b54823,#cd5932)}#cnt>*:nth-child(2) div{float:left;height:100%;overflow-y:auto;width:14.2858%}#cnt>*:nth-child(2) fieldset{background:linear-gradient(#e1e0e0,#f5f5f5);box-shadow:#000 -4px 4px 10px;margin:1em}#cnt>*:nth-child(2) fieldset legend{background:#d5d5ff;font-style:oblique;text-shadow:#fff 3px 0 2px}#send,#fs label,legend>label,a,code{display:block}#fs,#fs label,#play,#hd,textarea{font-size:1.6em}input:not([type=email]){background:linear-gradient(rgba(0,0,0,.5),transparent,rgba(0,0,0,.5));font-size:.7em;text-align:center}#cnt>*:nth-child(1),h4,#intro>label{font-size:1.5em}input,fieldset,legend{border-radius:7px}#hd{width:100%}#intro label{border:solid}#intro label:before{content:'🔼';font-size:2em;left:46%;top:-27.5%}#intro label code{background:radial-gradient(#000 80%,transparent);border-radius:10px;color:#d3b746}#intro label a{display:inline-block}#intro button{left:-18%;text-shadow:#00dfff 2px 0 10px;top:-15%}button:not(#chk){font-size:2.5em}button{background:transparent;outline-color:cyan}#info button:hover{border:2px cyan solid}button:focus{text-shadow:#000 -5px 5px 9px}#ok,#chk{font-size:1em}button:not(#play){border:2px transparent solid}#ok:focus{border:#09f 4px double}#cv,#dm:not(.back){background:linear-gradient(#fff,#7d7ddf 90%,#1b186d)}a{cursor:alias}button,#chk{cursor:pointer;text-shadow:#000 2px 2px 3px}.noread{color:#d2db00}.ok{border:#006400 2px dashed}.bad{border:#f00 2px dashed}.bModal,.no{display:none}.false{border:#f00 3px groove}.active,.lgsu{background:#00b2ff}#roll,#intro button:not(.z),.embed{position:relative}#intro label,#intro label:before{position:absolute}.embed{border:solid #fff;left:6%;width:36.5%}.full{width:100%}.back{background:url(../img/pre.jpg)0/cover}.pr{padding-right:0}.hidden{height:1%!important;overflow:hidden}.menu{left:0;position:fixed;width:100%!important;z-index:1}.one{left:0}.two{left:-100%}.three{left:-200%}.four{left:-300%}.five{left:-400%}.six{left:-500%}.seven{left:-600%")
    u.at(u,
      {b:u.d.body,
      cl:'one two three four five six seven'.split(' '),
      hch:hd.children,//header children
      nv:navigator,
      p:chk.parentNode,
      sp:lnk.parentNode,
      c:f('m','console.log(m)'),
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
      ap:f('c,e',//append: content,element
        '(u.d[e]||e).appendChild(c)'),
      sc:f('e,c','e.className!=c&&(e.className=c);return c'),
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
        "u.cmr(u.tc(ops,'no'),u.tc(cv,'no'),u.tc(地点,'no'),u.sc(u.tg,'no')),"+
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
      match:f('return u.i[1].value==u.i[2].value'),
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
        u.sc(lnk,lnk.className?(
          chk.checked=!0,
          chk.innerHTML='☑',
          '')
          :(
          chk.checked=!1,
          chk.innerHTML='⬛',
          'noread'))},
      sgn:f(//sign up
        'chk.onclick!=u.chk&&('+
        'chk.onclick=u.sp.onclick=u.chk)'),
      kp:f('if(!u.lg)u.sc(u.th,u.th.idx?'+
        '(u.i[2].value&&(u.i[u.th.idx>1?1:2].className=u.match()))&&u.t(u.th.idx)'+
        ':u.t(u.th.idx))'),
      clk:f('f','setTimeout(f)'),
      f:f})
    u.set(u.a=0)
    var l,s='idb dvFill'.split(' ')
    u.sty(/chrome/i.test(u.nv.userAgent)?(
      w='webkit',
      'body{-'+w+'-perspective:100px}#hd>button:hover{-'+w+'-transform:translate3D(0,55px,15px)}#prev:hover{-'+w+'-transform:translate3D(110px,55px,20px)}#next:hover{-'+w+'-transform:translate3D(-110px,55px,20px)}#info button:active{-'+w+'-transform:translateZ(100px)')
      :(
      w=0,
      '#hd button:hover{background:rgba(0,178,255,.5)'))
    u.sty('.embed{height:'+(w?'45%':'')+'}#intro>label{left:'+(w?7.3:4.4)+'%;top:'+(w?51:37)+'%}#intro>button{top:'+(w?-20:-15)+'%')
    u.tc(dm,'back')
    for(l in s)u.ap(u.new('script',{src:'js/'+s[l]+'.js'}),'head')
    u.clk(f('u.sty("body *{transition:.6s")')),
    /linux/i.test(u.nv.platform)&&u.sty('@font-face{font-family:emoji;src:url(css/emoji.woff)')}}
onload=u.init