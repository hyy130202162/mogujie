var control = document.querySelector(".control");
var con = document.querySelector(".con");
var lose = document.querySelectorAll(".lose");
control.onclick = function(){
	control.style.display = "none";
	con.style.display = "block";
	for(var i = 0;i<lose.length;i++){
		lose[i].style.display = "block";
	}
}
con.onclick = function(){
	control.style.display = "block";
	con.style.display = "none";
	for(var i = 0;i<lose.length;i++){
		lose[i].style.display = "none";
	}
	
}
