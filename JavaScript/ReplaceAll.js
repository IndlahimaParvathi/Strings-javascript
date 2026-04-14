document.getElementById("btnSubmit").addEventListener("click",function(){
    debugger;
    var sentances=document.getElementById("txtSentences").value;
     var Word=document.getElementById("txtWord").value;
     var replaceAll=document.getElementById("txtReplaceAll").value;
     document.getElementById("pResult").innerHTML=sentances.replaceAll(Word,replaceAll);
});



