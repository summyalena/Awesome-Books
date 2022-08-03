let books;

if (localStorage.getItem('books') === null) {
  books = [];
} else {
  books = JSON.parse(localStorage.getItem('books'));
}

// localStorage.clear();

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

document.addEventListener('DOMContentLoaded', () => {
  const buttonRemove = document.querySelectorAll('.button-remove');

  buttonRemove.forEach((button) => {
    button.addEventListener('click', (e) => {
      const bookAuthor = e.target.previousElementSibling.innerText;
      const bookTitle = e.target.previousElementSibling.previousElementSibling.innerText;

      const y = new Booklibrary(bookTitle, bookAuthor);
      y.remove();
      e.target.parentElement.remove();
    });
  });
});

document.querySelector('form').addEventListener('submit', () => {
  const x = new Booklibrary(document.querySelector('.title').value, document.querySelector('.author').value);
  x.add();
});

const addNewPage = document.querySelector('.book-adder-section');
const addListPage = document.querySelector('.book-list-section');

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.display-add-new').addEventListener('click', () => {
    addListPage.classList.toggle('active');
    addNewPage.classList.toggle('active');
  });

  document.querySelector('.display-list').addEventListener('click', () => {
    addListPage.classList.remove('active');
    addNewPage.classList.remove('active');
  });
});