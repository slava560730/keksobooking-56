import {sendData} from './api.js';

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
const formButton = formContainer.querySelector('.ad-form__submit');

const TypesPrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

const TypesNames = {
  bungalow: 'bungalow',
  flat: 'flat',
  hotel: 'hotel',
  house: 'house',
  palace: 'palace'
};

const CAPACITY = {
  maxRooms: 100,
  nonGuests: 0
};

const CapacityError = {
  maxRooms: 'Количество гостей не должно превышать количество комнат',
  nonGuests: '100 комнат не для гостей'
};

const TITLE_LENGTH = {
  maxlength: 100,
  minlength: 30
};

const errorTitle = {
  min:' Количество символов должно быть больше 30',
  max:' Количество символов должно быть меньше 100'
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
  return value.length >= TITLE_LENGTH.minlength && value.length <= TITLE_LENGTH.maxlength;
}

function getErrorTitle () {
  if (TitleContainer.value.length < TITLE_LENGTH.minlength) {
    return errorTitle.min;
  } else if (TitleContainer.value.length > TITLE_LENGTH.maxlength) {
    return errorTitle.max;
  }
}

// Сопоставление типов жилищ с минимальной ценой и сопоставление времени выезда и заезда

function onSyncTypesWithMinPrice () {
  const type = typeContainer.value;

  if (type === TypesNames.flat) {
    priceContainer.placeholder = TypesPrice.flat;
  }

  if (type === TypesNames.palace) {
    priceContainer.placeholder = TypesPrice.palace;
  }

  if (type === TypesNames.bungalow) {
    priceContainer.placeholder = TypesPrice.bungalow;
  }

  if (type === TypesNames.hotel) {
    priceContainer.placeholder = TypesPrice.hotel;
  }

  if (type === TypesNames.house) {
    priceContainer.placeholder = TypesPrice.house;
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
  return Number(priceContainer.value) >= TypesPrice[typeContainer.value] && Number(priceContainer.value) <= MAX_PRICE;
}

function getErrorPriceMessage () {
  if (Number(priceContainer.value) < TypesPrice[typeContainer.value]) {
    return `цена должна быть больше ${  TypesPrice[typeContainer.value]}`;
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
    return CapacityError.maxRooms;
  }

  else if (roomsNumber === CAPACITY.maxRooms || guestsNumber === CAPACITY.nonGuests) {
    return CapacityError.nonGuests;
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

const setUserFormSubmit = () => {
  formContainer.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      if (isValid) {
        sendData(new FormData(evt.target)
        );
      }
    }
  });
};

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

export {enableForm, setUserFormSubmit, formContainer, typeContainer, TypesPrice, formButton};

