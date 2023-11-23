function saveAndRedirect(event) {
    var name = document.getElementById("name").value;
    var nim = document.getElementById("nim").value;
    var email = document.getElementById("email").value;
    var faculty = document.getElementById("faculty").value;
    var major = document.getElementById("major").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    console.log(name);
    console.log(nim);
    console.log(email);
    console.log(faculty);
    console.log(major);

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }


    localStorage.setItem("name", name);
    localStorage.setItem("nim", nim);
    localStorage.setItem("email", email);
    localStorage.setItem("faculty", faculty);
    localStorage.setItem("major", major);
    localStorage.setItem("password", password);

    return true;
}
