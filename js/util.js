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

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

export {getRandomNumber};
export {getRandomFloat};
export {getRandomArrayElement};
