let books;

if (localStorage.getItem('books') === null) {
  books = [];
} else {
  books = JSON.parse(localStorage.getItem('books'));
}

class Booklibrary {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  add() {
    const bookauthor = this.author;
    const booktitle = this.title;

    const book = [{ booktitle, bookauthor }];
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  remove() {
    const bookAuthor = this.author;
    const bookTitle = this.title;

    for (let i = 0; i < books.length; i += 1) {
      if (books[i][0].bookTitle === bookTitle && books[i][0].bookAuthor === bookAuthor) {
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

document.addEventListener('DOMContentLoaded', () => {
  const buttonRemove = document.querySelectorAll('.button-remove');

  buttonRemove.forEach((button) => {
    button.addEventListener('click', (e) => {
      const bookAuthor = e.target.previousElementSibling.innerText;
      const bookTitle = e.target.previousElementSibling.previousElementSibling.innerText;

      const y = new Booklibrary(bookAuthor, bookTitle);
      y.remove();
      e.target.parentElement.remove();
    });
  });
});

document.querySelector('form').addEventListener('submit', () => {
  const x = new Booklibrary(document.querySelector('.title').value, document.querySelector('.author').value);
  x.add();
});