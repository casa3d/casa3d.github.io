u={//user's API
  ap:function(c,e){//append: content,element
    (u.d[e]||e).appendChild(c)},
  c:function(m){console.log(m)},
  back:'&#11013;',//⬅
  bad:function(s){//symptom
    u.bt.innerHTML=u.alert
    u.bt.classList.add(u.hz.jinbao+u.uid,u.hz.cuowu+s+'_'+u.uid)
    u.bt.onclick=function(){alert(u.e[s])}},
  chrome:(/chrome/i).test(navigator.userAgent),
  d:document,
  e:{//error list
    404:'sample was not found',
    //415 Unsupported Media Type
    499:"sample was not supplied and it's is required"},//"el modelo no fue suministrado y es requerido",
  load:'&#9203;',//⏳
  loadAsset:function(o){//object={sample:mypage.com/file.js,pic:mypage.com/file.png}
    if(o&&/js/.test(o)){
      var A=(o=o.split(' '))[0],cv=A.split('/'),ut=u.task,s=u.new('script'),x
      ut.sample=/repo/.test(A)?(
        ut.pic=u.repo+cv[1].split('.')[0]+'.jpg',
        u.repo+cv[1])
        //console.log('asset comes from 3rd-party website:'+A),
        :(
        ut.pic=o[1],
        A)
      //console.log('task=load:',ut.sample,ut.pic)
      x=u.xhr({//let's get house-asset using XMLHttpRequest (it's first cuz its size ~2kb)
        fl:u.task.sample,
        ld:function(){//console.log(this)
          if(this.status==200){
            /*console.log(*/u.task.sample=this.response//)
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
                    a:t.eval(u.task.sample),
                    p:new T.Object3D,//container as its parent
                    gp:t.s})//and that container has t.scene as "grandpa"
                  setTimeout(function(){
                    u.cv.removeAttribute('style')
                    u.p.classList.remove(u.hz.tupian+u.uid)
                    r.render(t.s,c)},500)
                  u.task.sample=u.url(u.task.sample)
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
        else u.bad(404)}})
      /*return {load:u.load,sample:u.sample,cover:u.pic}*/}
    else u.bad(499)},
  new:function(tg,at){
    tg=u.d.createElement(tg)
    for(var i in at)tg[i]=at[i]//,console.log('called new fn')
    return tg},
  path:'../public/',//'http://casa3d.hostzi.com/',
  play:'&#9654;',//▶
  readAtt:function(s){var i,l,ATS,at,ut=u.task,m
    for(var i in s){
      if(isNaN(i))return
      //console.log('script',i,':',s[i])
      ATS=/*u.ats=*/s[i].attributes
      for(l in ATS){
        if(isNaN(l))return
        //console.log('attribute',l,':',ATS[l])
        at=ATS[l]
        if(at.name=='size')return /*console.log(*/m=/%|pc|px|em/.exec(at.value),at=at.value.split(' '),u.size.w=at[0]+(m=m?'':'px'),u.size.h=(at[1]||at[0])+m//)
        if(at.name=='load')/*console.log('found:',*/ut.load=at.value/*)*/}}},
  set:function(){//stablish trigger, whether now or wait 'till load
    var x=u.new('a',{innerHTML:'&#9888;'})//⚠
    u.repo=u.path+'repo/'
    f={bs:u.path}
    u.js=u.path+'js/lbs.js'//'filler'
    u.alert=x.innerHTML
    u.readAtt(u.d.scripts)
    u.d.readyState=='complete'?
      u.init()
      :onload=u.init},
  size:{},
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
        w=u.size.w||'256px',
        h=u.size.h||w
    u.sty(
      shi+'{background:linear-gradient(#fff,#7d7ddf 90%,#1b186d);box-shadow:rgba(0,0,0,.5) 5px 5px 1em 4px;display:inline-block;height:'+h+';text-align:center;width:'+w+';z-index:999999_'+
      bt+'{background:transparent;border:1px ridge #FFF;border-radius:1em;cursor:pointer;font-size:'+(u.chrome?(2.55,3.2):3.2)+'em;outline:0;text-shadow:#00dfff 2px 0 10px;transition:.6s;width:70px_'+
      bt+':hover{background:rgba(0,178,255,0.51)_'+
      shi+','+bt+'{color:#FFF;font-family:Segoe UI Symbol_'+
      man+','+cv+'{height:100%;width:100%_'+
      man+'{left:0;position:fixed;top:0_'+
      wan+'{padding-right:0;top:-50%;'+(u.chrome?'-webkit-':'')+'transform:translateY(-50%)_'+
      huibao+'{padding-top:0;position:fixed;left:0;top:0_'+
      jinbao+'{border:0_'+
      jinbao+':hover{background:0!important;color:#FFE525_'+
      tupian+'{background:url('+u.task.pic+')0/cover,#097780!important_'+
      cuowu404+':after{content:"404"_'+
      cuowu499+':after{content:"499"_'+
      wan+','+cuowu404+':after,'+cuowu499+':after{display:table-cell;position:relative')},
  task:{},
  url:function(cnt){//url from blob protocol
    return URL.createObjectURL(new Blob([cnt||''],{type:'application/JavaScript'}))},
  xhr:function(o){//object
    var x=new XMLHttpRequest()
    x.open('GET',o.fl||u.js)//async-defacto
    x.onprogress=o.prg
    x.onload=o.ld
    x.send()},
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