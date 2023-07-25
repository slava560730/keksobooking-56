const formContainer = document.querySelector('.ad-form');
const formFieldsets = formContainer.querySelectorAll('fieldset');
const filtersContainer = document.querySelector('.map__filters');
const filtersFieldsets = filtersContainer.querySelectorAll('fieldset');

const pristine = new Pristine(formContainer);

// function validateTitle (value) {
//   return value.length >= 30 && value.length <= 100;
// }

pristine.addValidator(formContainer.querySelector('#title'), validateTitle, 'От 30 до 100 символов');

formContainer.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValide = pristine.validate();

  if(isValide){
    console.log('Форма валидна!');
  } else {
    console.log('Форма не валидна!');
  }
});

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
