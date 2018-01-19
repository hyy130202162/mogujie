//找回密码中删除按钮-----------------------------
var clear = document.querySelector(".zhaohuispa");
var sjh = document.querySelector(".zhaohuisjh");
sjh.onfocus = function(){
    clear.innerHTML = "&#xe66f;";  
}
clear.onclick = function(){
  	sjh.value = "";
    clear.innerHTML = "";
}
//找回密码-------------------------------------------------------------
sjh.onblur = function(){
	var qwe =/^\d{11}$/;
	if(!qwe.test(sjh.value)){
		alert("请写入正确的手机号");
	}
}