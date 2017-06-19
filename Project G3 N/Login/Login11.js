
function rd(n,m){
    var c = m-n+1;  
    return Math.floor(Math.random() * c + n);
}
var n = 1000;
var m = 9999;
var C;
var D;
function free()
{
	D=(rd(n,m));
    C=(rd(n,m));
	alert("username:"+ C + "\npassword:"+D);
}
function Getin()
{
    var Rname=document.getElementById("name111").value;
	var Rpass=document.getElementById("password").value;
	if(C== Rname&&D==Rpass) 
	{
		window.open("MainPage.html"); 
	}
	else alert("Mistake");
}