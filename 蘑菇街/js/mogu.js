//轮播图-----------------------------------------
var nav = document.querySelector("#pic");
var pic = document.querySelectorAll("#pic img");
var dot = document.querySelectorAll(".dot");
var index = 0;
var len = pic.length;
hide(0);
function hide(a){
	for(var i = 0;i<len;i++){	
		pic[i].style.display = "none";
		dot[i].style.background = "white";
	}
	pic[a].style.display = "block";
	dot[a].style.background = "red";
}
time()
function time(){
	setInterval(function(){
		index++;
		if(index>=len){
			index = 0;
		}
		hide(index)
	},1000)
}
//倒计时--------------
timer()
function timer(){
	var hour = document.querySelector("time .hour");
	var minutes = document.querySelector("time .minutes");
	var seconds = document.querySelector("time .seconds");
	var mydate = new Date();
	var youdate = new Date("2018/03/15");
	var asd = mydate.getTime();
	var qwe = youdate.getTime();
	var cha = qwe - asd;
	var a = 1000;
	var ma = 60*a;
	var ha = 60*ma;
	var da = 24*ha;
	var d = parseInt(cha/da);
	var h = parseInt(cha%da/ha);
	var m = parseInt(cha%da%ha/ma);
	var s = parseInt(cha%da%ha%ma/a);
	if(h<10){
		h = "0"+h;
	}
	if(m<10){
		m = "0"+m;
	}
	if(s<10){
		s = "0" +s;
	}
	hour.innerHTML = h;
	minutes.innerHTML = m;
	seconds.innerHTML = s;	
}	
setInterval(timer,1000);
//出现搜索的遮罩层---------------------------------
var inp = document.querySelector("#search input");
var zzsearch = document.querySelector("#zzsearch");
var close = document.querySelector("#zzsearch .top .left");
var inpt = document.querySelector("#zzsearch .top .center")
inp.onclick = function(){
	zzsearch.style.display = "block";
	inpt.style.borderColor = "#ff0036";
}
close.onclick = function(){
	zzsearch.style.display = "none";
}




