a={//API
  d:document,
  a:function(c,e){//append: content,element
    (a.d[e]||e).appendChild(c)},
  new:function(tg){
    return a.d.createElement(tg)},
  set:function(){
    a.d.readyState=='complete'?
      a.init()
      :(
      console.log(a.d.readyState),
      onload=a.init)},
  sty:function(shi){//set: division,unique id
    var id=(shi='.'+shi).slice(2),sty=a.new('style'),man='.'+a.kj.man+id,wuxing='.'+a.kj.wuxing+id,bt=shi+'>button',cv=shi+'>canvas'
    sty.innerHTML=
      shi+'{background:#F00;z-index:999999}\n'+
      bt+'{background:#180;border-radius:5px}\n'+
      cv+'{background:#015}\n'+
      shi+','+bt+'{color:#FFF;display:table;font-family:Segoe UI Symbol;font-size:2em}\n'+
      man+','+cv+'{height:100%;width:100%}\n'+
      man+'{left:0;position:fixed;top:0}\n'+
      wuxing+'{display:none}'
    return sty},
  url:function(b){//url from blob protocol
    return URL.createObjectURL(new Blob(['']))},
  init:function(s){//initiate
    var v,p=a.p=a.new('div'),c=a.cv=a.new('canvas'),b=a.bt=a.new('button'),u=a.url().split('-')
    b.innerHTML='&#127968;'//🏠
    a.uid=u=u[u.length-1]
    p.innerHTML='&#24072;&#26080;&#24418;&#28385;'//parsing characters
    /*Chinese Characters used:
    师 Shī: division
    无形 Wúxíng: invisible
    满 Mǎn: full*/
    v=p.innerHTML//ok, gathering result
    a.kj={
      shi:v[0],
      wuxing:v[1]+v[2],
      man:v[3]}
    p.innerHTML=''

    a.a(p,'body')//append button&canvas to div
    a.a(b,p)
    a.a(c,p)
    c.className=a.kj.wuxing+u
    a.a(a.sty(p.className=v[0]+u),'head')//appending 绝 后 style to head
    a.bt.onclick=function(){
      a.cv.className=a.cv.className?(
        a.p.classList.add(a.kj.man+a.uid),
        '')
        :(
        a.p.classList.remove(a.p.classList[1]),
        a.kj.wuxing+a.uid)}}}
a.set()