import {similarAdvertisements, syncTypesToRussian} from './data.js';
import {checkValueOfPhoto, checkValueOfElement, inclineTermonOfRooms, inclineTermonOfGuests} from './util.js';

const addCardTemplate = document.querySelector('#card').content;
const CardTemplate = addCardTemplate.querySelector('.popup');

similarAdvertisements.forEach(({offer, author}) => {
  const CardElement = CardTemplate.cloneNode(true);
  const photoContainer = CardElement.querySelector('.popup__photos');
  const titleContainer = CardElement.querySelector('.popup__title');
  const adressContainer = CardElement.querySelector('.popup__text--address');
  const priceContainer = CardElement.querySelector('.popup__text--price');
  const typeContainer =  CardElement.querySelector('.popup__type');
  const capacityContainer =  CardElement.querySelector('.popup__text--capacity');
  const timeContainer =  CardElement.querySelector('.popup__text--time');
  const featuresContainer =  CardElement.querySelector('.popup__features');
  const descriptionContainer =  CardElement.querySelector('.popup__description');
  const avatarContainer =  CardElement.querySelector('.popup__avatar');

  checkValueOfElement(titleContainer, offer.title);
  checkValueOfElement(adressContainer, offer.address);
  checkValueOfElement(priceContainer, `${offer.price  } ₽/ночь`);
  checkValueOfElement(typeContainer, syncTypesToRussian(offer.type));
  checkValueOfElement(capacityContainer, `${offer.rooms + inclineTermonOfRooms(offer.rooms)  }  для ${  offer.guests + inclineTermonOfGuests(offer.guests)}`);
  checkValueOfElement(timeContainer, `Заезд послe ${  offer.checkin}, выезд до ${  offer.checkout}`);
  checkValueOfElement(featuresContainer, offer.features);
  checkValueOfElement(descriptionContainer, offer.description);
  checkValueOfElement(avatarContainer, author.avatar, 'src' );
  photoContainer.querySelector('.popup__photo').remove();
  checkValueOfPhoto(photoContainer, offer.photos);
  const containerOfAdds = document.querySelector('.map__canvas');
  containerOfAdds.appendChild(CardElement);
});


