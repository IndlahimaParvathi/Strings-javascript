document.getElementById("btnSubmit").addEventListener("click",function(){
    debugger;
    var sentances=document.getElementById("txtSentences").value;
     var Word=document.getElementById("txtWord").value;
     var replaceWord=document.getElementById("txtReplaceWord");
     document.getElementById("pResult").innerHTML=inputTest.replaceAll(Word,replaceWord);
});



