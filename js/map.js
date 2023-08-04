import {enableForm, formContainer} from './form.js';
import {createPopup} from './generateCard.js';
import {resetSlider} from './slider.js';
import {checkAdvert} from './mapFilter.js';
import  {resetImages} from './Photos.js';

const addressContainer = formContainer.querySelector('#address');
const resetButton = document.querySelector('.ad-form__reset');

const CENTER_TOKYO = {
  lat: 35.6895,
  lng: 139.69171,
};
const ZOOM = 12;
const DECIMALS = 5;
const MAX_ADVERTISEMENT = 10;

const IconUrl = {
  mainIcon: './img/main-pin.svg',
  simpleIcon: './img/pin.svg'
};
const SIZE_MAIN_PIN_ICON = [52, 52];
const SIZE_SIMPLE_PIN_ICON = [40, 40];
const ANCHOR_MAIN_PIN_ICON = [26, 52];
const ANCHOR_SIMPLE_PIN_ICON = [20, 40];

// Добавляем карту, при загрузке карты активируем форму

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

// Добавляем иконки и метку

const mainPinIcon = L.icon({
  iconUrl: IconUrl.mainIcon,
  iconSize: SIZE_MAIN_PIN_ICON,
  iconAnchor: ANCHOR_MAIN_PIN_ICON,
});

const simplePinIcon = L.icon({
  iconUrl: IconUrl.simpleIcon,
  iconSize: SIZE_SIMPLE_PIN_ICON,
  iconAnchor: ANCHOR_SIMPLE_PIN_ICON,
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

// Возврат маркера в исходное состояние

const resetMarker = () => {
  mainPinMarker.setLatLng(CENTER_TOKYO);
  map.setView(CENTER_TOKYO, ZOOM).closePopup();
};

const resetMap = () => {
  resetMarker();
  resetSlider();
  resetImages();
};
resetButton.addEventListener('click', resetMap);

// Добавляем новый слой

const markerGroup = L.layerGroup().addTo(map);

// Код для создания метки

const createMarker = ({location, offer, author}) => {
  const marker = L.marker(
    location,
    {
      icon: simplePinIcon,
    },
  );

  marker
    .addTo(markerGroup)
    .bindPopup(createPopup({offer, author}));
};

const createMarkersForAdverts = (advertsData) => {
  markerGroup.clearLayers();

  advertsData
    .filter(({location, offer, author}) => checkAdvert({location, offer, author}))
    .slice(0, MAX_ADVERTISEMENT)
    .forEach(({location, offer, author}) => createMarker({location, offer, author}));
};

// Код для удаления слоя

// markerGroup.clearLayers();

export {createMarker, resetMarker, createMarkersForAdverts, MAX_ADVERTISEMENT};
