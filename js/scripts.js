function testIfEmpty() {
    var login, email, textmessage;
    login = document.getElementById("name").value;
    email = document.getElementById("email").value;
    textmessage = document.getElementById("message").value;

    if (login.trim() == "" || email.trim() == "" || textmessage.trim() == "") {
        document.getElementById("submitbutton").disabled = true;
    } else {
        document.getElementById("submitbutton").disabled = false;
    }
    
    return login.trim() == "" || email.trim() == "" || textmessage.trim() == "";
}

function testName() {
    var name, pattern;
    name = document.getElementById("name").value;
    pattern = new RegExp("^([A-Za-z ]{2,30})$");
    console.log(pattern.test(name));
    
    return pattern.test(name);
}

function testEmail() {
    var email, pattern;
    email = document.getElementById("email").value;
    pattern = new RegExp("^[^\s]([A-Za-z0-9_.]{2,20})@([A-Za-z0-9]{2,20}).([a-z]{2,13})$");
    
    return pattern.test(email);

}

function checkFields() {
    
    if (!testName()) {
        alert("Login must contain only letters and spaces and can't be longer than 30 chars!")
        return false;

    } if (!testEmail()) {
        alert("Wrong email!");
        return false;
    }
    alert("Message has been sent!");
    return true;
}