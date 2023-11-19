const toggleButton = document.querySelector(".toggle-button");
const toggleButtonIcon = document.querySelector(".toggle-button i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleButton.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleButtonIcon.classList = isOpen
    ? "fa-solid fa-times"
    : "fa-solid fa-bars";
};


const email = localStorage.getItem("email");
const isUserLoggedIn = email == null ? false : true;

const buttonHeader = document.querySelector(".button-header");
const iconHeader = document.querySelector(".icon-header");
const loggedin = document.querySelectorAll(".logged-in");

const dropDownLogin = document.querySelector(".btn-login-dropdown");
const dropDownSignUp = document.querySelector(".btn-signup-dropdown");
dropDownMenu.style.transition = "height .2s cubic-bezier(0.075, 0.82, 0.165, 1)";
if (isUserLoggedIn) {
  loggedin.forEach((element) => {
    element.style.display = "flex";
  });
  dropDownLogin.style.display = "none";
  dropDownSignUp.style.display = "none";
  buttonHeader.style.display = "none";
} else {
  loggedin.forEach((element) => {
    element.style.display = "none";
  });
  iconHeader.style.display = "none";
}