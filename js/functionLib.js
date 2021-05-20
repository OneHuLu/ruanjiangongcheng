/**
 * 创建xml
 * @returns {XMLHttpRequest}
 */
function  createXml() {
    let xmlhttp;
    if(window.XMLHttpRequest) {
        xmlhttp = new window.XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("MicrosoftXMLHttp");
    }
    return xmlhttp;
}

/**
 *
 * @param method
 * @param url
 * @param async
 * @returns {(mime: string) => void}
 */

function getValue(method,url,async) {
    let xmlhttp = createXml();
    xmlhttp.open(method,url,async);
    xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let res = xmlhttp.responseText;
            return res;
        }
    }
    xmlhttp.send();
    console.log(xmlhttp.onreadystatechange());
    return xmlhttp.onreadystatechange;
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
        return unescape(r[2]);
    }
    return null;
}