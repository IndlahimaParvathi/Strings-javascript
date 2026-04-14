document.getElementById("btnCheck").addEventListener("click", function () {
    debugger;
    var websiteName = document.getElementById("txtWebsiteName").value
    if (websiteName.startsWith('http')) {
        document.getElementById('pResult').innerHTML = 'It is Secured Website'
    }
    else {
        document.getElementById('pResult').innerHTML = 'It not is Secured Website'
    }
});
