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