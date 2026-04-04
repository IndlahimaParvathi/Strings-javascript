  document.getElementById("btnCompare").addEventListener("click",function(){
    debugger;
    var name=document.getElementById("txtName").value
    document.getElementById("pResult").innerHTML=name.slice(2,6);
  });