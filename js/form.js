const formContainer = document.querySelector('.ad-form');
const formFieldsets = formContainer.querySelectorAll('fieldset');
const filtersContainer = document.querySelector('.map__filters');
const filtersFieldsets = filtersContainer.querySelectorAll('fieldset');

function disableForm() {
  formContainer.classList.add('ad-form--disabled');
  filtersContainer.classList.add('map__filters--disabled');
  formFieldsets.disabled = true;
  filtersFieldsets.disabled = true;
}

function enableForm() {
  formContainer.classList.remove('ad-form--disabled');
  filtersContainer.classList.remove('map__filters--disabled');
  formFieldsets.disabled = false;
  filtersFieldsets.disabled = false;
}

export {disableForm};
export {enableForm};
