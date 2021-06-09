<?php
require_once "../../client/php/dpLink.php";
$link = dbLink();
if(isset($_POST['rn'])) {
    $value = $_POST['rn'];
    $sql = "select `user_name`,`user_sex`,`user_phone`,`user_ident` from `client_tab` where login_counet = $value ";
    $res = fetchOne($link,$sql);
    $res = json_encode($res);
    echo  $res;
} else {
    $loginCount = $_POST['loginCount'];
    $userName = $_POST['userName'];
    $userSex = $_POST['userSex'];
    $userPhone = $_POST['userPhone'];
    $userIdentity = $_POST['userIdentity'];
    $updateSql = "update `client_tab` set  `user_name`= '$userName',`user_sex`='$userSex',`user_phone`= '$userPhone',`user_ident`='$userIdentity' where `login_counet`= '$loginCount'";
    query($link,$updateSql);
    header("Location: ../adminManage.html?cn={'v':'0'}&t=0");
}
