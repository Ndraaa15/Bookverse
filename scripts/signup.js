function saveAndRedirect(event) {
    var name = document.getElementById("name").value;
    var nim = document.getElementById("nim").value;
    var email = document.getElementById("email").value;
    var faculty = document.getElementById("faculty").value;
    var major = document.getElementById("major").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password.length < 8) {
        event.preventDefault();
        alert("Password must be at least 8 characters long.");
        return;
    }

    if (password !== confirmPassword) {
        event.preventDefault();
        alert("Passwords do not match.");
        return;
    }


    localStorage.setItem("name", name);
    localStorage.setItem("nim", nim);
    localStorage.setItem("email", email);
    localStorage.setItem("faculty", faculty);
    localStorage.setItem("major", major);
    localStorage.setItem("password", password);

    window.location.href = "login.html";
    console.log(window.location.href);

    return true;
}
