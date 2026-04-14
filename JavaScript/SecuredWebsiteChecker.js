document.getElementById("btnFind").addEventListener("click",function(){
    debugger;
  var fileName=document.getElementById("txtFileName").value
  if(fileName.endsWith('http')){
    document.getElementById('pResult').innerHTML= 'It is Secured Website Checker'
  }
  else{
    document.getElementById('pResult').innerHTML= 'It not is Secured Website Checker'
  }

  });
