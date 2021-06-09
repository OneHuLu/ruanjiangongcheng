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
 * @param parm
 */
function ajaxPost(value, url) {
    let xhr;
    //兼容性配置
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
//    准备发送请求，数据配置
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//    指定回调函数
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let date = xhr.responseText;
            date = eval('(' + date + ')');
            //数据展示,提取value的值，便于对应的数据添加
            let num = value.replace(/[^\d]/g, '');
            showRoomInfo(date, num);
        }
    }
    //    执行发送
    xhr.send(value);
}

/**
 * 房间数据展示living.html
 * @param date
 * @param num
 */
function showRoomInfo(date, num) {
    let rightTab = document.getElementById('rightTab');
    let div = rightTab.getElementsByTagName('div');
    let table = div[num].getElementsByTagName('table')[0];
    let tbody = table.getElementsByTagName("tbody")[0];
    for (let i = 0; i < date.length; i++) {
        let tr = document.createElement('tr');
        tr.innerHTML = "<td>" + date[i]['room_num'] + "</td><td>" + date[i]['room_price'] + "</td><td><a href='###' onclick='booking(+"+date[i]['room_num']+")'>预定</a></td>";
        tbody.appendChild(tr);
    }
}
