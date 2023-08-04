import {createMarkersForAdverts, resetMarker, MAX_ADVERTISEMENT} from './map.js';
import {createErrorMessege, clearErrorMessege, clearSuccessMessege, createSuccessMessege, showErrorMessege} from './messeges.js';
import {formContainer, formButton} from './form.js';
import {resetSlider} from './slider.js';
import {setFilter} from './mapFilter.js';
import {debounce} from './util.js';
import  {resetImages} from './Photos.js';

const RENDER_DELAY = 500;

// Меняем текст кнопки при отправке

const BUTTON_TEXT = {
  disabled: 'Публикую',
  enabled: 'Опубликовать'
};

const disableFormButton = () => {
  formButton.textContent = BUTTON_TEXT.disabled;
  formButton.disabled = true;
};

// Возвращаем кнопку в исходое состояние

const enableFormButton = () => {
  formButton.textContent = BUTTON_TEXT.enabled;
  formButton.disabled = false;
};

// Показываем сообщения при получении данных от сервера

const onSuccessGetData = (advertisements) => {
  createMarkersForAdverts(advertisements);
  setFilter(debounce(() => createMarkersForAdverts(advertisements), RENDER_DELAY));
  formContainer.addEventListener('reset', () => {
    createMarkersForAdverts(advertisements);
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
  resetImages();
};

// Отправляем данные на сервер и очищаем форму

const onSuccessSendData = () => {
  createSuccessMessege();
  clearSuccessMessege();
  disableFormButton();
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

export {getData, sendData, enableFormButton};
