function openReturnConfirmationModal() {
  document.getElementById("returnConfirmationModal").style.display = "flex";
}

function closeReturnConfirmationModal() {
  document.getElementById("returnConfirmationModal").style.display = "none";
}

function confirmReturn() {
  // Placeholder for your return confirmation logic
  // If confirmed, you can proceed with the return process
  updateBookDetails()
  closeReturnConfirmationModal();
}

function updateBookDetails() {
  // Update the loan status and change the button text
  var loanStatus = document.querySelector(".detail-loan p");
  var penaltyButton = document.querySelector(".penalty");
  var returnButton = document.querySelector(".return");

  // Assuming 'returnedDate' is the date when the book is returned
  var returnedDate = new Date();
  returnedDate.setDate(returnedDate.getDate()); // Assuming it's returned after 3 days

  loanStatus.textContent = "Returned " + formatDate(returnedDate);
  penaltyButton.textContent = "Already Returned";
  penaltyButton.classList.add("disabled"); // Optionally add a disabled class
  penaltyButton.disabled = true; // Optionally disable the button

  // Hide the "Penalty" button
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