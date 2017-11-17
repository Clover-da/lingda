<?php
/**
 * @Author: Marte
 * @Date:   2017-11-16 10:19:27
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-11-16 10:47:18
 */
    // 引入其他php文件
    include 'common.php';


    /*
        接口：获取商品详细信息
     */
    // $name = isset($_GET['name']) ? $_GET['name'] : null;
    
    
    // 编写sql语句
    $sql = "select * from goods";

    // if($name){
    //     $sql .= " where name='$name'";
    // }

    // 执行sql语句
    // query()
    // 得到一个：查询结果集
    $result = $conn->query($sql);

    // 使用查询结果集
    // 返回数组
    $row = $result->fetch_all(MYSQLI_ASSOC);
    
    //释放查询结果集，避免资源浪费
    $result->close();

    // 关闭数据库，避免资源浪费
    $conn->close();

    // 把数组转换成json字符串
    $res = json_encode($row,JSON_UNESCAPED_UNICODE);
    // var_dump($res);
    echo "$res";


?>