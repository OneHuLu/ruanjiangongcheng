/**
 * 输入框判空函数
 * @param id
 */
function  inputNullCheck(id,jsonState) {
    let inputId = document.getElementById(id);
    let state = true;
    if(inputId.value == "") {
        inputId.setAttribute('placeholder','不可以为空');
    }
}

function checkBut() {
    let userCount = document.getElementById('userCount');
}
