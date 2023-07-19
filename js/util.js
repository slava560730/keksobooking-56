

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
const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

export {getRandomNumber};
export {getRandomFloat};
export {getRandomArrayElement};
export {removeElement};
export {fillInnPhotos};
