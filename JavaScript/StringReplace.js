document.getElementById("btnSubmit").addEventListener("click",function(){
    debugger;
    var inputTest=document.getElementById("txtInputTest").value;
     var replaceWord=document.getElementById("txtReplaceWord").value;
     document.getElementById("pResult").innerHTML=inputTest.replaceAll("hima",replaceWord);
});



