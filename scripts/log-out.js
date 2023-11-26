function openReturnConfirmationModal() {
  document.getElementById("returnConfirmationModal").style.display = "flex";
}

function closeReturnConfirmationModal() {
  document.getElementById("returnConfirmationModal").style.display = "none";
}

function confirmReturn() {
  localStorage.removeItem('nim')
  localStorage.removeItem('email')
  localStorage.removeItem('faculty')
  localStorage.removeItem('major')
  localStorage.removeItem('password')
  localStorage.removeItem('confirmPassword')
  closeReturnConfirmationModal();

  window.location.reload();

  window.location.href = "index.html";
}
