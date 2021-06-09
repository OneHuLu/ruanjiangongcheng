<?php
require_once "dpLink.php";
$link = dbLink();
$count = $_POST['count'];
if ($count) {
    $sql = "select * from `booking` where  `login_count` = $count";
    $res = fetchAll($link, $sql);
    if (isset($res)) {
        $res = json_encode($res);
        echo $res;
    } else {
        echo "<script>alert('未查询到信息！！')</script>";
    }
}else {
    echo "没有传递账号";
}


