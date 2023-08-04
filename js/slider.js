const formContainer = document.querySelector('.ad-form');
const typeContainer = formContainer.querySelector('#type');
const priceSlider = document.querySelector('.ad-form__slider');
const priceValue = document.querySelector('#price');

const PRICE = {
  min: 0,
  max: 100000
};
const  PRICE_STEP = 1;

const TypesNames = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

priceValue.value = TypesNames.flat;

// Создаем слайдер

noUiSlider.create(priceSlider, {
  range: {
    min: PRICE.min,
    max: PRICE.max,
  },
  start: TypesNames.flat,
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

const onSyncType = () => {
  const type = typeContainer.value;

  if (type === 'flat') {
    priceSlider.noUiSlider.updateOptions({
      start: TypesNames.flat,
    });

  }

  if (type === 'palace') {
    priceSlider.noUiSlider.updateOptions({
      start: TypesNames.palace,
    });
  }

  if (type === 'bungalow') {
    priceSlider.noUiSlider.updateOptions({
      start: TypesNames.bungalow,
    });
  }

  if (type === 'hotel') {
    priceSlider.noUiSlider.updateOptions({
      start: TypesNames.hotel,
    });
  }

  if (type === 'house') {
    priceSlider.noUiSlider.updateOptions({
      start: TypesNames.house,
    });
  }
};

typeContainer.addEventListener('change', onSyncType);

// Возврат слайдера в исходное состояние

const resetSlider = () => {
  priceSlider.noUiSlider.set(PRICE.min);
};

// Код для отключения отображения слайдера

// priceSlider.setAttribute('disabled', true);

// Код для включения отображения слайдера

priceSlider.removeAttribute('disabled');

export {resetSlider};
