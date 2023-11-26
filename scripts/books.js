const books = [
  {
    id: "1",
    img: "./assets/book-image-1.png",
    writer : "Mitch Albom",
    title : "Tuesdays with Morrie",
    rating : "4.0",
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
    rating : "4.0",
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
    rating : "4.0",
    genre: ["Psychology"]
  },
  {
    id: "11",
    img: "./assets/book-image-11.png",
    writer : "James Rallison",
    title : "The Odd 1S Out: The First Sequel",
    rating : "4.0",
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

  // Image Container
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('book-img-container');

  const img = document.createElement('img');
  img.classList.add('book-img');
  img.src = book.img;
  img.alt = book.title;

  imgContainer.appendChild(img);

  // Details Container
  const detailsContainer = document.createElement('div');
  detailsContainer.classList.add('book-details-container');

  const title = document.createElement('div');
  title.classList.add('book-title');
  title.textContent = book.title;

  const writer = document.createElement('div');
  writer.classList.add('book-writer');
  writer.textContent = `By ${book.writer}`;

  const genre = document.createElement('div');
  genre.classList.add('book-genre');
  genre.textContent = `${book.genre.join(', ')}`;

  detailsContainer.appendChild(title);
  detailsContainer.appendChild(writer);
  detailsContainer.appendChild(genre);

  // Footer Container
  const footerContainer = document.createElement('div');
  footerContainer.classList.add('book-footer');
  footerContainer.style.display = 'flex';
  footerContainer.style.justifyContent = 'space-between';
  footerContainer.style.alignItems = 'center';
  footerContainer.style.alignContent = 'center';
  

  const ratingContainer = document.createElement('div');
  ratingContainer.classList.add('book-rating-container');
  ratingContainer.style.display = 'flex';
  ratingContainer.style.gap = '0.5rem';

  const rating = document.createElement('div');
  rating.classList.add('book-rating');
  rating.textContent = `${book.rating}`;

  const starImg = document.createElement('img');
  starImg.src = './assets/star-icon.png';
  starImg.alt = 'More';

  ratingContainer.appendChild(starImg);
  ratingContainer.appendChild(rating);

  const moreContainer = document.createElement('div');
  moreContainer.classList.add('book-more-container');
  moreContainer.style.display = 'flex';
  moreContainer.style.gap = '0.5rem';

  const moreLink = document.createElement('a');
  moreLink.href = '#';
  moreLink.classList.add('book-more');
  moreLink.textContent = 'More';
  moreLink.style.textDecoration = 'none';
  moreLink.style.color = '#C2C2C2';

  const moreImg = document.createElement('img');
  moreImg.src = './assets/more-icon.png';
  moreImg.alt = 'More';
  moreImg.style.width = '1.5rem';

  moreContainer.appendChild(moreLink);
  moreContainer.appendChild(moreImg);

  footerContainer.appendChild(ratingContainer);
  footerContainer.appendChild(moreContainer);

  // Append to Card
  card.appendChild(imgContainer);
  card.appendChild(detailsContainer);
  card.appendChild(footerContainer);

  // Append to Container
  container.appendChild(card);
}


const searchInput = document.querySelector('.section-1 input[type="text"]');

function renderBooks() {
  const genreFilter = document.getElementById('genreFilter').value;
  const ratingFilter = document.getElementById('ratingFilter').value;
  const sortFilter = document.getElementById('sortFilter').value;
  const searchTerm = searchInput.value.toLowerCase();

  let filteredBooks = books.filter(book => {
    const matchesGenre = genreFilter === 'All' || book.genre.includes(genreFilter);
    const matchesRating = ratingFilter === 'All' || parseFloat(book.rating) >= parseFloat(ratingFilter);
    const matchesSearch = book.title.toLowerCase().includes(searchTerm) || book.writer.toLowerCase().includes(searchTerm);

    return  matchesGenre && matchesRating && matchesSearch;
  });


  if (sortFilter === 'Title') {
    filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortFilter === 'Rating') {
    filteredBooks.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
  }

  displayBooks(filteredBooks);
}


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

renderBooks();


document.getElementById('genreFilter').addEventListener('change', renderBooks);
document.getElementById('ratingFilter').addEventListener('change', renderBooks);
document.getElementById('sortFilter').addEventListener('change', renderBooks);

searchInput.addEventListener('input', renderBooks);