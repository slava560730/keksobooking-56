import {enableForm, formContainer} from './form.js';
import {similarAdvertisements} from './data.js';
import {createPopup} from './generateCard.js';

const addressContainer = formContainer.querySelector('#address');
const resetButton = document.querySelector('.ad-form__reset');

const CENTER_TOKYO = {
  lat: 35.6895,
  lng: 139.69171,
};
const ZOOM = 10;

const DECIMALS = 5;

addressContainer.value =`${CENTER_TOKYO.lat  } ${  CENTER_TOKYO.lng.toString()}`;

const map = L.map('map-canvas')
  .on('load', () => {
    enableForm();
  })
  .setView(
    CENTER_TOKYO
    , ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const simplePinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainPinMarker = L.marker(
  CENTER_TOKYO,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const currentLocation = evt.target.getLatLng();
  addressContainer.value =`${currentLocation.lat.toFixed(DECIMALS)  } ${  currentLocation.lng.toFixed(DECIMALS).toString()}`;
});

resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng(CENTER_TOKYO);

  map.setView(CENTER_TOKYO, ZOOM);
});

const offer = similarAdvertisements.offer;
console.log(offer);

similarAdvertisements.forEach(({location, offer}) => {
  const marker = L.marker(
    location,
    {
      icon: simplePinIcon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(createPopup);
});
