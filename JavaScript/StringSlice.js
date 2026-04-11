  document.getElementById("btnSlice").addEventListener("click",function(){
    debugger;
    var name=document.getElementById("txtName").value
    var startnumber=document.getElementById("txtStartNumber").value
      var Endnumber=document.getElementById("txtEndNumber").value
    document.getElementById("pResult").innerHTML=name.slice(-1);
  });