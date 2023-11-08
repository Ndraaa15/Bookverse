const toggleButton = document.querySelector(".toggle-button");
const toggleButtonIcon = document.querySelector(".toggle-button i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleButton.onclick = function () {
  dropDownMenu.classList.toggle('open')
  const isOpen  = dropDownMenu.classList.contains('open')

  toggleButtonIcon.classList = isOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'

}