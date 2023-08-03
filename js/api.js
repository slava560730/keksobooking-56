import {createMarker, resetMarker} from './map.js';
import {createErrorMessege, clearErrorMessege, clearSuccessMessege, createSuccessMessege, showErrorMessege} from './messeges.js';
import {formContainer} from './form.js';
import {resetSlider} from './slider.js';

const MAX_ADVERTISEMENT = 10;

// Показываем сообщения при получении данных от сервера

const onSuccessGetData = (advertisements) => {
  advertisements.forEach(({location, offer, author}) => {
    createMarker({location, offer, author});
  });
};

const onErrorGetData = () => {
  showErrorMessege('Не удалось загрузить данные с сервера');
};

// Получаем данные от сервера

const getData = () => {
  fetch('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        response.json()
          .then((advertisements) => {
            onSuccessGetData(advertisements.slice(0, MAX_ADVERTISEMENT));
          });
      } else {
        onErrorGetData();
      }
    });
};

// Показываем ошибку при отправке данных на сервер

const onErrorSendData = () => {
  createErrorMessege();
  clearErrorMessege();
};

// Возвращаем форму в исходное состояние при успешной отправке

const resetForm = () => {
  formContainer.reset();
  resetMarker();
  resetSlider();
};

// Отправляем данные на сервер и очищаем форму

const onSuccessSendData = () => {
  createSuccessMessege();
  clearSuccessMessege();
  resetForm();
};

const sendData = (body) => {

  fetch( 'https://26.javascript.pages.academy/keksobooking/',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccessSendData();
      } else {
        onErrorSendData();
      }
    })
    .catch(() => {
      onErrorSendData();
    });
};

export {getData, sendData};
