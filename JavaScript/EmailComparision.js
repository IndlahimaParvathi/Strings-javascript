document.getElementById("btnCompare").addEventListener("click",function(){
debugger;
var email=document.getElementById("txtEmail").value

if(email=="himaindla23@gmail.com"){
    document.getElementById("pResult").innerHTML= "Login Sucessfully"
}
else{
   document.getElementById("pResult").innerHTML= "Not Login"
 
}

});