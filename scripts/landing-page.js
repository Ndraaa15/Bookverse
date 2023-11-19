// script.js
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const bookContainer = document.getElementById("bookContainer");

const imageUrls = [
  "./assets/image1-section-3.png",
  "./assets/image2-section-3.png",
  "./assets/image3-section-3.png",
];

let currentImageIndex = 0;

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
  showImage(currentImageIndex);
}

function showImage(index) {
  bookContainer.innerHTML = ""; // Clear previous content

  const img = document.createElement("img");
  img.src = imageUrls[index];
  img.classList.add("book", "active");
  bookContainer.appendChild(img);
}

prevBtn.addEventListener("click", () => {
  currentImageIndex =
    (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
  showImage(currentImageIndex);
});

nextBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
  showImage(currentImageIndex);
});

// Automatic slide every 2 seconds
setInterval(() => {
  nextImage();
}, 3000);

// Initial display
showImage(currentImageIndex);
