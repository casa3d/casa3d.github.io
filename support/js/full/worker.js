b={//browser: IE,Chrome,Firefox & 2last
  i:0,
  fn:["roll.style.top='15%'",
  ";var ch=ops.children,i=0;while(ch[i])ch[i].innerHTML='<img src=img/'+(i++)+'.png>'",
  "setTimeout(function(){ops.className=ops.className.replace('in','out')},2e3)"],
  brw:function(br){f=b.fn;var br,lg=';s.lng="'+lngs.es.t+'".split("_")'
    br=(/AppleWebKit|Firefox/i).test(br)?
      f[2]+((/AppleWebKit/i).test(br)?f[1]:'')
      :f[0]+lg
    return br+lg}}
p={//parse
  N:'⓪①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳'.split(''),
  sty:"<style>#roll>div fieldset{background:radial-gradient(rgba(0,0,0,0),white 16%,rgba(255,255,255,.5));border-radius:2em;border:4px groove threedface;border-top:0;border-right:0;box-shadow:black 2px 8px 11px;margin-bottom:.5em}fieldset:after{content:'.'}legend{background:linear-gradient(transparent,white,transparent);font-style:oblique;text-shadow:white 3px 0 2px}textarea{font-family:verdana;font-size:1em}fieldset>center>button{display:block}center>label:before{content:' '}center>label:after{content:':'}#roll>div:nth-child(6)>fieldset>legend:before{content:'vr '}#roll>div:nth-child(2)>fieldset>legend:after{content:'?'}legend>label:before{content:' (2014.'}legend>label:after{content:')'}</style>",
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
  fill:function(s,k){v=''
    for(i in p.V)p.v=p.V[i],k==p.k[5]&&(v=1,p.v[0]=p.v[0].replace(' ','<label>')),s+=p.F+p.L+(v?'':p.N[Number(i)+1])+' '+p.v[0]+p.l+p.v[1]+p.f
    return s},
  report:function(s){
    for(i in p.V){p.v=p.V[i]
      s+='<'+i+'>'
      i=='fieldset'&&(s+=p.C)
      if(typeof p.v=='string')s+=p.v
      else{//details|table
        for(j in p.v){var ts=/type|date|recipient/.test(j)
          p.x=p.v[j]
          if(typeof p.x=='string')y=p.x.charAt(0)!=' ',s+=(y?p.LA+(on&&ts?p.i.s[p.e.s.indexOf(j)]:j)+p.la:'')+'<'+(y?'':j)+p.x+'>'+(y?'':'</'+j+'>')
          else{
            s+=ts?
              p.LA+(on?p.i.s[p.e.s.indexOf(j)]:j)+p.la+p.S
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
    s=p.H+(on?p.i.t[p.k.indexOf(k)]:k)+p.h+'<hr>'
    return b.i?p.fill(s,k):p.report(s)}}
this.onmessage=function(e){d=e.data
  if(d.ua){//userAgent
    j='.js',d.rf+='js/'
    importScripts(d.rf+'structure'+j)
    b.end=(p.k=Object.keys(str)).length
    postMessage({fn:'s.d.head.innerHTML+="'+p.sty+'";'+b.brw(d.ua[0])})
    on&&(p.i=lngs[on],p.i.t=p.i.t.split('_'),p.e=lngs.en)
    x=setInterval(function(){
      postMessage({i:b.i,cnt:p.rs(p.k[b.i]),t:p.k[b.i]})
      ++b.i==b.end&&(clearInterval(x),postMessage({fn:((/AppleWebKit/i).test(d.ua)?"s.d.head.lastChild.innerHTML+='@font-face{font-family:u2400;src:url(css/u2400.woff)}#roll>div>fieldset{font-family:u2400}',":'')+"console.log('attempting to terminate worker...',s.wk.terminate(),'worker terminated')"}))},50)}}