//遮罩层------------------------------
var cover = document.querySelector("#zz");
var open = document.querySelector(".nav");
var close = document.querySelector(".close");
open.onclick = function(){
	cover.style.display = "block"
}
close.onclick = function(){
	cover.style.display = "none"
}
//收藏
var sc = document.querySelector(".le1");
sc.onclick = function(){
	alert("请先登录或注册");
}
// 加入购物车 立即购买，跳出尺码选择
var jrche = document.querySelector(".ri1");
var lj = document.querySelector(".ri2");
var chima = document.querySelector("#price-color");
var close = document.querySelector("#price-color .close");
var close2 = document.querySelector("#price-color .deper");
jrche.onclick = function(){
	chima.style.display = "block";
}
lj.onclick = function(){
	chima.style.display = "block";
}
close.onclick = function(){
	chima.style.display = "none";
}
close2.onclick = function(){
	chima.style.display = "none";
}
// 选择尺码 跳出尺码框
var choice = document.querySelector("#choice");
choice.onclick = function(){
	chima.style.display = "block";
}