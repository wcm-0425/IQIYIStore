<?php

include "conn.php";

$conn->query('SET NAMES UTF8'); //设置字符编码

$result = $conn->query("select sid,url from bannerdata"); //获取整个表里面的数据(记录集)

$arrdata = array();


for ($i = 0; $i < $result->num_rows; $i++) {
    $arrdata[$i] = $result->fetch_assoc();
}


echo json_encode($arrdata);

$conn->close();
