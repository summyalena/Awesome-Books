// eslint-disable-next-line
import Booklibrary from './books.js';

export default class Books {
    booklibrary = new Booklibrary();

  static books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];

  static add(author, title) {
    const book = { title, author };
    Books.books.push(book);
    localStorage.setItem('books', JSON.stringify(Books.books));
    Books.display();
  }

  static remove(author, title) {
    for (let i = 0; i < Books.books.length; i += 1) {
      if (Books.books[i].title === title && Books.books[i].author === author) {
        Books.books.splice(i, 1);
      }
    }
    //   localStorage.clear();
    localStorage.setItem('books', JSON.stringify(Books.books));
    Books.display();
  }

  static display() {
    const bookList = document.querySelector('.books-card');
    bookList.innerHTML = '';
    Books.books.forEach((book) => {
      bookList.innerHTML += `
            <div class="books-card-flex">
            <h3 class="book-title">${book.title}</h3>
            <p class="book-about">${book.author}</p>
            <button type="button" class="button-remove">Remove</button>
            </div>
            `;
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {

});