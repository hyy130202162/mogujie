//免密登录-------------------------------------------------------------
var mmsjh = document.querySelector(".mmsjh");
var yz = document.querySelector(".yz");
yz.onclick = function(){
	var qwe =/^\d{11}$/;
	if(!qwe.test(mmsjh.value)){
		alert("请写入正确的手机号");
	}
}
//免密登录中删除按钮-----------------------------
var clear = document.querySelector(".mmspa");
var mmsjh = document.querySelector(".mmsjh");
mmsjh.onfocus = function(){
    clear.innerHTML = "&#xe66f;";  
}
clear.onclick = function(){
    mmsjh.value = "";
    clear.innerHTML = "";
}