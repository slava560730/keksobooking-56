const pageBodyContainer = document.querySelector('body');
const successTemplate = document.querySelector('#success');
const successTemplateMessege = successTemplate.content.querySelector('.success');
const errorTemplate = document.querySelector('#error');
const errorTemplateMessege = errorTemplate.content.querySelector('.error');

const ALERT_SHOW_TIME = 10000;

// Создаем сообщение об успешной загрузке формы

const createSuccessMessege = () => {
  const successMessege = successTemplateMessege.cloneNode(true);

  pageBodyContainer.append(successMessege);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const clearSuccessMessege = ()  => {
  const successMessegeContainer = document.querySelector('.success');
  if (pageBodyContainer.contains(successMessegeContainer)) {
    document.addEventListener('click', () => {
      successMessegeContainer.remove();
    });
    document.addEventListener('keydown', (evt) => {
      if (isEscapeKey(evt)) {
        successMessegeContainer.remove();
      }
    });
  }
};

// Создаем сообщение об ошибке при загрузке данных

const showErrorMessege = (message) => {
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

const createErrorMessege = () => {
  const errorMessege = errorTemplateMessege.cloneNode(true);

  pageBodyContainer.append(errorMessege);
};

const clearErrorMessege = ()  => {
  const errorMessegeContainer = document.querySelector('.error');
  if (pageBodyContainer.contains(errorMessegeContainer)) {
    document.addEventListener('click', () => {
      errorMessegeContainer.remove();
    });
    document.addEventListener('keydown', (evt) => {
      if (isEscapeKey(evt)) {
        errorMessegeContainer.remove();
      }
    });
  }
};

export {createErrorMessege, clearErrorMessege, createSuccessMessege, clearSuccessMessege, showErrorMessege};
