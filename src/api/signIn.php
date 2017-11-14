<?php
	// 获取前端传到后端的用户名
	$username = $_GET['username'];


	$all_user = array("15022371480","13512208603","13821327268","13516226783");


	if(in_array($username, $all_user)){
		echo "no";
	}else{
		echo "yes";
	}
?>