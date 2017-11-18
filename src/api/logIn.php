<?php
/**
 * @Author: Marte
 * @Date:   2017-11-18 11:01:11
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-11-18 11:30:33
 */
    
    // 引入其他php文件
    include 'common.php';

    // 获取前端传递的参数
    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $password = isset($_GET['password']) ? $_GET['password'] : '';

    // 密码md5加密
    $password = md5($password);

    $sql = "select * from user where username='$username' and password='$password'";


    // 获取查询结果
    $result = $conn->query($sql);

    //使用查询结果集
    //得到json字符串
    $row = $result->fetch_row();

    //print_r($row[0]);

    if($row[0]){
        echo 'ok';
    }else{
        echo 'fail';
    }
    

    // 释放查询内存(销毁)
    $result->free();

    //关闭连接
    $conn->close();
?>