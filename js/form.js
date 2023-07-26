const formContainer = document.querySelector('.ad-form');
const formFieldsets = formContainer.querySelectorAll('fieldset');
const filtersContainer = document.querySelector('.map__filters');
const filtersFieldsets = filtersContainer.querySelectorAll('fieldset');
const roomsContainer = formContainer.querySelector('#room_number');
const guestsContainer = formContainer.querySelector('#capacity');

const TYPES = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

const CAPACITY = {
  maxRooms: 100,
  nonGuests: 0
};

const TITILE_LENGTH = {
  maxlength: 100,
  minlength: 30
}

let minPrice = 0;
const maxPrice = 100000;

const pristine = new Pristine(formContainer, {
  classTo: 'ad-form__element',
  successClass: 'ad-form__element--valid',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error-text',
});

function validateTitle (value) {
  return value.length >= TITILE_LENGTH.minlength && value.length <= TITILE_LENGTH.maxlength;
}

function getErrorTitle () {
  const TitleContainer = formContainer.querySelector('#title');

  if (TitleContainer.value.length < TITILE_LENGTH.minlength) {
    return ' Количество символов должно быть больше 30';
  } else if (TitleContainer.value.length > TITILE_LENGTH.maxlength) {
    return ' Количество символов должно быть меньше 100';
  }
}

function syncTypesWithMinPrice () {
  const typeContainer = formContainer.querySelector('#type');
  const priceContainer = formContainer.querySelector('#price');

  if (typeContainer.value = 'flat') {
     priceContainer.placeholder = TYPES.flat;
  } else if (typeContainer.value = 'palace') {
    priceContainer.placeholder = TYPES.palace;
  }
}

syncTypesWithMinPrice();

function validatePrice (value) {
  if (typeContainer.value = 'bungalow') {
    minPrice = TYPES.bungalow;
    priceContainer.placeholder = 0;
  }
  minPrice = value;
  return value <= maxPrice;
}

function validateRoomsAndGuests () {
  const roomsNumber = Number(roomsContainer.value);
  const guestsNumber = Number(guestsContainer.value);

  if (roomsNumber >= guestsNumber && roomsNumber !== CAPACITY.maxRooms && guestsNumber !== CAPACITY.nonGuests) {
    return true;
  }
  else if (CAPACITY.maxRooms === roomsNumber && CAPACITY.nonGuests === guestsNumber) {
    return true;
  } else {
    return false;
  }
}
function getErrorRoomsAndGuestsMessage () {
  const roomsNumber = Number(roomsContainer.value);
  const guestsNumber = Number(guestsContainer.value);

  if (guestsNumber > roomsNumber) {
    return 'Количество гостей не должно превышать количество комнат';
  }

  else if (roomsNumber === CAPACITY.maxRooms || guestsNumber === CAPACITY.nonGuests) {
    return '100 комнат не для гостей';
  }
}

pristine.addValidator(formContainer.querySelector('#title'), validateTitle, getErrorTitle);
pristine.addValidator(formContainer.querySelector('#price'), validatePrice, 'Максимальное значение — 100 000');
pristine.addValidator(guestsContainer, validateRoomsAndGuests,  getErrorRoomsAndGuestsMessage);

formContainer.addEventListener('submit', (evt) => {
  const isValide = pristine.validate();

  if (!isValide) {
    evt.preventDefault();
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
