<?php
header("Content-Type: text/html; charset=utf-8");
ob_start();
require_once "dpLink.php";
//判断post过来的数据是否为空
if(!empty($_POST['roomNum'])) {
    $roomNum = $_POST['roomNum'];
}
if(!empty($_POST['roomPrice'])) {
    $roomPrice = $_POST['roomPrice'];
}
if(!empty($_POST['livingRoom'])) {
    $livingRoom = $_POST['livingRoom'];
}
if(!empty($_POST['leaveRoom'])) {
    $leaveRoom = $_POST['leaveRoom'];
}
if(!empty($_POST['userCount'])) {
    $userCount = $_POST['userCount'];
}

$link = dbLink();
$sql = "insert into `booking`(login_count,room_num,living_time,leave_time) values ('$userCount',$roomNum,'$livingRoom','$leaveRoom');";
query($link,$sql);
//用于重定向
if(isset($_SERVER['HTTP_REFERER'])) {
    $url =  $_SERVER['HTTP_REFERER'];
}
header("Location: $url");
ob_end_flush();