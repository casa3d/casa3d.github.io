K={d:document,w:window,xp:";expires=1 jan 0 00:00:00",u:void 0,CK:{},sp:function(){cmp=c.position,cr=c.rotation,K.stks("x:"+cmp.x+" y:"+cmp.y+" z:"+cmp.z+" rx:"+K.fx(cr.x,14)+" ry:"+K.fx(cr.y,14)+" rz:"+K.fx(cr.z,14))},pf:function(n){return parseFloat(n)},fx:function(n,t){return K.pf(K.pf(n).toFixed(t||4))||n},ks:function(){return""==K.ck()?[]:K.ck().split("; ")},ck:function(){return K.d.cookie},lsks:function(){for(kslrv=[],ki=0,ksls=K.ks();ki<ksls.length;)kslrv.push(ksls[ki].substring(0,ksls[ki++].search("=")));return kslrv},stk:function(n,t){return n==K.u&&(console.log(STKE="error, try this one K.stk('name','value') or K.stk('name=value')"),alert(STKE)),!t&&(n=(N=n.split("="))[0],t=N[1]),K.d.cookie=(nv=(n=K.fx(n,14))+"="+(t=K.fx(t,14)))+";",K.CK[n]=0==t?0:t,ds=K.ck()},stks:function(n,t){var k;n=n.replace(/:/gm,"=").split(" "),ks=K.ks();for(k in n)if(n[k]!=ks[k]){for(k in n)K.stk(n[k]);t!=K.u&&"allbabnadifullJSONjson!0".match(t)&&alert(t+"before:\n"+(K.ck()||"0 cookies")+"\n\nnow:\n"+n);break}},gtk:function(n){var t=0;if(n){for(n+="=",ds=K.ks();t<ds.length;)if(k=ds[t++],k.indexOf(n)>=0)return k1=K.pf(k0=k.substring(n.length,k.length)),0==k1?0:k1||k0;return"DNEY: Do Not Exist Yet!"}return!1},gtks:function(n,t){gkrv=[],n=n?n.split(" ")[0].split(""):K.lsks();for(In in n)gkrv.push("tf"==t?K.vfk(n[In]):K.gtk(n[In])),ck1=K.pf(cg=gkrv[In]),K.CK[n[In]]=0==ck1?0:ck1||cg;return gkrv},dlk:function(n){var t;if(ds=K.ks(),/true|all|empty/.test(n)||n==K.u)for(t in ds)K.d.cookie+=K.xp;else K.d.cookie=n+K.xp;return""==K.ck()?"0 cookies, believe me just type document.cookie":ds.length-1>1?"there are "+(ds.length-1)+" cookies:\n\n"+K.ks():"just left this cookie\n\n"+K.ck()},vfk:function(n){var t;if(n){ds=K.ks(),n+="=";for(t in ds)if(ds[t].match(n))return!0}return!1},vfks:function(n){if(n){if(vki=0,vkrv=!0,n=n.split(" "),n[0].length>2){for(;vki<n[vki].length;)n.unshift(n[vki].charAt(n[vki].length-1-vki++));n.splice(vki,1)}else""==n[0]&&n.shift("");for(vki=0;vki<n.length&&vkrv;)vkrv=K.vfk(n[vki++])}return vkrv}},K.w.onblur=K.w.onbeforeunload=K.sp;