// eslint-disable-next-line
import Books from './module/localStorage.js';

// eslint-disable-next-line
import { DateTime } from './luxon.js';

document.querySelector('.books-card').addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return;

  const bookAuthor = e.target.previousElementSibling.innerText;
  const bookTitle = e.target.previousElementSibling.previousElementSibling.innerText;
  Books.remove(bookAuthor, bookTitle);
});

document.querySelector('form').addEventListener('submit', (e) => {
  Books.add(document.querySelector('.title').value, document.querySelector('.author').value);
  e.target.querySelectorAll('input').forEach((i) => i.value === '');
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
Books.display();