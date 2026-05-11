  document.getElementById("btnSubString").addEventListener("click",function(){
    
    var name=document.getElementById("txtName").value
    var startnumber=document.getElementById("txtStartNumber").value
      var Endnumber=document.getElementById("txtEndNumber").value
    document.getElementById("pResult").innerHTML=name.substring(startnumber,Endnumber);
  });