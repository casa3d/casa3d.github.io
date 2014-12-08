<?php
  $K='casa3d.hostzi.com';
  $r=$_POST['recipient'];
  $bj=$_POST['subject'];
  $msg=$_POST['message'];
  $frm=$_POST['from'];
  $lng=$_POST['lng'];

  !$frm&&($frm=!1);

  mail($r,$bj,$msg,$frm);
  mail('casa3d@outlook.com',$bj,$msg,$frm);
  $msg=$lng=='es'?'Gracias por tu ayuda, atentamente '.$K:'thank you for your help, sincerely yours '.$K;
  $frm&&(mail($frm,'casa3d',$msg,$r));
  echo '✔';?>