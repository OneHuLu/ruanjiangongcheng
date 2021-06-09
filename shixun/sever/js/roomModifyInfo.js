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
    let roomNum = document.getElementById('roomNum');
    roomNum.setAttribute('value',value);
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
            date = eval('('+date+')');
            let roomType = document.getElementById('roomType');
            let roomPrice = document.getElementById('roomPrice');
            let roomState = document.getElementById('roomState');
            roomPrice.setAttribute('value',date['room_price']);
            if(date['room_state'] == 0) {
                roomState.setAttribute('value','空闲');
            } else  {
                roomState.setAttribute('value','占用');
            }
            if(date['room_type'] == 0) {
                roomType.setAttribute('value','单人间');
            }
            if(date['room_type'] == 1) {
                roomType.setAttribute('value','双人间');
            }
            if(date['room_type'] == 2) {
                roomType.setAttribute('value','三人间');
            }
            if(date['room_type'] == 3) {
                roomType.setAttribute('value','四人间');
            }
            if(date['room_type'] == 4) {
                roomType.setAttribute('value','电竞套房');
            }
            if(date['room_type'] == 5) {
                roomType.setAttribute('value','总统套房');
            }
            if(date['room_type'] == 6) {
                roomType.setAttribute('value','豪华套房');
            }
            if(date['room_type'] == 7) {
                roomType.setAttribute('value','行政套房');
            }
            if(date['room_type'] == 8) {
                roomType.setAttribute('value','花园套房');
            }if(date['room_type'] == 9) {
                roomType.setAttribute('value','特色套房');
            }
        }
    }
    //    执行发送
    xhr.send(value);
}
function start() {
    let value = getNm();
    ajax('rn='+value,"./php/roomModifyInfo.php");
}
start();