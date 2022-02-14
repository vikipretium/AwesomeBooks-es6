export const navlist = document.querySelector('#show-list-button');
export const navadd = document.querySelector('#add-new-button');
export const navcon = document.querySelector('#contact-button');

const list = document.querySelector('#list');
const addNew = document.querySelector('#add');
const connav = document.querySelector('#contact');

export const listfun = (e) => {
  if (e.currentTarget === navlist) {
    list.style.display = 'flex';
    addNew.style.display = 'none';
    connav.style.display = 'none';
  }
};

export const addfun = (e) => {
  if (e.currentTarget === navadd) {
    list.style.display = 'none';
    addNew.style.display = 'flex';
    connav.style.display = 'none';
  }
};

export const confun = (e) => {
  if (e.currentTarget === navcon) {
    list.style.display = 'none';
    addNew.style.display = 'none';
    connav.style.display = 'flex';
  }
};

 