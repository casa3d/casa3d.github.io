function xhr(obj,vr,fn,async){function ob2vr(n){nwV='';for(i in n)nwV+=i+'='+n[i]+'&';return nwV}pst=!(async=async||!0),/\(|function|\s/.test(vr)&&'object'!=typeof vr?('boolean'==typeof fn&&(async=fn),fn=vr,vr=''):(pst='POST',vr=ob2vr(obj.vars||vr)),rQ=new XMLHttpRequest,rQ.open(pst||'GET',obj.URL||obj,async),pst&&rQ.setRequestHeader('content-type','application/x-www-form-urlencoded'),rQ.onload=function(){'OK'==rQ.statusText&&eval(obj.fn||fn)},rQ.send(vr)}