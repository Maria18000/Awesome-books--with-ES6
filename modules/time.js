import { DateTime } from '../node_modules/luxon/src/luxon.js';

const showTime = document.getElementById('date');
const time = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
const show = document.createElement('p');
show.innerHTML = `${time}`;

export { show, showTime };
