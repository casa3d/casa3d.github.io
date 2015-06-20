D=document
F=Function('v,f',(r='return ')+'Function(f?v:"v,w,h",f||v)')
c=F(
 'h=D.createElement(v.big?v:"canvas"),'+
 '!v.big&&(h.width=v,h.height=w);'+
 'for(var l in w)h[l]=w[l];'+
 r+'h')
f={//font | type face
 it:0,
 E:D.styleSheets[0],
/*face:F(
  "for(l in w)h+='local('+w[l]+')';"+
  "f.ir('@font-face{font:0 '+v+';src:'+h)"),*/
 face:F(
  "H='url(lang/fnt/',e=/hi|mr|ne/.test(v)?'देवनागरी':encodeURI(бзو一l[v].split(' |')[0]);"+
  "for(l in w)h+='local('+w[l]+'),';"+
  "H+='woff2/'+e+'.woff2),'+H+'woff/'+e+'.woff),'+H+'ttf/'+e+'.ttf)',"+
  //console.log(v,h),+
  "f.ir('@font-face{font-family:'+v+';src:'+h+H)"),
 ir:F('f.E.insertRule(v,f.E.cssRules.length)'),
 tx:F('v.innerHTML=w'),
 s:'body>*{background:rgba(0,0,0,.5);color:#FFF;position:fixed;text-align:center;width:100%;transition:1s}body>:first-child{font-size:165%;height:100%}#container{background:rgba(0,0,0,.5);left:0;opacity:.9;top:0}#L a{color: #FFF;cursor:pointer;padding:10px;transition:.5s}#L a:nth-child(odd){border-radius:0 1em}#L a:nth-child(even){border-radius:1em 0}#L a:hover{box-shadow:#FFF 0 0 20px,#FFF 0 0 20px,#FFF 0 0 20px,#FFF 0 0 20px;box-shadow: #FFF 0 0 30px;text-shadow:#000 0 0 10px;}#L a:active{background:linear-gradient(-45deg,#AAA 50%,#333 50%)}#C{text-transform:capitalize}.true+*{color:#0AF}.true{background:rgba(0,0,0,.5);top:20%}.true>a{background:linear-gradient(-45deg,#333 50%,#AAA 50%);display:inline-block;margin:4%'.split('}'),
 始:F(
  'for(var l in f.s)f.ir(f.s[l]);'+
  "for(l in fam)f.face(l,fam[l].split(','),'');"+
  "f.ir('body{font:75% Arial,'+Object.keys(fam)+'')")}
f.始()