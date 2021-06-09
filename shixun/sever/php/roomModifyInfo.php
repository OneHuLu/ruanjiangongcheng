<?php
require_once "../../client/php/dpLink.php";
$link = dbLink();

if(isset($_POST['rn'])) {
    $value = $_POST['rn'];
    $sql = "select `room_type`,`room_price`,`room_state` from `room` where room_num = $value ";
    $res = fetchOne($link,$sql);
    $res = json_encode($res);
    echo $res;
} else {
    $roomNum = $_POST['roomNum'];
    $roomPrice = $_POST['roomPrice'];
    $roomType = $_POST['roomType'];
    $roomState = $_POST['roomState'];
    //房间类型转换
    if($roomType == '单人间') {
        $roomTypeValue = 0;
    }
    if($roomType == '双人间') {
        $roomTypeValue = 1;
    }
    if($roomType == '三人间') {
        $roomTypeValue = 2;
    }
    if($roomType == '四人间') {
        $roomTypeValue = 3;
    }
    if($roomType == '电竞套房') {
        $roomTypeValue = 4;
    }
    if($roomType == '总统套房') {
        $roomTypeValue = 5;
    }
    if($roomType == '豪华套房') {
        $roomTypeValue = 6;
    }
    if($roomType == '行政套房') {
        $roomTypeValue = 7;
    }
    if($roomType == '花园套房') {
        $roomTypeValue = 8;
    }
    if($roomType == '特色套房') {
        $roomTypeValue = 9;
    }
//    状态转换
    if($roomState == '空闲') {
        $roomStateValue = 0;
    } else {
        $roomStateValue = 1;
    }
    $sqlUpdate = "update `room` set room_price = $roomPrice,room_state = $roomStateValue,room_type = $roomTypeValue where room_num = $roomNum";
    query($link,$sqlUpdate);

    header("Location: ../adminManage.html?cn={'v':'0'}&t=0");
}

