<?php
/**
 * 数据库连接
 * @return false|mysqli
 */
function dbLink() {
    $link = mysqli_connect("localhost","root","root");
    if(!$link) {
        die(mysqli_connect_error());
    }
    mysqli_query($link,"set names 'utf8'");
    mysqli_query($link,"use `hotelManagement`");
    return $link;
}

/**
 * 多行数据获取
 * @param $link
 * @param $sql
 * @return bool|mysqli_result
 */
function query($link, $sql) {
    $res = mysqli_query($link, $sql);
    if(!$res) {
        die("sql语句错误".mysqli_error($link));
    }
    return $res;
}

/**
 * 多行数据获取
 * @param $link
 * @param $sql
 * @return array
 */
    function fetchAll($link,$sql){
        $res=query($link,$sql);
        if($res){
            $arr=array();
            while($item=mysqli_fetch_assoc($res)){
                $arr[]=$item;
            }
            return $arr;
        }
    }

/**
 * @param $link
 * @param $sql
 * @return string[]|null
 */
    function fetchOne($link,$sql){
        $res = query($link, $sql);
        if ($res) {
            $item = mysqli_fetch_assoc($res);
            mysqli_free_result($res);
            return $item;
        }
    }