var pricepaixu = document.querySelector(".pricepaixu");
var pricequjian = document.querySelector("#pricequjian");
pricepaixu.onclick = function(){
	var i = pricequjian.style.display;
	if(i=="none"){
		pricequjian.style.display = "block";
		pricepaixu.style.color = "#ff0036";
		pricequjian.style.color = "#5e5e5e";

	} else{
		pricequjian.style.display = "none";
		pricepaixu.style.color = "#5e5e5e";
	}
}