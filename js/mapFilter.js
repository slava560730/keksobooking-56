const filterForm = document.querySelector('.map__filters');
const filterType = filterForm.querySelector('#housing-type');
const filterPrice = filterForm.querySelector('#housing-price');
const filterRoom = filterForm.querySelector('#housing-rooms');
const filterGuest = filterForm.querySelector('#housing-guests');
const filterFeatures = filterForm.querySelectorAll('.map__checkbox');

const FILTER_PRICE = {
  min: 10000,
  max: 50000
};

const checkType = (Type) => {
  const filterTypeSelect = filterType.value;

  return filterTypeSelect === 'any' || filterTypeSelect === Type;
};

const checkPrice = (Price) => {
  const filterPriceSelect = filterPrice.value;
  const advertPrice = Number(Price);

  if (filterPriceSelect === 'any') {
    return true;
  }
  if (filterPriceSelect === 'low') {
    return advertPrice < FILTER_PRICE.min;
  }
  if (filterPriceSelect === 'middle') {
    return advertPrice >= FILTER_PRICE.min && advertPrice <= FILTER_PRICE.max;
  }
  if (filterPriceSelect === 'high') {
    return advertPrice > FILTER_PRICE.max;
  }
};

const checkRooms = (Rooms) => {
  const filterRoomSelect = filterRoom.value;

  return filterRoomSelect === 'any' || Number(filterRoomSelect) === Number(Rooms);
};

const checkGuests = (Guests) => {
  const filterGuestSelect = filterGuest.value;

  return filterGuestSelect === 'any' || Number(filterGuestSelect) === Number(Guests);
};

const checkFeature = (Feature) => {
  const checkedFilterFeatures = [];
  const advertFeatures = Feature;

  filterFeatures.forEach((feature) => {
    if (feature.checked) {
      checkedFilterFeatures.push(feature.value);
    }
  });

  if (checkedFilterFeatures.length === 0) {
    return true;
  }
  if (checkedFilterFeatures.length && advertFeatures) {
    return checkedFilterFeatures.every((feature) => advertFeatures.includes(feature));
  }
};

const checkAdvert = ({ offer }) => {
  const { type, price, rooms, guests, features } = offer;

  return (
    checkType(type) &&
    checkPrice(price) &&
    checkRooms(rooms) &&
    checkGuests(guests) &&
    checkFeature(features)
  );
};

const setFilter = (cb) => {
  filterForm.addEventListener('change', () => {
    cb();
  });
};

export {checkAdvert, setFilter};
