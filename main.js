const myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = Number(pages);
  this.readStatus = readStatus == 'true' ? true : false;

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus ? 'read' : 'not read yet'}`;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  myLibrary.sort((a, b) => (a.title > b.title) ? 1 : (b.title > a.title ? -1 : 0));
  displayLibrary();
}

function displayLibrary() {
  document.getElementById('shelf').innerHTML = '';
  
  for (const book of myLibrary) {
    //Create card for book display
    const bookCard = document.createElement('div');
    const bookTitleHeading = document.createElement('h2');
    const bookAuthorPara = document.createElement('p');
    const bookPagesPara = document.createElement('p');
    const bookReadStatusPara = document.createElement('p');
    
    //Add in info
    bookTitleHeading.textContent = book.title;
    bookAuthorPara.textContent = book.author;
    bookPagesPara.textContent = book.pages + ' pages';
    bookReadStatusPara.textContent = book.readStatus ? 'read' : 'not read yet';
    
    // Append everything to everything
    bookCard.append(bookTitleHeading, bookAuthorPara, bookPagesPara, bookReadStatusPara);
    document.getElementById('shelf').appendChild(bookCard);
  }
}

// Dialog modal initialization:
// Connect to HTML Elements
const formDialog = document.getElementById('bookFormDialog');
const showFormButton = document.getElementById('btn--showForm');
const closeFormButton = document.getElementById('btn--closeForm');

// Set up show/hide buttons for 'Add a Book' form modal:
showFormButton.addEventListener('click', () => formDialog.showModal());
closeFormButton.addEventListener('click', () => formDialog.close());

// Function to add a new book from form info
function addBookFromForm(event) {
  // Stop page reload on submit
  event.preventDefault();
 
  // Get user input data for new Book object
  const form = document.querySelector('#addBookForm');
  const formAnswers = new FormData(form, document.getElementById('addBookForm--submit-btn'));
  
  // Create new book from form submission
  const userBook = new Book(formAnswers.get('title'), formAnswers.get('author'), formAnswers.get('pages'), formAnswers.get('readStatus'));
  addBookToLibrary(userBook);
  
  /* Reset the form values to show the data has been input and form is ready
  for another book */
  form.reset();
}

// Set up event handler for adding a book:
document.getElementById('addBookForm--submit-btn').addEventListener('click', addBookFromForm);

// Dummy Books for testing
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 251, true);
addBookToLibrary(theHobbit);

const aGameOfThrones = new Book('A Game of Thrones', 'George R.R. Martin', 835, true);
addBookToLibrary(aGameOfThrones);

const fahrenheit451 = new Book('Fahrenheit 451', 'Ray Bradbury', 194, false);
addBookToLibrary(fahrenheit451);

const dune = new Book("Dune", "Frank Herbert", 892, true);
addBookToLibrary(dune);

const aClashOfKings = new Book("A Clash of Kings", "George R.R. Martin", 1042, false);
addBookToLibrary(aClashOfKings);

const theGreatGatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 110, false);
addBookToLibrary(theGreatGatsby);

const book1984 = new Book('1984', 'George Orwell', 328, true);
addBookToLibrary(book1984);

const frankenstein = new Book('Frankenstein', 'Mary Shelley', 113, true);
addBookToLibrary(frankenstein);
