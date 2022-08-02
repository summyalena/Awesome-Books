let books;
if (localStorage.getItem('books') === null) {
  books = [];
} else {
  books = JSON.parse(localStorage.getItem('books'));
}

document.querySelector("form").addEventListener('submit', () => {
  const bookTitle = document.querySelector(".title").value;
  const bookAuthor = document.querySelector(".author").value;

  const book = [{bookTitle, bookAuthor}];
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
});

document.addEventListener('DOMContentLoaded', () => {
  books.forEach(book => {
    const bookList = document.querySelector(".books-card");

    bookList.innerHTML += `
    <h3 class="book-title">${book[0].bookTitle}</h3>
    <p class="book-about">${book[0].bookAuthor}</p>
    <button type="button" class="button-remove">Remove</button>
    <br><hr>
    `;
    
  });
});



console.log(books[2][0].bookTitle);
console.log(books[2][0].bookAuthor);