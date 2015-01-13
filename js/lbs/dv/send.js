typeof send!='undefined'&&(send.onclick=function(){
  if(h.nv.onLine){var f=send.parentElement.children
    if(f[6].value.length>15){var clock=setInterval(function(){send.innerText--},1000),
      s={txt:send.innerText,tt:send.title}
      send.disabled=!0
      send.innerText=30
      send.title=' . . . '
      clock&&setTimeout(function(){clearInterval(clock)},3e4)
      $.post(
       'support/mail.php',
       {recipient:f[5].value,
        subject:f[1].value,
        message:f[6].value,
        from:f[3].value,
        lng:h.nv.language},
        function(){
         send.disabled=!1
         send.title=s.tt
         send.text<2&&(alert('internet ?'))
         clock=clearInterval(clock)
         alert(send.innerText=s.txt)})}
    else alert(f[6].placeholder+' ...')}
  else alert('internet ?')})