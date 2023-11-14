function saveAndRedirect() {
    var name = document.getElementById("name").value;
    var nim = document.getElementById("nim").value;
    var email = document.getElementById("email").value;
    var faculty = document.getElementById("faculty").value;
    var major = document.getElementById("major").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    var user = {
        name: name,
        nim: nim,
        email: email,
        faculty: faculty,
        major: major,
        password: password,
        confirmPassword: confirmPassword,
    };

    localStorage.setItem("user", JSON.stringify(user));

    window.location.href = "login.html";

    return true;
}
