import {getRandomNumber} from './util.js';
import {getRandomFloat} from './util.js';
import {getRandomArrayElement} from './util.js';

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
  '14:00'
];
const FEATURES = [
  'wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'
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
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const MIN_IMG_NUMBER = 1;
const MAX_IMG_NUMBER = 10;
const numbers = [];

const MIN_PRICE = 1000;
const MAX_PRICE = 10000;

const MIN_ROOMS = 1;
const MAX_ROOMS = 5;

const MIN_GUESTS = 1;
const MAX_GUESTS = 4;

const MIN_LOCATION_LAT = 35.65000;
const MAX_LOCATION_LAT = 35.70000;
const LOCATION_LAT_DECIMALS = 5;

const MIN_LOCATION_LNG = 139.70000;
const MAX_LOCATION_LNG = 139.80000;
const LOCATION_LNG_DECIMALS = 5;

const ADVERTISEMENTS = 1;

function createImgNumber () {
  const randomIndex = getRandomNumber(0, numbers.length - 1);
  const random = Number(numbers.splice(randomIndex, 1));

  return random < MAX_IMG_NUMBER ? `0${random}`: random;
}

function createNumbers (min, max) {

  for (let i = min; i <= max; i++) {
    numbers.push(i);
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

function syncTypes() {
  const randomTypes = getRandomArrayElement(TYPES);
  let type;
  switch (randomTypes) {
    case 'flat':
      type ='Квартира';
      break;
    case 'palace':
      type ='Дворец';
      break;
    case 'bungalow':
      type ='Бунгало';
      break;
    case 'house':
      type ='Дом';
      break;
    case 'hotel':
      type ='Отель';
      break;
  }

  return type;
}

const  createAdvertisements= () => {
  const author = {
    avatar: `img/avatars/user${createImgNumber()}.png`
  };
  const location = {
    lat: getRandomFloat (MIN_LOCATION_LAT, MAX_LOCATION_LAT, LOCATION_LAT_DECIMALS),
    lng: getRandomFloat (MIN_LOCATION_LNG, MAX_LOCATION_LNG, LOCATION_LNG_DECIMALS)
  };
  const offer = {
    title: getRandomArrayElement(TITLES),
    address: location,
    price: getRandomNumber(MIN_PRICE, MAX_PRICE),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomNumber(MIN_ROOMS, MAX_ROOMS),
    guests: getRandomNumber(MIN_GUESTS, MAX_GUESTS),
    checkin: getRandomArrayElement(TIME),
    checkout: getRandomArrayElement(TIME),
    features: getRandomElement(FEATURES),
    description: getRandomArrayElement(DESCRIPTIONS),
    photos: getRandomElement(PHOTOS)
  };

  return {
    author, offer, location
  };
};

createNumbers (MIN_IMG_NUMBER, MAX_IMG_NUMBER);
const similarAdvertisements = Array.from({length: ADVERTISEMENTS}, createAdvertisements);

export {similarAdvertisements};
export {syncTypes};

