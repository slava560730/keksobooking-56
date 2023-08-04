import {enableFormButton} from './api.js';

const pageBodyContainer = document.querySelector('body');
const successTemplate = document.querySelector('#success');
const successTemplateMessage = successTemplate.content.querySelector('.success');
const errorTemplate = document.querySelector('#error');
const errorTemplateMessage = errorTemplate.content.querySelector('.error');
// const successMessageContainer = document.querySelector('.success');
const ALERT_SHOW_TIME = 10000;

// Создаем сообщение об успешной загрузке формы

const createSuccessMessage = () => {
  const successMessage = successTemplateMessage.cloneNode(true);
  pageBodyContainer.append(successMessage);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const clearSuccessMessage = ()  => {
  const successMessageContainer = document.querySelector('.success');

  const onRemoveSuccessMessage = () => {
    successMessageContainer.remove();
    enableFormButton();
  };

  if (pageBodyContainer.contains(successMessageContainer)) {
    document.addEventListener('click', onRemoveSuccessMessage);
    document.addEventListener('keydown', (evt) => {
      if (isEscapeKey(evt)) {
        onRemoveSuccessMessage();
      }
    });
  }
};

// Создаем сообщение об ошибке при загрузке данных

const showErrorMessage = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '5px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

// Создаем сообщение об ошибке при загрузке формы

const createErrorMessage = () => {
  const errorMessage = errorTemplateMessage.cloneNode(true);
  pageBodyContainer.append(errorMessage);
};

const clearErrorMessage = ()  => {
  const errorMessageContainer = document.querySelector('.error');

  const onRemoveErrorMessage = () => {
    errorMessageContainer.remove();
  };

  if (pageBodyContainer.contains(errorMessageContainer)) {
    document.addEventListener('click', onRemoveErrorMessage);
    document.addEventListener('keydown', (evt) => {
      if (isEscapeKey(evt)) {
        onRemoveErrorMessage();
      }
    });
  }
};

export {createErrorMessage, clearErrorMessage, createSuccessMessage, clearSuccessMessage, showErrorMessage};
