D=document
F=Function('v,f',(r='return ')+'Function(f?v:"v,w,h",f||v)')
c=F(
 'h=D.createElement(v.big?v:"canvas"),'+
 '!v.big&&(h.width=v,h.height=w);'+
 'for(var l in w)h[l]=w[l];'+
 r+'h')
ae=F('v,w,h',
 'for(h in w)v.addEventListener(h,w.big?F(w):w)')
p={
 bs:'',
 chain:function(){var l=p.shft
  console.log(p.lc[0],l,location.pathname)
  p.ac=p.fr.contentWindow.applicationCache
  ae(p.ac,{
  downloading:'console.log("from '+l+': DOWNLOADING")',
  noupdate:'console.log("from '+l+': ONNOUPDATE")'})
  p.lc[0]&&p.f()},
 lc:'jv km ml my ne si ta te th ko zh'.split(' '),//language code
 f:function(){p.shft=p.lc.shift()
  p.fr=c('iframe',{src:p.bs+'lang/'+p.shft,onload:p.chain})
  document.body.appendChild(p.fr)}}