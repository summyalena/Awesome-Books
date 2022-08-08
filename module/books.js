let books;

if (localStorage.getItem('books') === null) {
  books = [];
} else {
  books = JSON.parse(localStorage.getItem('books'));
}

export default class Booklibrary {
  constructor(title, author) {
    this.author = author;
    this.title = title;
  }

  add() {
    const bookauthor = new Booklibrary(this.author);
    const booktitle = new Booklibrary(this.title);

    const book = [{ booktitle, bookauthor }];
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  remove() {
    const bookAuthor = new Booklibrary(this.author);
    const bookTitle = new Booklibrary(this.title);

    for (let i = 0; i < books.length; i += 1) {
      if (books[i][0].booktitle === bookTitle && books[i][0].bookauthor === bookAuthor) {
        books.splice(i, 1);
      }
    }
    localStorage.clear();
    localStorage.setItem('books', JSON.stringify(books));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  books.forEach((book) => {
    const bookList = document.querySelector('.books-card');

    bookList.innerHTML += `
      <div class="books-card-flex">
      <h3 class="book-title">${book[0].booktitle}</h3>
      <p class="book-about">${book[0].bookauthor}</p>
      <button type="button" class="button-remove">Remove</button>
      </div>
      `;
  });
});