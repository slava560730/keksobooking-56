import './generateCard.js';
import {createMarker} from './map.js';

// /Получаем данные от сервера

fetch('https://26.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((advertisements) => {
    advertisements.forEach(({location, offer, author}) => {
      createMarker({location, offer, author});
    });
  });
