function openReturnConfirmationModal() {
  document.getElementById("returnConfirmationModal").style.display = "flex";
}

function closeReturnConfirmationModal() {
  document.getElementById("returnConfirmationModal").style.display = "none";
}

function confirmReturn() {
  updateBookDetails()
  closeReturnConfirmationModal();
}

function updateBookDetails() {
  var loanStatus = document.querySelector(".detail-loan p");
  var penaltyButton = document.querySelector(".penalty");
  var returnButton = document.querySelector(".return");

  var returnedDate = new Date();
  returnedDate.setDate(returnedDate.getDate()); 

  loanStatus.textContent = "Returned " + formatDate(returnedDate);
  penaltyButton.textContent = "Already Returned";
  penaltyButton.classList.add("disabled"); 
  penaltyButton.disabled = true; 

  if (returnButton) {
    returnButton.style.display = "none";
  }
}

function formatDate(date) {
  var day = date.getDate();
  var month = date.toLocaleString('en-us', { month: 'short' });
  var year = date.getFullYear();
  return `${day} ${month} ${year}`;
}