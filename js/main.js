// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function getRandomFloat (min, max, decimals) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  return (Math.random() * (upper - lower) + lower).toFixed(decimals);
}

// Функция, возвращающая случайное целое число из переданного диапазона включительно:


function getRandomNumber (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.floor(Math.random() * (upper - lower + 1) + lower);
  if (result < 10) {
    return `0${  result}`;
  }
  return result;
}

function getRandomUnicNumber (getRandomNumber) {
  return getRandomNumber;
}



const AUTHOR = {
  avatar: 'img/avatars/user' + getRandomUnicNumber(getRandomNumber(0, 10)) + '.png,'
};

const createAdvertisements = () => {
  return {
    AUTHOR
  };
};

const similarAdvertisements = Array.from({length: 3}, createAdvertisements);

console.log(similarAdvertisements);




