const formContainer = document.querySelector('.ad-form');
const formFieldsets = formContainer.querySelectorAll('fieldset');
const filtersContainer = document.querySelector('.map__filters');
const filtersFieldsets = filtersContainer.querySelectorAll('fieldset');
const roomsContainer = formContainer.querySelector('#room_number');
const guestsContainer = formContainer.querySelector('#capacity');
const typeContainer = formContainer.querySelector('#type');
const priceContainer = formContainer.querySelector('#price');
const timeIn = formContainer.querySelector('#timein');
const timeOut = formContainer.querySelector('#timeout');
const TitleContainer = formContainer.querySelector('#title');

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
};

const MAX_PRICE = 100000;

const pristine = new Pristine(formContainer, {
  classTo: 'ad-form__element',
  successClass: 'ad-form__element--valid',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error-text',
});

// Валидация заголовка объявления

function validateTitle (value) {
  return value.length >= TITILE_LENGTH.minlength && value.length <= TITILE_LENGTH.maxlength;
}

function getErrorTitle () {
  if (TitleContainer.value.length < TITILE_LENGTH.minlength) {
    return ' Количество символов должно быть больше 30';
  } else if (TitleContainer.value.length > TITILE_LENGTH.maxlength) {
    return ' Количество символов должно быть меньше 100';
  }
}

// Сопоставление типов жилищ с минимальной ценой и сопоставление времени выезда и заезда

function onSyncTypesWithMinPrice () {
  const type = typeContainer.value;

  if (type === 'flat') {
    priceContainer.placeholder = TYPES.flat;
  }

  if (type === 'palace') {
    priceContainer.placeholder = TYPES.palace;
  }

  if (type === 'bungalow') {
    priceContainer.placeholder = TYPES.bungalow;
  }

  if (type === 'hotel') {
    priceContainer.placeholder = TYPES.hotel;
  }

  if (type === 'house') {
    priceContainer.placeholder = TYPES.house;
  }

}

function onSyncTimesOut () {
  timeIn.value = timeOut.value;
}

function onSyncTimesIn () {
  timeOut.value = timeIn.value;
}

timeOut.addEventListener('change', onSyncTimesOut);
timeIn.addEventListener('change',onSyncTimesIn);
typeContainer.addEventListener('change', onSyncTypesWithMinPrice);

// Валидация цены

function validatePrice () {
  return Number(priceContainer.value) >= TYPES[typeContainer.value] && Number(priceContainer.value) <= MAX_PRICE;
}

function getErrorPriceMessage () {
  if (Number(priceContainer.value) < TYPES[typeContainer.value]) {
    return `цена должна быть больше ${  TYPES[typeContainer.value]}`;
  }
  if (Number(priceContainer.value) > MAX_PRICE) {
    return `цена должна быть меньше ${  MAX_PRICE}`;
  }
}

// Валидация количества комнат с количеством гостей

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

function onChangeCapacity () {
  return pristine.validate(guestsContainer);
}

guestsContainer.addEventListener('change', onChangeCapacity);
roomsContainer.addEventListener('change', onChangeCapacity);

pristine.addValidator(TitleContainer, validateTitle, getErrorTitle);
pristine.addValidator(priceContainer, validatePrice, getErrorPriceMessage);
pristine.addValidator(guestsContainer, validateRoomsAndGuests,  getErrorRoomsAndGuestsMessage);

formContainer.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

// Функция для перехода формы в неактивное состояние

function disableForm() {
  formContainer.classList.add('ad-form--disabled');
  filtersContainer.classList.add('map__filters--disabled');
  formFieldsets.disabled = true;
  filtersFieldsets.disabled = true;
}

// Функция для перехода формы в активное состояние

function enableForm() {
  formContainer.classList.remove('ad-form--disabled');
  filtersContainer.classList.remove('map__filters--disabled');
  formFieldsets.disabled = false;
  filtersFieldsets.disabled = false;
}

disableForm();

export {enableForm};
export {formContainer, typeContainer, TYPES};
