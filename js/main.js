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

const minImgNumber = 1;
const maxImgNumber = 10;
const numbers = [];

const minPrice = 1000;
const maxPrice = 10000;

const minRooms = 1;
const maxRooms = 5;

const minGuests = 1;
const maxGuests = 4;

const minLocationLat = 35.65000;
const maxLocationLat = 35.70000;
const LocationLatDecimals = 5;

const minLocationLng = 139.70000;
const maxLocationLng = 139.80000;
const LocationLngDecimals = 5;

const Advertisements = 10;

function getRandomFloat (min, max, decimals) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));

  return (Math.random() * (upper - lower) + lower).toFixed(decimals);
}

function getRandomNumber (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.floor(Math.random() * (upper - lower + 1) + lower);

  return result;
}

function createNumbers (min, max) {

  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }
}

function createImgNumber () {
  const randomIndex = getRandomNumber(0, numbers.length - 1);
  const random = Number(numbers.splice(randomIndex, 1));

  return random < maxImgNumber ? `0${random}`: random;
}

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

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];


const  createAdvertisements= () => {
  const author = {
    avatar: `img/avatars/user${  createImgNumber ()  }.png,`
  };
  const location = {
    lat: getRandomFloat (minLocationLat, maxLocationLat, LocationLatDecimals),
    lng: getRandomFloat (minLocationLng, maxLocationLng, LocationLngDecimals)
  };
  const offer = {
    title: getRandomArrayElement(TITLES),
    address: location,
    price: getRandomNumber(minPrice, maxPrice),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomNumber(minRooms, maxRooms),
    guests: getRandomNumber(minGuests, maxGuests),
    checkin: getRandomArrayElement(TIME),
    checkout: getRandomArrayElement(TIME),
    features: getFeatures(FEATURES),
    description: getRandomArrayElement(DESCRIPTIONS),
    photos: getPhotos(PHOTOS)
  };

  return {
    author, offer, location
  };
};

createNumbers (minImgNumber, maxImgNumber);
const similarAdvertisements = Array.from({length: Advertisements}, createAdvertisements);


