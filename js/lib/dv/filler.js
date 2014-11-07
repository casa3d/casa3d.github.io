d=document,S='script'
fl={//fill
  i:0,
  list:[],
  as:function(){//add script to head
    var s=d.createElement(S),i=fl.js[fl.i++]
    fl.list.push(i)
    s.src=
      'js/'+
      (fl.i==2||fl.i==3||fl.i==10||fl.i==11?
        '3rd/'
        :'lib/')+
      i+'.js'
    s.onload=function(){
      i==fl.end?(
        zip.workerScriptsPath='js/3rd/',
        setTimeout(function(){$('script').remove()},3e3))
        :(
        i=='t'&&(T=THREE),
        fl.as())}
    d.head.appendChild(s)},
  init:function(js){//initiate script-name list & end-point, then add them all (1by1)
    fl.js=js.split(' ')
    fl.end=fl.js[fl.js.length-1]
    fl.as()}}
fl.init('idb jquery-2.x three t house move drgNrsz ops vectrix zip fnt')