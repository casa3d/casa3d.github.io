<?php
 mysql_select_db('casa3d',mysql_connect('localhost','root',''));
//$ip=strtolower(base64_encode(str_replace('.','','181.142.197.168')));//$_SERVER['REMOTE_ADDR'] strip dots & convert it to based64Bit_string
 $nm=$_POST['nm'];$pw=$_POST['pw'];

//$nm='2bHVpcw==';$pw='[254,166,218,96,162,228,134,108]';
 $a=mysql_fetch_assoc(mysql_query("SELECT * FROM users WHERE name='$nm' AND pass='$pw'"));
 if(json_encode($a)!='false'){
  $ip=$a['ip'];
  $b=mysql_fetch_assoc(mysql_query("SELECT * FROM $ip"));
  $a['img']=json_encode($b)!='false'?
   $b:
   '';}
 echo json_encode($a)?>
