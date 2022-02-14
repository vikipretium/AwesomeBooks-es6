const inputTitle = document.querySelector('.input-title');
const inputAuthor = document.querySelector('.input-author');
const bookShelf = document.querySelector('.book-shelf');
const bookCard = document.createElement('div');
const bookForm = document.querySelector('.book-input');

import Book from "../modules/book.js";

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

import {navlist, navadd, navcon,listfun, addfun, confun} from "../modules/nav.js";

navlist.addEventListener('click', listfun);

navadd.addEventListener('click', addfun);

navcon.addEventListener('click', confun);

// eslint-disable-next-line no-unused-vars
// const displayTime = () => {
//   document.getElementById('current-date').innerText = new Date().toLocaleString();
//   setTimeout(displayTime, 1000);
// };
// displayTime();

import { DateTime } from '../../node_modules/luxon/src/luxon.js';
const addDate = () => {
    const dateContainer = document.getElementById('current-date');
    dateContainer.textContent = '';
    const date = DateTime.now();
    dateContainer.append(date.toHTTP());
    };
window.setInterval(addDate, 1000);
