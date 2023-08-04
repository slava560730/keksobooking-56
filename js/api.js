import {createMarkersForAdverts, resetMarker} from './map.js';
import {createErrorMessage, clearErrorMessage, clearSuccessMessage, createSuccessMessage, showErrorMessage} from './messeges.js';
import {formContainer, formButton} from './form.js';
import {resetSlider} from './slider.js';
import {setFilter} from './mapFilter.js';
import {debounce} from './util.js';
import  {resetImages} from './Photos.js';

const RENDER_DELAY = 500;
const ERROR_MESSAGE = 'Не удалось загрузить данные с сервера';
const URL = {
  get: 'https://26.javascript.pages.academy/keksobooking/data',
  send: 'https://26.javascript.pages.academy/keksobooking/'
};

// Меняем текст кнопки при отправке

const buttonText = {
  disabled: 'Публикую',
  enabled: 'Опубликовать'
};

const disableFormButton = () => {
  formButton.textContent = buttonText.disabled;
  formButton.disabled = true;
};

// Возвращаем кнопку в исходое состояние

const enableFormButton = () => {
  formButton.textContent = buttonText.enabled;
  formButton.disabled = false;
};

// Показываем сообщения при получении данных от сервера

// const onResetMarkers = () => {
//   createMarkersForAdverts (advertisements);
// };

const onSuccessGetData = (advertisements) => {
  createMarkersForAdverts(advertisements);
  setFilter(debounce(() => createMarkersForAdverts(advertisements), RENDER_DELAY));
  const onResetMarkers = () => {
    createMarkersForAdverts (advertisements);
  };
  formContainer.addEventListener('reset', onResetMarkers);
};

const onErrorGetData = () => {
  showErrorMessage(ERROR_MESSAGE);
};

// Получаем данные от сервера

const getData = () => {
  fetch(URL.get)
    .then((response) => {
      if (response.ok) {
        response.json()
          .then((advertisements) => {
            onSuccessGetData(advertisements);
          });
      } else {
        onErrorGetData();
      }
    });
};

// Показываем ошибку при отправке данных на сервер

const onErrorSendData = () => {
  createErrorMessage();
  clearErrorMessage();
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
  createSuccessMessage();
  clearSuccessMessage();
  disableFormButton();
  resetForm();
};

const sendData = (body) => {

  fetch( URL.send,
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
