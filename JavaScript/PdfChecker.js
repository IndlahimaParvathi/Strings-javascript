document.getElementById("btnFind").addEventListener("click",function(){
    debugger;
  var fileName=document.getElementById("txtFileName").value
  if(fileName.endsWith('.doc')){
    document.getElementById('pResult').innerHTML= 'It is PDF'
  }
  else{
    document.getElementById('pResult').innerHTML= 'It not is PDF'
  }

  });