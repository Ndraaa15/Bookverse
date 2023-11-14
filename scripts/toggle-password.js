function togglePasswordVisibility() {
  var passwordInput = document.getElementById('password');
  var toggleIcon = document.querySelector('.toggle-password');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleIcon.src = './assets/open-password.png'; // Change to the path of your closed-eye icon
  } else {
    passwordInput.type = 'password';
    toggleIcon.src = './assets/closed-password.png'; // Change to the path of your open-eye icon
  }
}

function toggleConfirmPasswordVisibility() {
  var passwordInput = document.getElementById('confirmPassword');
  var toggleIcon = document.querySelector('.toggle-confirm-password');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleIcon.src = './assets/open-password.png'; // Change to the path of your closed-eye icon
  } else {
    passwordInput.type = 'password';
    toggleIcon.src = './assets/closed-password.png'; // Change to the path of your open-eye icon
  }
}