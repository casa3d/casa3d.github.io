u={//user's API
  ap:function(c,e){//append: content,element
    (u.d[e]||e).appendChild(c)},
  c:function(m){console.log(m)},
  back:'&#11013;',//⬅
  bad:function(s,m){//symptom,message
    u.bt.innerHTML=u.alert
    u.bt.classList.add(u.hz.jinbao+u.uid,u.hz.cuowu+s+u.uid)
    u.bt.onclick=function(){alert(u.e[s]+(m?'\n'+m:''))}},
  chrome:(/chrome/i).test(navigator.userAgent),
  d:document,
  e:{//error list
    404:'sample was not found',
    //415 Unsupported Media Type
    499:"sample was not supplied and it's is required"},//"el modelo no fue suministrado y es requerido",
  load:'&#9203;',//⏳
  loadAsset:function(o){//object={load:mypage.com/file.js,pic:mypage.com/file.png}jpg,ico,webp...
    if(o&&/js/.test(o)){
      var A=(o=o.split(' '))[0],cv=A.split('/'),ut=u.task,s=u.new('script'),x
      //console.log('sample:',ut.load,'\npic',ut.pic)
      x=u.xhr({//let's get house-asset using XMLHttpRequest (it's first cuz its size ~2kb)
        fl:u.task.load,
        ld:function(){//console.log(this)
          if(this.status==200){
            /*console.log(*/u.task.load=this.response//)
            x=u.xhr({//let's get big construct-assets (its size is ~500kb)
              prg:function(d){//progress
                /*console.log(d,*/u.bt.innerHTML=100-(d.loaded/d.total*100).toFixed(0)/*)*/},
              ld:function(){//load
                u.bt.innerHTML=u.load
                s.src=u.url(this.response)
                u.ap(s,'head')//appending filler.js to head
                s.onload=function(){
                  c.position.set(135,450,-50)
                  t.ad({//add sample to canvas
                    a:t.eval(u.task.load),
                    p:new T.Object3D,//container as its parent
                    gp:t.s})//and that container has t.scene as "grandpa"
                  setTimeout(function(){
                    u.cv.removeAttribute('style')
                    u.p.classList.remove(u.hz.tupian+u.uid)
                    r.render(t.s,c)},500)
                  u.task.load=u.url(u.task.load)
                  u.bt.innerHTML=u.play//▶
                  u.task.isDone=!0
                  u.bt.onclick=function(){//⚠
                    if(t&&u.task.isDone){
                      u.p.classList.length<2?(
                        u.p.classList.add(u.hz.man+u.uid),
                        this.innerHTML=u.back,//⬅
                        this.className=u.hz.huibao+u.uid,
                        h.R(u.a=1))
                        :(
                        u.p.classList.remove(u.p.classList[1]),
                        this.innerHTML=u.play,//▶
                        this.className=u.hz.wan+u.uid,
                        u.a=0)}}}}})}
        else u.bad(404,ut.load)}})
      /*console.log({load:u.load,cover:u.pic})*/}
    else u.bad(499)},
  new:function(tg,at){
    tg=u.d.createElement(tg)
    for(var i in at)tg[i]=at[i]//,console.log('called new fn')
    return tg},
  path:'http://casa3d.hostzi.com/',//'../public/',
  play:'&#9654;',//▶
  readAtt:function(s){var ut=u.task,i,a,e,l,a0,a2
    u.size.w=ut.isDone=!1
    for(i in s){if(isNaN(i))return
      if((a=s[i].dataset)&&a.set){
        //console.log('dataset',i,':',s[i].dataset,'from:',s[i].src)
        a=a.set.split(' ')
        ut.load=(e=/\/\/casa(\d{1}|\d{2}).js/.exec(a0=a[0]))?
          u.repo+e[ut.fromHome=1]+'.js'
          :/\.js/.test(a0)&&(a0)
        //console.log(a)
        a2=a[2],a=a[1]
        u.size.set((
          ut.img(a)||a==void 0?
            u.z.split('p')[0]//it's an image, so let it be default-size
            :a).split('x'),
          u.size)
        //console.log(a)
        ut.pic=ut.fromHome?
          u.repo+e[1]+'.jpg'
          :a2//let pic be a at position 2 (if it's set up)
          ||ut.img(a)}}},//,console.log('after sent: a.split(x)=',a.split('x'),'u.size=',u.size)
  set:function(){//stablish trigger, whether now or wait 'till load
    var x=u.new('a',{innerHTML:'&#9888;'})//⚠
    u.repo=u.path+'casa/'
    f={bs:u.path}
    u.js=u.path+'js/lbs.js'//'filler'
    u.alert=x.innerHTML
    u.readAtt(u.d.scripts)
    //console.log(u.task,'\n',u.size)
    u.d.readyState=='complete'?u.init():onload=u.init},
  size:{
    w:0,
    h:0,
    set:function(a,z,i){//read & return attribute
      //console.log('before:',a)
      !a[1]&&(a[1]=a[0])
      //console.log('after:',a)
      for(i in a)u.size[z.w?'h':'w']=/px|pc|pt|%|em/.test(a[i])?(
        a[i])
        :a[i]+'px'
      /*console.log(u.size.w,u.size.h)*/}},
  sty:function(s){var e,i//style element, style content, iterator
    s=s.split('_')
    e=u.d.styleSheets[0]||u.H.appendChild(u.new('style')).sheet
    //console.log(u.el=e,u.s=s,i)
    for(i in s)e.insertRule(s[i]+'!important}',e.rules.length)},
  style:function(shi){//set: division,unique id
    var id=(shi='.'+shi).slice(2),
        bt=shi+'>button',
        cv=shi+'>canvas',
        man='.'+u.hz.man+id,
        wan='.'+u.hz.wan+id,
        huibao='.'+u.hz.huibao+id,
        jinbao='.'+u.hz.jinbao+id,
        tupian='.'+u.hz.tupian+id,
        cuowu404='.'+u.hz.cuowu+404+id,
        cuowu499='.'+u.hz.cuowu+499+id,
        s=u.size
    u.sty(
      shi+'{background:linear-gradient(#fff,#7d7ddf 90%,#1b186d);box-shadow:rgba(0,0,0,.5) 5px 5px 1em 4px;display:inline-block;height:'+s.h+';text-align:center;width:'+s.w+';z-index:999999_'+
      bt+'{background:transparent;border:1px ridge #FFF;border-radius:1em;cursor:pointer;font-size:'+(u.chrome?(2.55,3.2):3.2)+'em;outline:0;text-shadow:#00dfff 2px 0 10px;transition:.6s;width:70px_'+
      bt+':hover:not('+jinbao+'){background:rgba(0,178,255,0.51)_'+
      shi+','+bt+'{color:#FFF;font-family:Segoe UI Symbol_'+
      man+','+cv+'{height:100%;width:100%_'+
      man+','+huibao+'{left:0;position:fixed;top:0_'+
      wan+'{padding-right:0;top:-50%;'+(u.chrome?'-webkit-':'')+'transform:translateY(-50%)_'+
      huibao+'{padding-top:0_'+
      jinbao+'{border:0_'+
      jinbao+':hover{background:0!important;color:#FFE525_'+
      tupian+'{'+(u.task.pic?'background:url('+u.task.pic+')0/cover,':'')+'#097780!important_'+
      cuowu404+':after{content:"404"_'+
      cuowu499+':after{content:"499"_'+
      wan+','+cuowu404+':after,'+cuowu499+':after{display:table-cell;position:relative')},
  task:{
    fromHome:0,
    img:function(a){//is it an image? (i.e. jpeg, jpg, ttif, gif, ico, webp)
      return /(g|f|o|p)$/.test(a)&&(a)}},
  url:function(cnt){//url from blob protocol
    return URL.createObjectURL(new Blob([cnt||''],{type:'application/JavaScript'}))},
  xhr:function(o){//object
    var x=new XMLHttpRequest()
    x.open('GET',o.fl||u.js)//async-defacto
    x.onprogress=o.prg
    x.onload=o.ld
    x.send()},
  z:'128px',
  init:function(s){//initiate
    u.b=u.d.body
    u.H=u.d.head
    /*hànzì Chinese Characters used:
    师 Shī: division
    满 Mǎn: full
    玩 Wán: play
    回报 Huíbào: return
    警报 Jǐngbào: alert
    图片 Túpiàn: picture
    错误 Cuòwù: error */
    var v,b,
      p=u.p=u.new('div',{innerHTML:'&#24072;&#28385;&#29609;&#22238;&#25253;&#35686;&#25253;&#22270;&#29255;&#38169;&#35823;'}),//parsing characters
      c=u.cv=u.new('canvas'),
      id=u.url().split('-')

    u.uid=id=id[id.length-1]
    v=p.innerHTML//ok, gathering result
    u.hz={
      shi:v[0],
      man:v[1],
      wan:v[2],
      huibao:v[3]+v[4],
      jinbao:v[5]+v[6],
      tupian:v[7]+v[8],
      cuowu:v[9]+v[10]}
    p.innerHTML=''
    b=u.bt=u.new('button',{className:u.hz.wan+id})

    u.ap(p,'body')//append button&canvas to div
    u.ap(c,p)
    u.ap(b,p)
    u.loadAsset(u.task.load)
    u.style(p.className=v[0]+id)
    p.classList.add(u.hz.tupian+id)}}//appending 绝 后 style to head
u.set()