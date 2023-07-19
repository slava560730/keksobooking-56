import {similarAdvertisements} from './data.js';
import {PHOTOS} from './data.js';
import {syncTypes} from './data.js';

const CardTemplate = document.querySelector('.card');

function getSrc() {
  const photos = document.querySelector('.popup__photos');

  for (let i = 0; i < PHOTOS.length; i ++) {
    const imgElement = document.createElement('img');
    imgElement.classList.add('popup__photo');
    imgElement.setAttribute('src', PHOTOS[i]);
    photos.appendChild(imgElement);
  }

  return getSrc;
}

const generateAdvertisements = similarAdvertisements();

generateAdvertisements.forEach((offer, author) => {
  const CardElement = CardTemplate.cloneNode(true);
  CardElement.querySelector('.popup__title').textContent = offer.title;
  CardElement.querySelector('.popup__text--address').textContent = offer.address;
  CardElement.querySelector('.popup__text--price').textContent = `${offer.price  }₽/ночь`;
  CardElement.querySelector('.popup__type').textContent = syncTypes();
  CardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms  } комнаты для ${  offer.guests}`;
  CardElement.querySelector('.popup__text--time').textContent = `Заезд послe ${  offer.checkin}`, `выезд до ${  offer.checkout}`;
  CardElement.querySelector('.popup__features').textContent = offer.features;
  CardElement.querySelector('.popup__description').textContent = offer.description;
  // CardTemplate.getSrc();
  CardElement.querySelector('.popup__avatar').setAttribute('src', author.avatar);
  CardTemplate.appendChild(CardElement);
});

const mapcanv = document.querySelector('.map-canvas');
mapcanv.appendChild(generateAdvertisements);
