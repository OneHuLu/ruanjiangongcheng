<?php
/**
 * 注册页面逻辑处理
 */
header("Content-Type: text/html; charset=utf-8");
require_once "dpLink.php";
    $link = dbLink();
    if(!empty($_POST)) {

        $cli_count = mysqli_real_escape_string($link, $_POST['loginCount']);
        $cli_pwd = mysqli_real_escape_string($link, $_POST['loginPwd']);
        $cli_name = mysqli_real_escape_string($link, $_POST['userName']);
        $cli_sex = mysqli_real_escape_string($link, $_POST['userSex']);
        $cli_ident = mysqli_real_escape_string($link, $_POST['userId']);
        $cli_phone = mysqli_real_escape_string($link, $_POST['userPhone']);

        if(!($cli_ident && $cli_name && $cli_sex)) {
            die("不可以为空");
        } else {
            $sql = "insert into `client_tab` values ('$cli_count','$cli_name','$cli_sex','$cli_ident','$cli_phone','$cli_pwd');";
//            echo  $sql;
            query($link, $sql);
            echo "<script>alert('注册成功')</script>";
        }
    }