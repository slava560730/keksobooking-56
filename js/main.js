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
const numbers = [];
const FEATURES = [
  'wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const TITLES = [
  'Tairamachi Chome House',
  'Yoyogi Cho Me House',
  'Ebisu Minami Cho Me House',
  'Den Enchofu Cho Me House',
  'Minamiazabu Cho Me Residence',
  'Hill Peak Tokiwamatsu',
  'Kasumicho Pool House',
  'Hakone Sengokuhara Garden Villa',
  'Kito Minamihayama',
  'Glass Facade Residence'
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const DESCRIPTIONS = [
  'A luxury designer apartment located in a high-class residential area which is locally called Chojamaru.',
  'Only 1 min. walk from Daikanyama Sta.! This location makes it possible to enjoy Daikanyama life completely.',
  'A Toyota Home branded custom house located in a quiet residential area.',
  'The two-by-four construction house of a traditional Georgian architecture style comes with planning for comfort and function as well as a refined design.',
  'This house is nicely located in a quiet residential area of Akasaka 7-chome, within easy reach of 5 stations and within walking distance of Tokyo Midtown.',
  'The property is located in a peaceful luxury residential neighborhood in Gotanda. Nemunoki-no-niwa (silk tree garden) Park is found nearby.',
  'Quiet residential neighborhood surrounded with greenery. You can enjoy peaceful time in the large garden. It has been rented by foreigners, fully renovated as well.',
  'It is located in a quiet residential neighborhood near Yoyogi Uehara.',
  'Located in a quiet residential area within an 8-min walk of Kaminoge Station. It is a house facing south having plenty of sunlight. ',
  'Located close to Shimokitazawa, which continues to change day by day. '
];

function createNumbers (min, max) {
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }
}


function createImgNumber () {
  // const newImages = [];
  const randomIndex = getRandomNumber(0, numbers.length - 1);
  const random = Number(numbers.splice(randomIndex, 1));
  // newImages.push(random);
  return random < 10 ? `0${random}`: random;
}

// console.log(createImgNumber ())

// eslint-disable-next-line no-shadow
function getFeatures(FEATURES) {
  const maxLength = FEATURES.length;
  const lenghtOfArray = getRandomNumber(1, maxLength);
  const randomFeatures = [];

  while (randomFeatures.length < lenghtOfArray) {
    const indexOfEl = getRandomNumber(0, maxLength - 1);
    const el = FEATURES[indexOfEl];

    if (!randomFeatures.includes(el)) {
      randomFeatures.push(el);
    }
  }
  return randomFeatures;
}

// console.log(getFeatures(FEATURES));


// eslint-disable-next-line no-shadow
function getPhotos(PHOTOS) {
  const maxLength = PHOTOS.length;
  const lenghtOfArray = getRandomNumber(1, maxLength);
  const randomPHOTOS = [];

  while (randomPHOTOS.length < lenghtOfArray) {
    const indexOfEl = getRandomNumber(0, maxLength - 1);
    const el = PHOTOS[indexOfEl];

    if (!randomPHOTOS.includes(el)) {
      randomPHOTOS.push(el);
    }
  }
  return randomPHOTOS;
}

// console.log(getPhotos(PHOTOS));

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const  createAdvertisements= () => {
  const AUTHOR = {
    avatar: `img/avatars/user${  createImgNumber ()  }.png,`
  };
  const OFFER = {
    title: getRandomArrayElement(TITLES),
    address: '{location.lat}, {{location.lng}',
    price: getRandomNumber(1000, 10000),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomNumber(1, 4),
    guests: getRandomNumber(1, 4),
    checkin: getRandomArrayElement(TIME),
    checkout: getRandomArrayElement(TIME),
    features: getFeatures(FEATURES).toString(),
    description: getRandomArrayElement(DESCRIPTIONS),
    photos: getPhotos(PHOTOS).toString()
  };
  const LOCATION = {
    lat: getRandomFloat (35.65000, 35.70000, 5),
    lng: getRandomFloat (139.70000, 139.80000, 5)
  };
  return {
    AUTHOR, OFFER, LOCATION
  };
};

createNumbers (1, 10);
const similarAdvertisements = Array.from({length: 10}, createAdvertisements);


// eslint-disable-next-line no-console
console.log(similarAdvertisements);


