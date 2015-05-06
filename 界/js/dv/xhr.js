function xhr(o,vr,fn,async){//object,vr,fn,async by default object'll be POST method
  pst=!(async=async||true)
  function ob2vr(v){nwV=''
    for(i in v)nwV+=i+'='+v[i]+'&'
    return nwV}
  /\(|function|\s/.test(vr)&&typeof vr!='object'?(
    typeof fn=='boolean'&&(async=fn),
    fn=vr,
    vr='')
    :(pst='POST',
      vr=ob2vr(o.vars||vr))
  rQ=new XMLHttpRequest()
  rQ.open(
    pst||'GET',
    o.URL||o,
    async)
  if(pst)rQ.setRequestHeader('content-type','application/x-www-form-urlencoded')
  rQ.onload=function(){
    rQ.statusText=='OK'&&eval(o.fn||fn)}
  rQ.send(vr)}