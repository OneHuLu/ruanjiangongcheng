<?php
/**
 * 注册页面逻辑处理
 * error:直接提交会报错,尚未处理
 */
error_reporting(0);
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
        $checkCount = "select `login_counet` from `client_tab` where `login_counet`=$cli_count";
        $res = query($link,$checkCount);
        if($res > 0) {
            echo "<script type='text/javascript'>alert('账号存在');location='javascript:history.back()';</script>";
        }
        if(!($cli_ident && $cli_name && $cli_sex)) {
            echo "<script type='text/javascript'>alert('不可以有空');location='javascript:history.back()';</script>";
        } else {
            $sql = "insert into `client_tab` values ('$cli_count','$cli_name','$cli_sex','$cli_ident','$cli_phone','$cli_pwd');";
            query($link, $sql);
            echo "<script>alert('注册成功')</script>";
            header("Location: ../login.html");
        }
    }