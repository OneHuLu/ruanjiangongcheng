//导航栏部分实现鼠标经过显示show，离开消失hidde


function show(calssName) {
    var xainshi = document.getElementsByClassName(calssName);
    for (var i = 0; i < xainshi.length; i++) {
        xainshi[i].style.display = "inline-block";
    }
}

function hidde(calssName) {
    var xainshi = document.getElementsByClassName(calssName);
    for (var i = 0; i < xainshi.length; i++) {
        xainshi[i].style.display = "none";
    }
}
// 