import './generateCard.js';
import {createMarker} from './map.js';
import {createErrorMessege, clearErrorMessege, clearSuccessMessege, createSuccessMessege, showErrorMessege} from './messeges.js';
import { formContainer } from './form.js';
import { resetMarker } from './map.js';
import { resetSlider } from './slider.js';

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
      showErrorMessege('Не удалось загрузить данные с сервера');
    }
  });

// Показываем ошибку при отправке данные на сервер

const onError = () => {
  createErrorMessege();
  clearErrorMessege();
};

// Возвращаем форму в исходное состояние при успешной отправке

const resetForm = () => {
  formContainer.reset();
  resetMarker();
  resetSlider();
}

// Отправляем данные на сервер и очищаем форму

const onSuccess = () => {
  createSuccessMessege();
  clearSuccessMessege()
  resetForm();
};

export {onSuccess, onError};
