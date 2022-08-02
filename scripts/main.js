let books;
// eslint-disable-next-line
if (localStorage.getItem('books') === null) {
  books = [];
} else {
  // eslint-disable-next-line
  books = JSON.parse(localStorage.getItem('books'))
}

document.querySelector('form').addEventListener('submit', () => {
  const bookTitle = document.querySelector('.title').value;
  const bookAuthor = document.querySelector('.author').value;

  const book = [{ bookTitle, bookAuthor }];
  books.push(book);
  // eslint-disable-next-line
  localStorage.setItem('books', JSON.stringify(books))
});

document.addEventListener('DOMContentLoaded', () => {
  books.forEach((book) => {
    const bookList = document.querySelector('.books-card');

    bookList.innerHTML += `
    <div class="books-card-flex">
    <h3 class="book-title">${book[0].bookTitle}</h3>
    <p class="book-about">${book[0].bookAuthor}</p>
    <button type="button" class="button-remove">Remove</button>
    <br><hr>
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

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < books.length; i++) {
        if (books[i][0].bookTitle === bookTitle && books[i][0].bookAuthor === bookAuthor) {
          books.splice(i, 1);
        }
      }

      // eslint-disable-next-line
      localStorage.clear()
      // eslint-disable-next-line
      localStorage.setItem('books', JSON.stringify(books))
      e.target.parentElement.remove();
    });
  });
});
