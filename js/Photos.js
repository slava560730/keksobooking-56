const avatarFileChooser = document.querySelector('#avatar');
const avatarPreview = document.querySelector('.ad-form-header__preview');
const avatarPreviewImg = avatarPreview.querySelector('img');

const photoFileChooser = document.querySelector('#images');
const photoContainer = document.querySelector('.ad-form__photo');

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const photoPreviewImg = new Image(70, 70);
photoContainer.appendChild(photoPreviewImg);

const SetImages = (container, element) => {
  container.addEventListener('change', () => {
    const file = container.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      element.src = URL.createObjectURL(file);
    }
  });
};

SetImages(avatarFileChooser, avatarPreviewImg);
SetImages(photoFileChooser, photoPreviewImg);

photoFileChooser.addEventListener('change', () => {
  photoPreviewImg.classList.remove('visually-hidden');
});

const resetImg = (img) => {
  img.src = 'img/muffin-grey.svg';
  img.style.width = '40px';
  img.style.height = '44px';
};

const resetImages = () => {
  resetImg(avatarPreviewImg);
  photoPreviewImg.classList.add('visually-hidden');
};

export {resetImages};
