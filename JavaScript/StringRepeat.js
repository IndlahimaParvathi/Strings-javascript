document.getElementById("btnSubmit").addEventListener("click",function(){
    debugger;
    var inputTest=document.getElementById("txtInputTest").value;
     var repeatTest=Number(document.getElementById("txtRepeatTest").value);
     document.getElementById("pResult").innerHTML=(inputTest +"\n").repeat(repeatTest);
});