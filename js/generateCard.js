import {createAdvertisements} from './data.js';
import {PHOTOS} from './data.js';

const photos = document.querySelector('.popup__photos');
const photo = photos.querySelector('.popup__photo');

const CardTemplate = document.querySelector('.card');
const similarAdvertisements = createAdvertisements();

const getSrc = function () {
  for (i = 0; i < PHOTOS.length; i ++) {
    const imgElement = document.createElement('img');
    imgElement.classList.add('popup__photo');
    imgElement.setAttribute('src', PHOTOS[i])
  }

  return getSrc;
}

similarAdvertisements.forEach((offer, author) => {
  const CardElement = CardTemplate.cloneNode(true);
  CardElement.querySelector('.popup__title').textContent = offer.title;
  CardElement.querySelector('.popup__text--address').textContent = offer.address;
  CardElement.querySelector('.popup__text--price').textContent = offer.price + '₽/ночь';
  // CardElement.querySelector('.popup__type').textContent = offer.type;
  CardElement.querySelector('.popup__text--time').textContent = 'Заезд послe ' + offer.checkin, 'выезд до ' + (offer.checkout);
  CardElement.querySelector('.popup__features').textContent = offer.features;
  CardElement.querySelector('.popup__description').textContent = offer.description;
  //
  CardElement.querySelector('.popup__avatar').setAttribute('src', author.avatar);
CardTemplate.appendChild(CardElement);
});

