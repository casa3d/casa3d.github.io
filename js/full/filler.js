d=document,S='script'
fl={//fill
  i:0,
  as:function(){//add script to head
    var s,n=fl.js[fl.i++]
    s=d.createElement(S)
    s.src=(
      n=='main'?
        'js/full'
        :'lbs')+
      '/'+n+'.js'
    s.onload=function(){
      n==fl.end?(
        fl.i=0,
        setTimeout(function(){$('script').remove()},3e3))
        :(n=='t'&&(T=THREE),
        fl.as())}
    d.head.appendChild(s)},
  init:function(js){//initiate script-name list & end-point, then add them all (1by1)
    fl.js=js.split(' ')
    fl.end=fl.js[fl.js.length-1]
    fl.as()}}
window.onload=function(){fl.init('idb jquery-2.x three vectrix t xhr main move drgNrsz ops jszip fnt')}
