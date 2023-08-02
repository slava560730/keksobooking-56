const formContainer = document.querySelector('.ad-form');
const typeContainer = formContainer.querySelector('#type');
const priceSlider = document.querySelector('.ad-form__slider');
const priceValue = document.querySelector('#price');

const PRICE = {
  min: 0,
  max: 100000
};
const  PRICE_STEP = 1;

const TYPES = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

priceValue.value = TYPES.flat;

// Создаем слайдер

noUiSlider.create(priceSlider, {
  range: {
    min: PRICE.min,
    max: PRICE.max,
  },
  start: TYPES.flat,
  step: PRICE_STEP,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

priceSlider.noUiSlider.on('update', () => {
  priceValue.value = priceSlider.noUiSlider.get();
});

// Код синхронизации типа жилища с минимальной ценой
typeContainer.addEventListener('change', () => {
  const type = typeContainer.value;

  if (type === 'flat') {
    priceSlider.noUiSlider.updateOptions({
      start: TYPES.flat,
    });

  }

  if (type === 'palace') {
    priceSlider.noUiSlider.updateOptions({
      start: TYPES.palace,
    });
  }

  if (type === 'bungalow') {
    priceSlider.noUiSlider.updateOptions({
      start: TYPES.bungalow,
    });
  }

  if (type === 'hotel') {
    priceSlider.noUiSlider.updateOptions({
      start: TYPES.hotel,
    });
  }

  if (type === 'house') {
    priceSlider.noUiSlider.updateOptions({
      start: TYPES.house,
    });
  }
});

// Возврат слайдера в исходное состояние

const resetSlider = () => {
  priceSlider.noUiSlider.set(PRICE.min);
}

// Код для отключения отображения слайдера

// priceSlider.setAttribute('disabled', true);

// Код для включения отображения слайдера

priceSlider.removeAttribute('disabled');

export {resetSlider};
