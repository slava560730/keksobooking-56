const formContainer = document.querySelector('.ad-form');
const formFieldsets = formContainer.querySelectorAll('fieldset');
const filtersContainer = document.querySelector('.map__filters');
const filtersFieldsets = filtersContainer.querySelectorAll('fieldset');
const error = document.querySelector('ad-form__error-text');

const pristine = new Pristine(formContainer, {
  classTo: 'ad-form__element',
  successClass: 'ad-form__element--valid',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error-text',
});

function validateTitle (value) {
  return value.length >= 30 && value.length <= 100;
}

function validatePrice (value) {
  return value <= 100000;
}

function validateRooms (value) {
  return value
}



pristine.addValidator(formContainer.querySelector('#title'), validateTitle, 'От 30 до 100 символов');
pristine.addValidator(formContainer.querySelector('#price'), validatePrice, 'Максимальное значение — 100 000');

formContainer.addEventListener('submit', (evt) => {
  const isValide = pristine.validate();

  if(isValide){
    console.log('Форма валидна!');
  } else {
    evt.preventDefault();
    console.log('Форма не валидна!');
  }
});

function disableForm() {
  formContainer.classList.add('ad-form--disabled');
  filtersContainer.classList.add('map__filters--disabled');
  formFieldsets.disabled = true;
  filtersFieldsets.disabled = true;
}

function enableForm() {
  formContainer.classList.remove('ad-form--disabled');
  filtersContainer.classList.remove('map__filters--disabled');
  formFieldsets.disabled = false;
  filtersFieldsets.disabled = false;
}

export {disableForm};
export {enableForm};
