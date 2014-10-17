<?php
  $K='casa3d.hostzi.com';
  $r=$_POST['recipient'];
  $bj=$_POST['subject'];
  $msg=$_POST['message'];
  $frm=$_POST['from'];

  !$frm&&($frm=!1);

  mail($r,$bj,$msg,$frm);
  $frm&&(mail($frm,$K,'thank you for your help, s.y. '.$K.' Team',$r));
  echo 'done';
?>