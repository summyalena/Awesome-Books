import Booklibrary from './module/books.js';
import { DateTime } from './node_modules/luxon/build/es6/luxon.js';

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
const contactPage = document.querySelector('.contact-section');

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.display-add-new').addEventListener('click', () => {
    addListPage.classList.add('active');
    addNewPage.classList.add('active');
    contactPage.classList.remove('active');
  });

  document.querySelector('.display-list').addEventListener('click', () => {
    contactPage.classList.remove('active');
    addListPage.classList.remove('active');
    addNewPage.classList.remove('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.display-contact').addEventListener('click', () => {
    contactPage.classList.add('active');
    addListPage.classList.add('active');
    addNewPage.classList.remove('active');
  });
});

const Time = document.querySelector('.time');
Time.textContent = DateTime.now().toLocaleString(
  DateTime.DATETIME_MED,
);
