// eslint-disable-next-line
export default class Books {

  static getfromLS = () => (localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [])

  static idGenerator = () => {
    const books = Books.getfromLS();
    const id = books.length ? books[books.length - 1].id + 1 : 1;
    return id;
  }

  static add = (book) => {
    const books = Books.getfromLS();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));

    Books.display(book);
  }

  static remove = (id) => {
    const books = Books.getfromLS();
    const filteredBooks = books.filter((book) => book.id.toString() !== id.toString());
    localStorage.setItem('books', JSON.stringify(filteredBooks));
  }

  static display = (book) => {
    const bookList = document.querySelector('.books-card');
    const bookcontainer = document.createElement('div');
    bookcontainer.className = 'books-card-flex';
    bookcontainer.innerHTML = `
      <h3 class="book-title">${book.title}</h3>
      <p class="book-about">${book.author}</p>
      <button id= "${book.id}" type="button" class="button-remove">Remove</button>
    `;
    bookList.appendChild(bookcontainer);
  }

   static onLoad = () => {
     const books = Books.getfromLS();
     books.forEach((book) => {
       Books.display(book);
     });
   }
}