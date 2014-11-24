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
    var id=(shi='.'+shi).slice(2),sty=a.new('style'),kj=a.cn,bt=shi+'>button',cv=shi+'>canvas'
    sty.innerHTML=
      shi+'{background:#180;height:100%;width:100%;z-index:999999}\n'+
      bt+'{background:#015;border-radius:1em}\n'+
      cv+'{background:#057E9C}\n'+
      shi+','+bt+'{color:#FFF;display:table;font-family:Segoe UI Symbol;font-size:2em;position:fixed}\n'+
      '.'+kj.man+id+','+cv+'{height:100%;width:100%}\n'+
      kj.wuxing+id+'{display:none}'
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
    a.cn={
      shi:v[0],
      wuxing:v[1]+v[2],
      man:v[3]}
    p.innerHTML=''

    a.a(p,'body')
    a.a(c,p)//append canvas to div
    a.a(b,p)
    c.className=a.cn.inv+u
    a.a(a.sty(p.className=v[0]+u),'head')//appending 绝 后 style to head
    a.bt.onclick=function(){
      console.log('end')}}}
a.set()