import Book from '../modules/book.js';

import {
  navlist, navadd, navcon, listfun, addfun, confun,
} from '../modules/nav.js';

import { DateTime } from '../../node_modules/luxon/src/luxon.js';

const inputTitle = document.querySelector('.input-title');
const inputAuthor = document.querySelector('.input-author');
  const bookForm = document.querySelector('.book-input');

const book = new Book(inputTitle.value, inputAuthor.value);

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = new Book(inputTitle.value, inputAuthor.value);
  const { title, author } = book;
  const id = Math.round(Math.random() * 10000000);

  const bookObjt = {
    id,
    title,
    author,
  };
  if (title && author) {
    book.addBook(bookObjt);
    bookForm.reset();
    book.showBook();
  }
});

window.addEventListener('DOMContentLoaded', book.showBook());

navlist.addEventListener('click', listfun);

navadd.addEventListener('click', addfun);

navcon.addEventListener('click', confun);
const addDate = () => {
  const dateContainer = document.getElementById('current-date');
  dateContainer.textContent = '';
  const date = DateTime.now();
  dateContainer.append(date.toHTTP());
};
window.setInterval(addDate, 1000);
