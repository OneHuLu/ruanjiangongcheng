/**
 *数据展示模块
 * @param date
 */
function show(date) {
    let tbody = document.getElementById('show');
    date = eval('(' + date + ')');
    for (let i = 0; i < date.length; i++) {
        let tr = document.createElement('tr');
        tr.innerHTML = "<td>"+date[i]['login_count']+"</td><td>"+date[i]['room_num']+"</td><td>"+date[i]['living_time']+"</td><td>"+date[i]['leave_time']+"</td><td></td>";
        tbody.appendChild(tr);
    }
}
/**
 *
 * @param count
 */
function  bookAjax(count) {
    let xhr;
    //兼容性配置
    if(window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else  {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.open("POST","./php/findBooking.php",true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //    指定回调函数
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200) {
            let date = xhr.responseText;
            show(date);
        }
    }
    //    执行发送
    xhr.send(count);
}
/**
 * 判断是否为空
 */
function checkNull() {
    let count = document.getElementById('count');
    count.onmouseleave = function () {
        if(count.value == "") {
            count.setAttribute('placeholder','请输入查询账号,亲');
            // alert("请输入查询账号,亲");
        }
    }
}
/**
 * 获取预定信息
 */
function getBookInfo() {
    let count = document.getElementById('count');
    let btn = document.getElementById('btn');
    btn.onclick = function () {
        count = "count="+count.value;
        bookAjax(count);
    }
}

/**
 * 运行函数
 */
function run() {
    getBookInfo();
    checkNull();
}
run();