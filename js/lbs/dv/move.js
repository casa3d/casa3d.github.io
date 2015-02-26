//move
m={
  Π:Math.PI,
  dd:function(){//地点: location (Dìdiǎn)
    m[0]&&(
      m[0].value=m.f(m.P.x),
      m[1].value=m.f(m.P.y),
      m[2].value=m.f(m.P.z))},
  dr:function(){//地点 rotation
    m[4]&&(m[4].value=m.f(m.c.y))},
  e:u.f('o,a,i',
    'for(i in a)(o[a[i]]+"").match("e")&&(o[a[i]]=0)'),
  vl:function(){//velocity
    o.vl&&(o.vl.value=m.i)}
  c:c.rotation,
  i:1,
  cn:0,
  P:c.position,
  rKey:!1,
  WASD:{28:1,50:2,31:3,46:4},//0? won't pass, so increase by 1
  f:function(n){return Number(n.toFixed(2))},
  act:function(){
    u.tc(o.yan,'看')
    m.rKey=m.rKey?(
      m.x=void 0,
      m.ApprX=!1)
      :m.once=1,
    u.tc(u.b,'idle')},
  rq:function(f){
    requestAnimationFrame(f)
    !m.c&&(m.c=c.rotation)
    m.dr()
    m.dd()},
  a:function(){m.ρ(),
    m.Р=[-xF||0,zF,xF,-zF||0,-xF||0]},
  w:function(k){//plus or less which?
    return k==m.十||k==m.一},//since shí & yī seems to be + & - I'll use them
  l5:function(k,a){a=k<m.一
    m.i+=m.i>1?
      a?
        1
        :-1
      :m.i==1?
        a?
          1
          :-.5
        :a?
          m.i
          :-m.i/2,
    m.vl()},
  rt:function(ρκ){//making rotating-key global & calling m.r
    m.r(m.ρκ=ρκ)},
  r:function(){
    (!m.ρκ||m.ρκ==2)&&(//may pass if rotation-key might be 0(left) or 2(right)
      m.cn<30?(
        m.rq(m.r),
        crYX=(m.π/30*(m.ρκ?-1:1)),
        m.c.y+=crYX,
        m.cn++)
      :m.a(
        m.e(m.c),
        m.cn=0))},
  y:function(){
    m.onceY&&(
      m.rq(m.y),
      m.P.y+=(m.K-1?-5:5)*m.i)},
  Ρ:function(){
    m.ApprX&&(
      m.rq(m.Ρ),
      m.c.y+=m.X?-.01:.01)},
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
  k:function(e){return e.which-30},//or charCode but keyCode thx Firefox
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
    m.π=m.Π/2
    m.十=/firefox/i.test(u.nv.userAgent)?(
      m.一=136,
      134)
      :(
      m.一=150,
      152)
    u.sty('.idle{cursor:none')}}//.shàng
u.at(u.d,
  {onmousemove:function(e){
    if(u.a){var X=m.X=e.clientX,x=m.x
      m.rKey&&(
        c.rotation.y+=X>x?
          -.009
          :X<x?
            .009
            :0,
        m.dr(),
        X<=0||X>=innerWidth-2?
          x!=X&&(
            m.ApprX=!0,
            m.Ρ(X))
          :m.ApprX&&(m.ApprX=!1))
      x!=X&&(m.x=X)}},
  onkeydown:function(e){
    if(u.a){var k=m.k(e)-7
      !e.shiftKey&&!e.ctrlKey&&(k>-1&&k<4||m.WASD[k])?
        !m.onceKey&&(
          m.ρ(),
            m.Р=[-xF,zF,xF,-zF,-xF],
          m.onceKey=!0,
          m.p(m.kF=k<4?k:m.WASD[k]-1))
        :e.altKey?
          m.w(k)?
            m.l5(k)
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
              :m.w(k)?
                m.l5(k)
                :k==-29?(
                  e.preventDefault(),
                  e.stopPropagation())
                  :k==-10&&m.act()
        m.dd()}},//inform about 地点? //location (Dìdiǎn)
  onkeyup:function(e){
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
      m.dd()}}})//27 escKey
m.init()