<?php
 $nm=$_POST['nm'];$pw=$_POST['pw'];$lg=$_POST['lg'];$pg=$_POST['pg'];$ps=$_POST['ps'];$rt=$_POST['rt'];
 $ip=strtolower(base64_encode(str_replace('.','',$_SERVER['REMOTE_ADDR'])));// strip dots & convert it to based64Bit_string
 mysql_select_db('casa3d',mysql_connect('localhost','root',''));
 if($_POST['up']=='y'){//update?
  $ip=$_POST['ip'];
  mysql_query("UPDATE users SET name='$nm',lang='$lg',page='$pg',position='$ps',rotation='$rt' WHERE ip='$ip' AND name='$nm'");}
 else{//new user
  mysql_query("INSERT INTO users(ip,name,pass,lang,page,position,rotation) VALUES('$ip','$nm','$pw','$lg','$pg','$ps','$rt')");
  mysql_query("CREATE TABLE $ip(`0` CHAR(100) CHARACTER SET utf8 COLLATE utf8_bin)");
  mysql_query("INSERT INTO $ip(`0`) VALUES('')");
  mkdir('../img/'.$ip,0777);}//make directory that'll store incoming user_pictures
?>
