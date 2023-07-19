import {similarAdvertisements} from './data.js';
import {fillInnPhotos, removeElement} from './util.js';

const containerOfAdds = document.querySelector('.map__canvas');
const addCardTemplate = document.querySelector('#card').content;
const CardTemplate = addCardTemplate.querySelector('.popup');

function checkValueOfPhoto (element, photos) {
  if (photos.length > 0) {
    fillInnPhotos(element, photos);
  } else {
    removeElement(element);
  }
}

const generateAdvertisements = similarAdvertisements;

generateAdvertisements.forEach((el) => {
  const {offer, author} = el;
  const CardElement = CardTemplate.cloneNode(true);
  const photoContainer = CardElement.querySelector('.popup__photos');
  CardElement.querySelector('.popup__title').textContent = offer.title;
  // CardElement.querySelector('.popup__text--address').textContent = offer.address;
  // CardElement.querySelector('.popup__text--price').textContent = `${offer.price  }₽/ночь`;
  // CardElement.querySelector('.popup__type').textContent = syncTypes();
  // CardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms  } комнаты для ${  offer.guests}`;
  // CardElement.querySelector('.popup__text--time').textContent = `Заезд послe ${  offer.checkin}`, `выезд до ${  offer.checkout}`;
  // CardElement.querySelector('.popup__features').textContent = offer.features;
  // CardElement.querySelector('.popup__description').textContent = offer.description;
  // // CardTemplate.getSrc();
  CardElement.querySelector('.popup__avatar').setAttribute('src', author.avatar);
  photoContainer.querySelector('.popup__photo').remove();
  checkValueOfPhoto(photoContainer, offer.photos);
  containerOfAdds.appendChild(CardElement);
});

// mapcanv.appendChild(generateAdvertisements);

console.log(generateAdvertisements);
