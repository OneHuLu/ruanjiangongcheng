<?php
require_once "../../client/php/dpLink.php";
//删除页面
$nm = $_GET['nm'];
$t = $_GET['t'];
if(empty($nm)) {
    header("Location: ../admin.html");
}
$link = dbLink();
if($t == 0) {
    $deleteSql = "delete from `booking` where  room_num = $nm";
}
if($t == 1) {
    $deleteSql = "delete from `room` where  room_num = $nm";
}
if($t == 2) {
    $deleteSql = "delete from `client_tab` where  login_counet = $nm";
}
query($link,$deleteSql);
//重定向
if(isset($_SERVER['HTTP_REFERER'])) {
    $url = $_SERVER['HTTP_REFERER'];
}
header("Location: $url");
