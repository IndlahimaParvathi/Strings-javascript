document.getElementById("btnCheck").addEventListener("click", function () {
    debugger;
    var email = document.getElementById("txtEmail").value
    if (email.includes("@") && email.includes('.')) {
        document.getElementById("pResult").innerHTML = "Email is valid"
    }
    else {
        document.getElementById("pResult").innerHTML = "In valid Email"
    }



});