<?php
/**
 * @Author: Marte
 * @Date:   2017-11-17 09:20:26
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-11-17 16:43:32
 */
    
    // 引入其他php文件
    include 'common.php';

    // 获取前端传递的参数
    $pageNo = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;
    $qty = isset($_GET['qty']) ? $_GET['qty'] : 10;
    $type = isset($_GET['type']) ? $_GET['type'] : '';
    $brand = isset($_GET['brand']) ? $_GET['brand'] : '';
    $originplace = isset($_GET['place']) ? $_GET['place'] : '';


    // 编写sql语句
    $sql = "select * from goods";

    if($type){
        $sql .= " where type='$type'";
        if($brand){
            $sql .= " and brand='$brand'";
        }
    }else if($brand){
        $sql .= " where brand='$brand'";
    }else if($originplace){
        $sql .= " where originplace='$originplace'";
    }

    // 执行sql语句
    // query()
    // 得到一个：查询结果集
    $result = $conn->query($sql);

    // 使用查询结果集
    // 返回数组
    $row = $result->fetch_all(MYSQLI_ASSOC);
    
    // var_dump($row);
    //释放查询结果集，避免资源浪费
    $result->close();

    // 关闭数据库，避免资源浪费
    $conn->close();

    // 根据分页截取数据
    $res = array(
        'data'=>array_slice($row, ($pageNo-1)*$qty,$qty),
        'total'=>count($row)
    );

    // 把数组转换成json字符串
    $res = json_encode($res,JSON_UNESCAPED_UNICODE);
    // var_dump($res);
    echo "$res";
?>