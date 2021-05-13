/**
 * 判断输入框是否为空
 */
function checkNull(stateInfo){
    let userCount = document.getElementById('userCount');
    let userPwd = document.getElementById('userPwd');
    let spanInfo = document.getElementsByTagName('span');
    let changeJson =   eval('(' + stateInfo + ')');
    if(!(changeJson['cs'] || changeJson['ps'])) {
        if (changeJson['cs'] == "0" ) {
            userCount.setAttribute('placeholder',"不可以为空哦!");
            spanInfo[0].style.display = "inline-block"
        }
        if(changeJson['ps'] == "0") {
            userCount.setAttribute('placeholder',"不可以为空哦!");
            spanInfo[1].style.display = "inline-block";
        }
    } else if (changeJson['ct'] == "0" || changeJson['pt'] == "0")  {
        userCount.setAttribute('placeholder',"请重新输入!");
        spanInfo[0].style.display = "inline-block";
        spanInfo[1].style.display = "inline-block";
    }
}