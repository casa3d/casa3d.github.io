b={//browser: IE,Chrome,Firefox & 2last
 i:0,
 fn:["s.sty('roll{top:15%')",
 "setTimeout(function(){ops.className=ops.className.replace('in','out')},2e3)"],
 brw:function(br){f=b.fn;var lg=';s.lng="'+lngs[on].t+'".split("_")'
  return f[(/AppleWebKit|Firefox/i).test(br)?1:0]+lg}}
p={//parse
 N:'⓪①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳'.split(''),
 sty:"#roll>div fieldset{background:linear-gradient(#FFF,#F5F5F5);border-radius:1em;border:4px groove threedface;border-top:0;border-right:0;box-shadow:black 2px 8px 11px;margin-bottom:.5em_fieldset:after{content:'.'_legend{background:linear-gradient(transparent,white,transparent);font-style:oblique;text-shadow:white 3px 0 2px_center>:not(textarea){font-size:1em_textarea{font-size:2em_fieldset>center>button{display:block_center>label:before{content:' '_center>label:after{content:': '_#roll>div:nth-child(6)>fieldset>legend:before{content:'vr '_#roll>div:nth-child(2)>fieldset>legend:after{content:'?'_#roll>:nth-child(5)>:nth-child(-n+23) label:before{content:' (2014.'_#roll>:nth-child(5)>:nth-child(n+24) label:before{content:' (2015.'_legend>label:after{content:')'_#视频{border-radius:1em;box-shadow:#000 0 0 3em;left:25%;opacity:.95;position:fixed;top:20%_#玩{background:transparent;color:#FFF;cursor:pointer;border:0;font-size:3.1em;left:10%;outline:0;text-shadow:#000 0 0 6px_#玩:hover{color:#000;text-shadow:#FFF 0 0 9px",
 C:'<center>',c:'</center>',
 D:'<div>',d:'</div>',
 H:'<h1>',h:'</h1>',
 hr:'<hr>',
 F:'<fieldset>',f:'</fieldset>',
 L:'<legend>',l:'</legend>',
 LA:'<label>',la:'</label>',
 S:'<select>',s:'</select>',
 O:'<option>',o:'</option>',
 T:'<tbody>',t:'</tbody>',
 TD:'<td>',td:'</td>',
 TR:'<tr>',tr:'</tr>',
 fill:function(s,k){v=''    //📅 improvements
  for(i in p.V)p.v=p.V[i],k==p.k[4]&&(v=1,p.v[0]=p.v[0].replace(' ','<label>')),s+=p.F+p.L+(v?'':p.N[Number(i)+1])+' '+p.v[0]+p.l+p.v[1]+p.f
  return s},
 contact:function(s){
  for(i in p.V){p.v=p.V[i]
   s+='<'+i+'>'
   i=='fieldset'&&(s+=p.C)
   if(typeof p.v=='string')s+=p.v
   else{//details|table
    for(j in p.v){var ts=/type|recipient/.test(j)
     p.x=p.v[j]
     if(typeof p.x=='string')y=p.x.charAt(0)!=' ',s+=(y?p.LA+(on=='es'&&ts?p.i.s[p.e.s.indexOf(j)]:j)+p.la:'')+'<'+(y?'':j)+p.x+'>'+(y?'':'</'+j+'>')
     else{
      s+=ts?
       p.LA+(on=='es'?p.i.s[p.e.s.indexOf(j)]:j)+p.la+p.S
       :p.F
      for(k in p.x){
       if(j=='fieldset')s+=p.F+p.L+k+p.l+p.x[k]+p.f
       else s+=p.O+p.x[k]+(j=='recipient'?'@'+K:'')+p.o}
      s+=ts?
       p.s
       :p.f}}}
   i=='fieldset'&&(s+=p.c)
   s+='</'+i+'>'}
  return s},
 rs:function(k){p.V=str[k]
  s=p.H+(on=='es'?p.i.t[p.k.indexOf(k)]:k)+p.h+'<hr>'
  return b.i==5?p.contact(s):p.fill(s,k)}}
this.onmessage=function(e){d=e.data
 if(d.ua){//userAgent
  j='.js',d.rf+='/js/'
  importScripts(d.rf+'structure'+j)
  b.end=(p.k=Object.keys(str)).length
  postMessage({fn:'s.sty("'+p.sty+'"),'+b.brw(d.ua[0])})
  on=='es'&&(p.i=lngs[on],p.i.t=p.i.t.split('_'),p.e=lngs.en)
  x=setInterval(function(){
   postMessage({i:b.i,cnt:p.rs(p.k[b.i]),t:p.k[b.i]})
   ++b.i==b.end&&(clearInterval(x),postMessage({fn:"roll.children[3].innerHTML='<button id=玩>▶</button><video id=视频 controls hidden></video>'+roll.children[3].innerHTML,console.log('attempting to terminate worker...',s.wk.terminate(),'worker terminated')"}))},50)}}
