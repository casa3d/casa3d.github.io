//move
m={
  地点:function(){//地点: location (Dìdiǎn)
    m[0]&&(
      m[0].innerHTML=m.f(m.P.x),
      m[1].innerHTML=m.f(m.P.y),
      m[2].innerHTML=m.f(m.P.z))},
  c:c.rotation,
  i:1,
  cn:0,
  P:c.position,
  rKey:!1,
  WASD:{28:1,50:2,31:3,46:4},//0? won't pass, so increase by 1
  sty:".idle{cursor:url(css/cr.cur),auto}trgt{height:40px;left:50%;opacity:.4;position:fixed;top:50%;width:40px}trgt:before{content:'⌖';font-size:5em;left:-50%;position:relative;text-shadow:#FFF 1px 1px 6px;top:-125%}.not{opacity:0",
  f:function(n){return Number(n.toFixed(2))},
  act:function(){
    m.rKey=m.rKey?(
      u.tg&&(
       u.tg.classList.add('not'),
       dr.o&&(dr.app=!0)),
      m.x=void 0,
      m.ApprX=!1)
      :m.once=!(
        u.tg&&(
         u.tg.classList.remove('not'),
         dr.m&&dr.m.emissive.g&&(
           dr.m.emissive.g--,
           dr.o=void 0),
         dr.app=!1)),
        u.b.className!='idle'&&(u.b.className='idle')},
  rq:function(f){requestAnimationFrame(f),!m.c&&(m.c=c.rotation)},
  a:function(){m.ρ(),
    m.Р=[-xF||0,zF,xF,-zF||0,-xF||0]},
  rt:function(ρκ){//making rotating-key global & calling m.r
    m.r(m.ρκ=ρκ)},
  r:function(){
    if(!m.ρκ||m.ρκ==2){//may pass if rotation-key might be 0 left or 2 right
      if(m.cn<30){m.rq(m.r)
        crYX=(m.π/30*(m.ρκ?-1:1))
        m.c.y+=crYX
        m.cn++}
      else{
        m.a(m.cn=0,
          (m.c.x+'').match('e')&&(m.c.x=0),
          (m.c.y+'').match('e')&&(m.c.y=0),
          (m.c.z+'').match('e')&&(m.c.z=0))}}},
  y:function(){
    m.onceY&&(
      m.rq(m.y),
      m.P.y+=(m.K-1?-5:5)*m.i)},
  Ρ:function(){
    m.ApprX&&(
      m.rq(m.Ρ),
      c.rotation.y+=m.X?-.0125:.0125)},
  xy:function(_a,_b){return m.P.z+=_a*m.i,m.P.x+=_b*m.i},
  p:function(){
    m.onceKey&&(
      m.rq(m.p),
      m.xy(
        m.Р[m.kF],
        m.Р[m.kF+1]))},
  z:function(){
    m.ApprN&&(
      m.rq(m.z),
      m.ρ(),
      m.xy(zF,xF))},
  k:function(e){return e.keyCode-30},
  ρ:function(){zF=-5,rF=c.rotation.y
    if((rtmp=Math.abs(rF))>m.Π){//if rotation temporary rotation is greater than 3.141592 then I'll roll it back
      LF=rF<0?-1:1
      rF=rtmp
      while(rF>m.Π)rF-=m.Π*2
      rtmp=Math.abs(rF*=LF)/*,rF//F U want 2 C current value of rF then unlock it*/}
    LF=rF>0?-1:1
    f0=5/m.π*rtmp
    zF+=f0
    xF=(f0>5?10-f0:f0)*LF},
  init:function(){
    m.π=(m.Π=Math.PI)/2
    u.sty(m.sty)
    typeof dm!='undefined'&&u.ap(
     u.tg=u.new(
      'trgt',
      {className:'not'+(u.a?'':' no')}),
     'body')}}
onmousemove=function(e){
  if(u.a){var X=m.X=e.clientX,x=m.x
    m.rKey&&(
      c.rotation.y+=X>x?
        -.025
        :X<x?
          .025
          :0,
      X<=0||X>=innerWidth-2?
        x!=X&&(
          m.ApprX=!0,
          m.Ρ(X))
        :m.ApprX&&(m.ApprX=!1))
    x!=X&&(m.x=X)}},
onkeydown=function(e){
  if(u.a){var k=m.k(e)-7
    !e.shiftKey&&!e.ctrlKey&&(k>-1&&k<4||m.WASD[k])?
      !m.onceKey&&(
        m.ρ(),
        m.Р=[-xF,zF,xF,-zF,-xF],
        m.onceKey=!0,
        m.p(m.kF=k<4?k:m.WASD[k]-1))
      :e.altKey?
        k==150||k==152?(
          _k=k<152,
          m.i+=m.i>1?
            _k?
              1
              :-1
            :m.i==1?
              _k?
                1
                :-.5
              :_k?
                m.i
                :-m.i/2)
          :e.ctrlKey?
            m.i=-Math.abs(m.i)
            :m.once&&m.rKey&&(
              m.ApprN=!(m.once=!1),
              m.z())
        :e.ctrlKey?
          (k==1||k==3)&&(!m.onceY)&&(
            m.onceY=!0,
            m.y(m.K=k))
          :k==45?
            m.act()
            :k==150||k==152?(
              _k=k<152,
              m.i+=m.i>1?
                _k?
                  1
                  :-1
                :m.i==1?
                  _k?
                    1
                    :-.5
                  :_k?
                    m.i
                    :-m.i/2)
              :u.d.activeElement.className!=='ce'&&k==-29&&(
                e.preventDefault(),
                e.stopPropagation())
      m.地点()}},//inform about 地点? //location (Dìdiǎn)
onkeyup=function(e){
  if(u.a){
    var k=m.k(e)-7
    k>=0&&k<4||m.WASD[k]?
      e.shiftKey?
        m.rt(k<4?k:m.WASD[k]-1)
        :m.onceY=m.onceKey=!1
      :k==-19?
        m.once=!(
          m.ApprN=!(m.i=Math.abs(m.i),1))
        :e.altKey&&k==-20?
          m.i=Math.abs(m.i)
          :k==-21&&k!=[0-3]?
            (m.onceKey=!1)
            :k==-20&&e.shiftKey&&(m.onceY=!1)
    m.地点()}}
m.init()