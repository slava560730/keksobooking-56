import './generateCard.js';
import {createMarker} from './map.js';
// import {createSuccessMessege} from './messeges.js';

// Получаем данные от сервера

fetch('https://26.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((advertisements) => {
    advertisements.forEach(({location, offer, author}) => {
      createMarker({location, offer, author});
    });
  });

// Отправляем данные на сервер

// const onSuccess = () => {
//   createSuccessMessege();
// }


//   const sendData = (onSuccess, onError) => {
//     const formData = new FormData;
//     fetch('https://26.javascript.pages.academy/keksobooking/404', {
//       method: 'POST',
//       body: formData,
//     })
//       .then((response) => {
//         if (response.ok) {
//           onSuccess();
//         } else {
//           onError();
//         }
//       })
//       .catch(() => {
//         onError();
//       });
//   };

// export {sendData, onSuccess};
