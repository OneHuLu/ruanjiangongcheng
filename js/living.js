
function tabChange() {
 //   获取左侧tab
 let  leftTab = document.getElementById('leftTab');
 let  li = leftTab.getElementsByTagName('li');
 //获取右侧tab
 let rightTab = document.getElementById('rightTab');
 let div = rightTab.getElementsByTagName('div');
 //实现关联
 let  lastIndex = 0;
 // let CurIndex;
 for (let i = 0; i < li.length; i++) {
     li[i].CurIndex = i;
     li[i].onclick = function () {
         if(this.CurIndex === lastIndex)  return;
         div[lastIndex].className="hidde";
         div[this.CurIndex].className = 'tabChange';
         lastIndex = this.CurIndex;
     }
 }
}
tabChange();