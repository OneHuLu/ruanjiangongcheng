/**
 * 将样式tabChange通过函数tabChange实现样式转变
 */
function tabChange(idFirst, idSecond) {
    //   获取左侧tab
    let leftTab = document.getElementById(idFirst);
    let li = leftTab.getElementsByTagName('li');
    //获取右侧tab
    let rightTab = document.getElementById(idSecond);
    let div = rightTab.getElementsByTagName('div');

    //实现关联
    let lastIndex = 0;
    for (let i = 0; i < li.length; i++) {
        li[i].CurIndex = i;
        li[i].onclick = function () {
            if (this.CurIndex === lastIndex) return;
            div[lastIndex].className = "hidde";
            div[this.CurIndex].className = 'tabChange';
            lastIndex = this.CurIndex;
        }
    }
}

/**
 * 通过ajax实现数据请求,获得对应房间类型的房间数据
 *
 */
function getRoomInfo() {
    let leftTab = document.getElementById('leftTab');
    let a = leftTab.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
        let clickState = 0;
        a[i].onclick = function () {
            if (clickState == 1) {

            } else {
                clickState = 1;
                let rt = "rt=" + i;
                ajaxPost(rt, "./php/living.php");
            }
        }
    }

}

/**
 * 获取用户名字
 */
function showName() {
    let name = getQueryString('n');
    let username = document.getElementById('usName');
    username.innerText = decodeURI(name);
}

/**
 * 点击预定出现预定界面
 * 自定填写房间号
 * 自动填写入住时间
 */
function booking(roomNum) {
    let smb = document.getElementById('smb');
    let room = document.getElementById('roomNum');
    let living = document.getElementById('livingRoom');
    let date = new Date();
    let y = date.getFullYear();
    let m = date.getMonth()+1;
    m = m < 10 ? '0'+m : m;
    let d = date.getDay()+6;
    d = m < 10 ? '0'+d : d;
    let ymd = y+"-"+m+"-"+d
    living.value = ymd;
    console.log(ymd);
    room.value = roomNum;
    smb.style.display = "block";
}

/**
 * 将用户账号自动填写
 */
function getCount() {
    let ut = getQueryString('u');
    let userCount = document.getElementById('userCount');

    userCount.value = ut;
}

/**
 * 运行函数
 */
function run() {
    tabChange('leftTab', 'rightTab');
    showName();
    getCount();
    getRoomInfo();

}

run();