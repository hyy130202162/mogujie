//QQ登录页的下拉框-----------------------------------------------------
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
//-----------------------------------------
var clear1 = document.querySelector(".qqaspa1");
var clear2 = document.querySelector(".qqaspa2");
var qqinp1 = document.querySelector(".qqinp1");
var qqinp2 = document.querySelector(".qqinp2");
var qqgo = document.querySelector(".go");
//---------QQ登录页中登录框内容的清除按钮-----------------------------
qqinp1.onfocus = function(){
    clear1.innerHTML = "x";  
}
qqinp2.onfocus = function(){
    clear2.innerHTML = "x"; 
}
//清除搜索框中的内容------------------------------
clear1.onclick = function(){
    qqinp1.value = "";
    clear1.innerHTML = "";
}
clear2.onclick = function(){
    qqinp2.value = ""; 
    clear2.innerHTML = "";   
}
// QQ登录页的正则条件------------------------------------------------
qqinp1.onblur = function(){
    var str1 = qqinp1.value.trim();    
    if(str1.length==0){    
        alert('你还没有输入账号');
    } else{
    	var reg=/^[a-zA-Z0-9_]+$/;
    	var was=/^[0-9_]+$/;   
        if(!reg.test(str1)){
        	alert("请输入正确的账号");
        }
         if(!was.test(str1)){
        	str1+="@qq.com";
        	console.log(str1);
        	qqinp1.value = str1;
        }
    }
}
qqinp2.onblur = function(){
    var str2 = qqinp2.value;    
    if(str2.length==0){    
        alert('你还没有输入密码');
    }        
}

