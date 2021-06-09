/**
 *获取url后的数据，并转换为json数据格式
 * @param name
 * @returns {string|null}
 */
function getQueryString(name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    }
    return null;
}
/**
 *
 * @returns {string|null}
 */
function  getNm() {
    let value = getQueryString('nm');
    let loginCount = document.getElementById('loginCount');
    loginCount.setAttribute('value',value);
    return  value;
}
/**
 * 数据请求
 */
function ajax(value,url) {
    let xhr;
    //兼容性配置
    if(window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else  {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
//    准备发送请求，数据配置
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//    指定回调函数
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200) {
            let date = xhr.responseText;
            console.log(date);
            date = eval('('+date+')');
            let userName = document.getElementById('userName');
            let userSex = document.getElementById('userSex');
            let  userPhone = document.getElementById('userPhone');
            let userIdentity = document.getElementById('userIdentity');
            userName.setAttribute('value',date['user_name']);
            userSex.setAttribute('value',date['user_sex']);
            userPhone.setAttribute('value',date['user_phone']);
            userIdentity.setAttribute('value',date['user_ident']);
        }
    }
    //    执行发送
    xhr.send(value);
}
function run() {
    let value = getNm();
    console.log(value);
    ajax('rn='+value,"./php/clientInfoModify.php");
}
run();