function authenticate() {
  var storedUser = localStorage.getItem("email");

  if (!storedUser) {
    alert("User not found. Please sign up first.");
    return false;
  }

  var enteredUsernameOrEmail = document.getElementById("email").value;
  var enteredPassword = document.getElementById("password").value;

  var storedEmail = localStorage.getItem("email");
  var storedPassword = localStorage.getItem("password");

  if (
    enteredUsernameOrEmail == storedEmail &&
    enteredPassword == storedPassword
  ) {
    window.location.href = "books.html";
    return true;
  } else {
    alert("Invalid email or password. Please try again.");
    return false;
  }
}