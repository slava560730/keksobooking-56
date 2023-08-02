import './generateCard.js';
import {createMarker} from './map.js';
import {clearSuccessMessege, createSuccessMessege, showDownloadErrorMessege} from './messeges.js';

// Получаем данные от сервера

fetch('https://26.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if (response.ok) {
      response.json()
        .then((advertisements) => {
          advertisements.forEach(({location, offer, author}) => {
            createMarker({location, offer, author});
          });
        });
    } else {
      showDownloadErrorMessege('Не удалось загрузить данные с сервера');
    }
  });

// Отправляем данные на сервер

const onSuccess = () => {
  createSuccessMessege();
  clearSuccessMessege();
};

export {onSuccess};
