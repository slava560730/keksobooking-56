import './generateCard.js';
import {createMarker} from './map.js';

fetch('https://26.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((advertisements) => {
    console.log(advertisements);
    advertisements.forEach(({location, offer, author}) => {
      createMarker({location, offer, author});
    });
  });
