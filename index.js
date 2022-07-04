import { showList, newBook } from './modules/booksCollection.js';
import * as time from './modules/time.js';
import { displayListPage, displayAddPage, displayContactPage } from './modules/nav.js';

showList();
const submit = document.getElementById('btn');
submit.addEventListener('click', newBook, false);
document.getElementById('listLink').style.color = 'blue';
document.getElementById('listNav').addEventListener('click', displayListPage, false);
document.getElementById('addNav').addEventListener('click', displayAddPage, false);
document.getElementById('contactNav').addEventListener('click', displayContactPage, false);
time.showTime.appendChild(time.show);