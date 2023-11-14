function openPaymentModal() {
  document.getElementById("paymentModal").style.display = "flex";
}

function closePaymentModal() {
  document.getElementById("paymentModal").style.display = "none";
}

function submitPayment() {
  // Placeholder for your payment submission logic
  // Assuming the payment is successful, update the book details
  updateBookDetails();
  alert("Payment submitted successfully!");
  closePaymentModal();
}

function updateBookDetails() {
  // Update the loan status and change the button text
  var loanStatus = document.querySelector(".detail-loan p");
  var returnButton = document.querySelector(".return");
  var penaltyButton = document.querySelector(".penalty");

  // Assuming 'returnedDate' is the date when the book is returned
  var returnedDate = new Date();
  returnedDate.setDate(returnedDate.getDate()); // Assuming it's returned after 3 days

  loanStatus.textContent = "Returned " + formatDate(returnedDate);
  returnButton.textContent = "Already Returned";
  returnButton.classList.add("disabled"); // Optionally add a disabled class
  returnButton.disabled = true; // Optionally disable the button

  // Hide the "Penalty" button
  if (penaltyButton) {
    penaltyButton.style.display = "none";
  }
}

function formatDate(date) {
  var day = date.getDate();
  var month = date.toLocaleString('en-us', { month: 'short' });
  var year = date.getFullYear();
  return `${day} ${month} ${year}`;
}