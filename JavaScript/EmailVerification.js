document.getElementById("btnCheck").addEventListener("click", function () {
    debugger;
    var email = document.getElementById("txtEmail").value
    if (email.includes("@") && email.includes('.')) {
        document.getElementById("").innerHTML = "Email is valid"
    }
    else {
        document.getElementById("").innerHTML = "In valid Email"
    }



});