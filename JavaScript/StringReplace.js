document.getElementById("btnSubmit").addEventListener("click",function(){
    debugger;
    var inputTest=document.getElementById("txtInputTest").value;
     var replaceTest=Number(document.getElementById("txtReplaceValue").value);
     document.getElementById("pResult").innerHTML=(inputTest +"\n").replace(replaceTest);
});