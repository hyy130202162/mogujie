//免密登录-------------------------------------------------------------
var mmsjh = document.querySelector(".mmsjh");
var yz = document.querySelector(".yz");
yz.onclick = function(){
	var qwe =/^\d{11}$/;
	if(!qwe.test(mmsjh.value)){
		alert("请写入正确的手机号");
	}
}
