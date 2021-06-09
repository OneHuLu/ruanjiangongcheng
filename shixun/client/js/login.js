/**
 * 输入框判空函数
 * @param id
 */
function  inputNullCheck(id) {
    let inputId = document.getElementById(id);
    if(inputId.value == "") {
        inputId.setAttribute('placeholder','不可以为空');
    }
}
