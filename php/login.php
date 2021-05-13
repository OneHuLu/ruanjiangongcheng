<?php
    header("Content-Type: text/html; charset=utf-8");
    require_once "dpLink.php";
    /**
     * 登陆的逻辑处理
     */
    //    判断账号和密码是否为空，空为0，不空为1
    $count_state =( empty($_POST['userCount']) ? 0  : 1);
    $pwd_state =( empty($_POST['userPwd']) ? 0  : 1);
    //判断当前输入框的状态是什么
    if($count_state || $pwd_state || $count_state == 0 || $pwd_state == 0) {
        $state_json = array(
            "cs" => $count_state,
            "ps"  => $pwd_state
        );
    }

//    登陆验证
    $link = dbLink();
    $userCount = $_POST['userCount'];
    $userPwd = $_POST['userPwd'];
    $countSql = "select login_counet from client_tab where login_counet='$userCount'";
    $pwdSql = "select login_pwd from client_tab where login_counet='$userCount'";
    $count = fetchOne($link,$countSql);
    if($count['login_counet'] == "") {
        $state_json["ct"] = "0";
    } else {
        $state_json["ct"] = "1";
        $pwd =  fetchOne($link,$pwdSql);
        if($_POST['userPwd'] != $pwd['login_pwd']) {
            $state_json["pt"] = "0";
        } else {
            $state_json["pt"] = "1";
        }
    }

    print_r($state_json);
    $state_json = json_encode($state_json);
    header("Location: ../login.html?s=".$state_json);