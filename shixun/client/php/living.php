<?php
    header("Content-Type: text/html; charset=utf-8");
    require_once "dpLink.php";
    $rt = empty($_POST["rt"]) ? 0 : $_POST["rt"];
//    数据链接获取rt为1的房间
    $link = dbLink();
    $sql = "select room_num,room_price from  `room` where room_type=$rt and room_state=0";
    $roomRes = fetchAll($link, $sql);
    echo json_encode($roomRes);