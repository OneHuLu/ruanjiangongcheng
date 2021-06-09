<?php
require_once "../../client/php/dpLink.php";

$admin = $_POST['admin'];
$adminPwd = $_POST['adminPwd'];

$link = dbLink();
$sql = "select * from `admin` where `adminCount` = $admin";
$res = fetchOne($link, $sql);
if($res) {
    if($adminPwd = $res['adminPwd']) {
        $adJson = array(
            'ac' => $res['adminCount'],
            'an' => $res['adminName'],
            'v' => '0'
        );
        $adJson = json_encode($adJson);
        header("Location: ../adminManage.html?cn=".$adJson);
    }
} else {
    header("Location: ../admin.html?t=0");
}


