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
// QQ登录页的正则条件------------------------------------------------
var qqinp1 = document.querySelector(".qqinp1");
var qqinp2 = document.querySelector(".qqinp2");
var qqgo = document.querySelector(".go");
// qqinp1.onfocus = function(){
// 	var ann = document.createElement('button');
// 	ann.innerHTML = "X"
// 	qqinp1.value = "";
// 	qqinp1.appendChild(ann);
// 	ann.style = "float:right;"
// }        
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

//免密登录-------------------------------------------------------------
var mmsjh = document.querySelector(".mmsjh");
var yz = document.querySelector(".yz");
yz.onclick = function(){
	var qwe =/^\d{11}$/;
	if(!qwe.test(mmsjh.value)){
		alert("请写入正确的手机号");
	}
}

