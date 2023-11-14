const books = [
  {
    id: "1",
    img: "./assets/book-image-1.png",
    writer : "Mitch Albom",
    title : "Tuesdays with Morrie",
    rating : "4.5",
    genre: ["Biography"],
  },
  {
    id: "2",
    img: "./assets/book-image-2.png",
    writer : "Tere Liye",
    title : "Yang Telah Lama Pergi",
    rating : "4.3",
    genre: ["Fantasy", "Action"],
  },
  {
    id: "3",
    img: "./assets/book-image-3.png",
    writer : "Wilkie Collins",
    title : "English Classics: Woman in White",
    rating : "4.5",
    genre: ["Mystery"],
  },
  {
    id: "4",
    img: "./assets/book-image-4.png",
    writer : "Matt Ridley",
    title : "How Innovation Work",
    rating : "4.5",
    genre: ["Business"],
  },
  {
    id: "5",
    img: "./assets/book-image-5.png",
    writer : "Benjamin Graham",
    title : "The Intelligent Investor",
    rating : "4.5",
    genre: ["Businnes"],
  },
  {
    id: "6",
    img: "./assets/book-image-6.png",
    writer : "Junissa Bianda",
    title : "Kareem, Khaleel, and The Missing Kufi",
    rating : "4.5",
    genre: ["Cartoon"],
  },
  {
    id: "7",
    img: "./assets/book-image-7.png",
    writer : "Malcolm Gladwell",
    title : "Outliers",
    rating : "4.5",
    genre: ["Psychology"],
  },
  {
    id: "8",
    img: "./assets/book-image-8.png",
    writer : "Mugglenet",
    title : "Unofficial Harry Potter Reference Library : The Unofficial",
    rating : "4.5",
    genre: ["Fantasy", "Action"],
  },
  {
    id: "9",
    img: "./assets/book-image-9.png",
    writer : "Ayra Sirait",
    title : "The Line Between Loss & Wonders",
    rating : "4.5",
    genre: ["Fantasy"],
  },
  {
    id: "10",
    img: "./assets/book-image-10.png",
    writer : "Adam Grant",
    title : "Think Again: The Power Of Knowing What You Don`T Know",
    rating : "4.5",
    genre: ["Psychology"]
  },
  {
    id: "11",
    img: "./assets/book-image-11.png",
    writer : "James Rallison",
    title : "The Odd 1S Out: The First Sequel",
    rating : "4.5",
    genre: ["Cartoon"]
  },
  {
    id: "12",
    img: "./assets/book-image-12.png",
    writer : "Addin Jauharudin",
    title : "Beware Worn Down by Time",
    rating : "4.5",
    genre: ["Literature"]
  },
]

const container = document.getElementById('bookContainer');

function createBookCard(book) {
  const card = document.createElement('div');
  card.classList.add('book-card');

  const img = document.createElement('img');
  img.classList.add('book-img');
  img.src = book.img;
  img.alt = book.title;

  const details = document.createElement('div');
  details.classList.add('book-details');

  const title = document.createElement('div');
  title.classList.add('book-title');
  title.textContent = book.title;

  const writer = document.createElement('div');
  writer.classList.add('book-writer');
  writer.textContent = `By ${book.writer}`;

  const genre = document.createElement('div');
  genre.classList.add('book-genre');
  genre.textContent = `Genre: ${book.genre.join(', ')}`;

  const rating = document.createElement('div');
  rating.classList.add('book-rating');
  rating.textContent = `Rating: ${book.rating}`;

  details.appendChild(title);
  details.appendChild(writer);
  details.appendChild(genre);
  details.appendChild(rating);

  card.appendChild(img);
  card.appendChild(details);

  container.appendChild(card);
}

// Function to display books



// Assuming your books array is defined in books.js
// If not, make sure to include the books data here or import it

// Reference to the container where content will be added
const searchInput = document.querySelector('.section-1 input[type="text"]');

function renderBooks() {
  const categoryFilter = document.getElementById('categoryFilter').value;
  const genreFilter = document.getElementById('genreFilter').value;
  const ratingFilter = document.getElementById('ratingFilter').value;
  const sortFilter = document.getElementById('sortFilter').value;
  const searchTerm = searchInput.value.toLowerCase();

  // Filter the books based on selected criteria and search term
  let filteredBooks = books.filter(book => {
    const matchesCategory = categoryFilter === 'All' || book.genre.includes(categoryFilter);
    const matchesGenre = genreFilter === 'All' || book.genre.includes(genreFilter);
    const matchesRating = ratingFilter === 'All' || parseFloat(book.rating) >= parseFloat(ratingFilter);
    const matchesSearch = book.title.toLowerCase().includes(searchTerm) || book.writer.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesGenre && matchesRating && matchesSearch;
  });

  // Sort the filtered books
  if (sortFilter === 'Title') {
    filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortFilter === 'Rating') {
    filteredBooks.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
  }

  // Call a function to display the filtered books
  displayBooks(filteredBooks);
}

// Function to display books
function displayBooks(books) {
  container.innerHTML = '';

  if (books.length === 0) {
    const notFoundMessage = document.createElement('div');
    notFoundMessage.classList.add('not-found-message');
    notFoundMessage.textContent = 'Sorry Not Found';
    container.appendChild(notFoundMessage);
  } else {
    books.forEach(createBookCard);
  }
}

// Initial render
renderBooks();

// Add event listeners to trigger the filter when the user changes selection
document.getElementById('categoryFilter').addEventListener('change', renderBooks);
document.getElementById('genreFilter').addEventListener('change', renderBooks);
document.getElementById('ratingFilter').addEventListener('change', renderBooks);
document.getElementById('sortFilter').addEventListener('change', renderBooks);

// Add event listener for the search input
searchInput.addEventListener('input', renderBooks);

