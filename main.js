const myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = Boolean(readStatus);

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus ? 'read' : 'not read yet'}`;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
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