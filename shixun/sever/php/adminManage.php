<?php
require_once "../../client/php/dpLink.php";
error_reporting(0);
$value = $_POST['n'];
$link = dbLink();
if($value == 0) {
    $info = '`login_count`,`user_name`,`user_phone`,`room_num`,`living_time`,`leave_time`';
    $need = 'booking.login_count = client_tab.login_counet';
    $bookInfoSql = "select $info from `booking`,`client_tab` where $need";
    $res = fetchAll($link,$bookInfoSql);
    foreach($res as $item){
            echo "<tr>
                <td>$item[login_count]</td>
                <td>$item[user_name]</td>
                <td>$item[user_phone]</td>
                <td>$item[room_num]</td>
                <td>$item[living_time]</td>
                <td>$item[leave_time]</td>
                <td><a href='./../sever/php/deleteInfo.php?nm=$item[room_num]&t=0'>订单确认</a></td></tr>";
    }
}
if ($value == 1) {
    //获取全部房间信息
    $roomSql = "select * from room";
    $res = fetchAll($link,$roomSql);
//   进行转换，将后台数值转换为可视化数据
    foreach($res as $item){
        echo "<tr><td>$item[room_num]</td>";
        if($item[room_type] == 0) {
            echo "<td>单人间</td>";
        }
        if($item[room_type] == 1) {
            echo "<td>双人间</td>";
        }
        if($item[room_type] == 2) {
            echo "<td>三人间</td>";
        }
        if($item[room_type] == 3) {
            echo "<td>四人间</td>";
        }
        if($item[room_type] == 4) {
            echo "<td>电竞房</td>";
        }
        if($item[room_type] == 5) {
            echo "<td>电竞房</td>";
        }
        if($item[room_type] == 6) {
            echo "<td>电竞套房</td>";
        }
        if($item[room_type] == 7) {
            echo "<td>行政套房</td>";
        }
        if($item[room_type] == 8) {
            echo "<td>花园套房</td>";
        }
        if($item[room_type] == 9) {
            echo "<td>特色套房</td>";
        }
         echo "<td>$item[room_price]</td>";
             if($item[room_state] == 1) {
                 echo "<td>房间占用</td>";
             } else {
                 echo "<td>房间空闲</td>";
             }
          echo " <td><a href='./modify.html?nm=$item[room_num]&t=1'>修改</a>
                <a href='./../sever/php/deleteInfo.php?nm=$item[room_num]&t=1'>删除</a></td></tr>";
    }
}
if ($value == 2) {
    $userSql = "select * from client_tab";
    $res = fetchAll($link,$userSql);
    foreach($res as $item){
        echo "<tr>
            <td>$item[login_counet]</td>
            <td>$item[user_name]</td>
            <td>$item[user_sex]</td>
            <td>$item[user_phone]</td>
            <td>$item[user_ident]</td>
            <td>$item[login_pwd]</td>
            <td><a href='./clientInfoModify.html?nm=$item[login_counet]&t=2'>修改</a> <a href='./../sever/php/deleteInfo.php?nm=$item[login_counet]&t=2'>删除</a></td>
            </tr>";
    }
}
if ($value == 3) {
    $sumSql = "select login_count,room_num,money from afterleavemoney";
    $res =  fetchAll($link,$sumSql);
    foreach($res as $v){
        echo "<tr>
            <td>$v[login_count]</td>
            <td>$v[room_num]</td>
            <td>$v[money]</td>
            </tr>";
    }
}


