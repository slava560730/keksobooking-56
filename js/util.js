function getRandomNumber (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.floor(Math.random() * (upper - lower + 1) + lower);

  return result;
}

function getRandomFloat (min, max, decimals) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));

  return (Math.random() * (upper - lower) + lower).toFixed(decimals);
}

function removeElement (element) {
  element.remove();
}

function fillInnPhotos (element, photos) {
  photos.forEach((photo) => {
    element.insertAdjacentHTML(
      'beforeend',
      `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`
    );
  } );
}

function fillInnElement (element, value, property = 'textContent') {
  element[property] = value;
}

function checkValueOfElement (element, value, property = 'textContent') {
  if (value) {
    fillInnElement (element, value, property);
  } else {
    removeElement(element);
  }
}

function checkValueOfPhoto (element, photos) {
  if (photos ? photos.length :  0) {
    fillInnPhotos(element, photos);
  } else {
    removeElement(element);
  }
}

function inclineTermonOfRooms (element) {
  switch (element) {
    case  1:
      return ' комната';
    case 2:
    case 3:
    case 4:
      return ' комнаты';
    default:
      return ' комнат';
  }
}

function inclineTermonOfGuests (element) {
  switch (element) {
    case 1:
      return  ' гостя';
    default:
      return  ' гостей';
  }
}

function getRandomElement(array) {
  const maxLength = array.length;
  const lenghtOfArray = getRandomNumber(1, maxLength);
  const randomArray = [];

  while (randomArray.length < lenghtOfArray) {
    const indexOfEl = getRandomNumber(0, maxLength - 1);
    const el = array[indexOfEl];

    if (!randomArray.includes(el)) {
      randomArray.push(el);
    }
  }
  return randomArray;
}

function syncTypesToRussian(element) {
  switch (element) {
    case 'flat':
      return 'Квартира';
    case 'palace':
      return 'Дворец';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'hotel':
      return 'Отель';
  }
}

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

export {debounce, getRandomNumber, getRandomFloat, getRandomArrayElement, checkValueOfPhoto, checkValueOfElement, inclineTermonOfRooms, inclineTermonOfGuests, getRandomElement, syncTypesToRussian};

