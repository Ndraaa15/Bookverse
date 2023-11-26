function openReturnConfirmationModal() {
  document.getElementById("returnConfirmationModal").style.display = "flex";
}

function closeReturnConfirmationModal() {
  document.getElementById("returnConfirmationModal").style.display = "none";
}

function confirmAddToCart() {
  document.getElementById('confirmAdd').addEventListener('click', function () {
    alert('Book successfully added to the cart!');
    closeReturnConfirmationModal();
  });
}
