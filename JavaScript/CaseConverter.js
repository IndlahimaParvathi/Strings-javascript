document.getElementById("btnUpperCase").addEventListener("click",function(){
    debugger;
    var name=document.getElementById("txtName").value
    document.getElementById("pResult").innerHTML=name.toUpperCase();



});

    document.getElementById("btnLowerCase").addEventListener("click",function(){
    debugger;
    var name=document.getElementById("txtName").value
    document.getElementById("pResult").innerHTML=name.toLowerCase();

});

document.getElementById("btnTrim").addEventListener("click",function(){
    debugger;
    var name=document.getElementById("txtName").value
    document.getElementById("pResult").innerHTML=name.trim();

});

document.getElementById("btnTrimStart").addEventListener("click",function(){
    debugger;
    var name=document.getElementById("txtName").value
    document.getElementById("pResult").innerHTML=name.trimStart();

});


document.getElementById("btnTrimEnd").addEventListener("click",function(){
    debugger;
    var name=document.getElementById("txtName").value
    document.getElementById("pResult").innerHTML=name.trimEnd();

});