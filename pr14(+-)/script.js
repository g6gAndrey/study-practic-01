let rvLogin = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/
let rvPassword = /(?=.*[0-9])(?=.*[!@#$%?^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^?&*]{5,}/g
let errorMessage = [];
document.querySelector("#enter").addEventListener("click", () => {
    errorMessage = [];
    if (!rvLogin.test(document.querySelector("#login").value)) {
        document.querySelector("#login").value = "";
        document.querySelector("#login").style.backgroundColor = "red";
        errorMessage.push("Некорректный логин.");
    }
    else {
        document.querySelector("#login").style.backgroundColor = "white";
    }
    //

    if (!rvPassword.test(document.querySelector("#password").value)) {
        document.querySelector("#password").value = "";
        document.querySelector("#password").style.backgroundColor = "red";
        errorMessage.push("Некорректный пароль.");
    }
    else {
        document.querySelector("#password").style.backgroundColor = "white";
    }
    //
    if (errorMessage.length) {
        let str = "";
        errorMessage.forEach(error => {
            str += error + "\n";
        });
        alert(str);
    }
    else {
        let accIsFined = false;
        [
            { login: 'Andrey', pass: 'Kondratov123?' },
            { login: 'Masha', pass: 'Kondratov123?' },
            { login: 'Kasha', pass: 'Kondratov123?' },
            { login: 'Sasha', pass: 'Kondratov123?' },
        ].forEach(acc => {
            if (acc.login == document.querySelector("#login").value && acc.pass == document.querySelector("#password").value) accIsFined = true;
        })
        if (accIsFined) alert("All is good")
        else {
            alert("Account is not fined");
            document.querySelector("#password").value = "";
            document.querySelector("#password").style.backgroundColor = "red";
        }
    }

})