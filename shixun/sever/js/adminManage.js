/**
 *
 * @param idFirst
 * @param idSecond
 */
function tabChange(idFirst,idSecond) {
    //   获取左侧tab
    let  leftTab = document.getElementById(idFirst);
    let  li = leftTab.getElementsByTagName('li');
    //获取右侧tab
    let rightTab = document.getElementById(idSecond);
    let div = rightTab.getElementsByTagName('div');

    //实现关联
    let  lastIndex = 0;
    for (let i = 0; i < li.length; i++) {
        li[i].CurIndex = i;
        li[i].onclick = function () {
            if(this.CurIndex === lastIndex)  return;
            div[lastIndex].className="hidde";
            div[this.CurIndex].className = 'tabChange';
            lastIndex = this.CurIndex;
            let passValue = 'n='+ lastIndex;
            ajax(passValue,"./php/adminManage.php");
        }
    }
}
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
            let num = value.replace(/[^\d]/g, '');
            show(num,date);
        }
    }
    //    执行发送
    xhr.send(value);
}

/**
 * 信息展示
 */
function  show(value,date) {
    let bottomChange = document.getElementById('bottomChange');
    let div = bottomChange.getElementsByTagName('div');
    let table = div[value].getElementsByTagName('table')[0];
    let tbody = table.getElementsByTagName("tbody")[0];
    tbody.innerHTML = date;
}
/**
 * 运行函数
 */
function  run() {
    tabChange('topChange','bottomChange');
    let urlValue = getQueryString('cn');
    urlValue = eval('(' + urlValue + ')');
    ajax(urlValue['v'],"./php/adminManage.php")
}
run();