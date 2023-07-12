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
  return result;
}
let numbers = [];

function createNumbers (min, max) {
  for (let i = min; i <= max; i++) {
    numbers.push(i);
}
  return numbers;
}


function createImgNumber () {
  // const newImages = [];
  const randomIndex = getRandomNumber(0, createNumbers (1, 10).length - 1);
  const random = Number(createNumbers (1, 10).splice(randomIndex, 1));
  // newImages.push(random);
  return random < 10 ? `0${random}`: random;
}

// const OFFER = {
//   title: 'random',
//   address: '{location.lat}, {{location.lng}',
//   price: getRandomNumber(1000, 10000)
// };

const createAdvertisements = () => {
  const author = {
    avatar: 'img/avatars/user' + createImgNumber () + '.png,'
  };

  return {
    author
  };
};

const similarAdvertisements = Array.from({length: 10}, createAdvertisements);

// eslint-disable-next-line no-console
console.log(similarAdvertisements);




