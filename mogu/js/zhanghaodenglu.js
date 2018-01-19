//账号登录中删除按钮-----------------------------------
var clear1 = document.querySelector(".zhspa1");
var clear2 = document.querySelector(".zhspa2");
var zhinp1 = document.querySelector(".zhinp1");
var zhinp2 = document.querySelector(".zhinp2");
zhinp1.onfocus = function(){
    clear1.innerHTML = "&#xe66f;";  
}
zhinp2.onfocus = function(){
    clear2.innerHTML = "&#xe66f;"; 
}
//清除搜索框中的内容------------------------------
clear1.onclick = function(){
    zhinp1.value = "";
    clear1.innerHTML = "";
}
clear2.onclick = function(){
    zhinp2.value = ""; 
    clear2.innerHTML = "";   
}
