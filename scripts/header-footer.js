const toggleButton = document.querySelector(".toggle-button");
const toggleButtonIcon = document.querySelector(".toggle-button i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleButton.onclick = function () {
  toggleButtonIcon.classList.toggle("fa-times");
  dropDownMenu.classList.toggle("open");
};