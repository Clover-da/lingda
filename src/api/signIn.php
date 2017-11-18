<?php

    // 引入其他php文件
    include 'common.php';

    // 获取前端传递的参数
    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $password = isset($_GET['password']) ? $_GET['password'] : '';
    // var_dump($username,$password);
    //查看用户名是否已经存在
    $sql = "select username from user where username='$username'";
    $result = $conn->query($sql);
    // var_dump($result);

    if($result->num_rows>0){
        // 释放查询内存(销毁)
        $result->free();

        // 用户名已经被占用
        echo "fail";


    }else{
        if(!$password){
            return;
        }
        // 释放查询内存(销毁)
        $result->free();
        // 密码md5加密
        $password = md5($password);

        $sql = "insert into user(username,password) values('$username','$password')";
        $result = $conn->query($sql);

        // var_dump($result);
        if ($result) {
            // 写入成功
            echo "ok";
        } else {
            // 写入失败
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }



    //关闭连接
    $conn->close();




?>