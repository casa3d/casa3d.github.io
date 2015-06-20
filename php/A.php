<?php
 $ip=strtolower(base64_encode(str_replace('.','',$_SERVER['REMOTE_ADDR'])));// strip dots & convert it to based64Bit_string
 mysql_select_db('casa3d',mysql_connect('localhost','root',''));
 foreach($_FILES as $key=>$val){$s=$val['size'];
  $n=split('\.jp(g|eg)$',$val['name'])[0];//scanning incoming_array is unique way to read its corresponding position
  move_uploaded_file($val['tmp_name'],$ip.'/'.$key.'.jpg');
  mysql_query("ALTER TABLE $ip ADD `$key` VARCHAR(100)");
  mysql_query("UPDATE $ip SET `$key`='s:n|$key'");//log this transaction
  echo $key;}?>