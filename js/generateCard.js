import {syncTypesToRussian, checkValueOfPhoto, checkValueOfElement, inclineTermonOfRooms, inclineTermonOfGuests} from './util.js';

const addCardTemplate = document.querySelector('#card').content;
const CardTemplate = addCardTemplate.querySelector('.popup');

const createPopup = ({offer, author}) => {
  const { avatar } = author;
  const {
    title,
    address,
    price,
    type,
    rooms,
    guests,
    checkin,
    checkout,
    features,
    description,
    photos,
  } = offer;
  const CardElement = CardTemplate.cloneNode(true);
  const photoContainer = CardElement.querySelector('.popup__photos');
  const titleContainer = CardElement.querySelector('.popup__title');
  const addressContainer = CardElement.querySelector('.popup__text--address');
  const priceContainer = CardElement.querySelector('.popup__text--price');
  const typeContainer =  CardElement.querySelector('.popup__type');
  const capacityContainer =  CardElement.querySelector('.popup__text--capacity');
  const timeContainer =  CardElement.querySelector('.popup__text--time');
  const featuresContainer =  CardElement.querySelector('.popup__features');
  const descriptionContainer =  CardElement.querySelector('.popup__description');
  const avatarContainer =  CardElement.querySelector('.popup__avatar');
  checkValueOfElement(titleContainer, title);
  checkValueOfElement(addressContainer, address);
  checkValueOfElement(priceContainer, `${price  } ₽/ночь`);
  checkValueOfElement(typeContainer, syncTypesToRussian(type));
  checkValueOfElement(capacityContainer, `${rooms + inclineTermonOfRooms(rooms)  }  для ${  guests + inclineTermonOfGuests(guests)}`);
  checkValueOfElement(timeContainer, `Заезд послe ${  checkin}, выезд до ${  checkout}`);
  checkValueOfElement(featuresContainer, features);
  checkValueOfElement(descriptionContainer, description);
  checkValueOfElement(avatarContainer, avatar, 'src' );
  photoContainer.querySelector('.popup__photo').remove();
  checkValueOfPhoto(photoContainer, photos);

  return CardElement;
};


export {createPopup};
