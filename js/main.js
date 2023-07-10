// Функция, возвращающая случайное целое число из переданного диапазона включительно:


function getRandomNumber (min, max) {
  if (max <= 0 || min <= 0) {
    console.log('Диапазон может быть только положительный');
  }
  else if (max <= min) {
    console.log('Максимальное значение не может быть меньше или равно минимальному');
  }
  else {
    return Math.floor(Math.random() * (max - min) + min);
  }
}


// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function getRandomFloat (min, max, decimals) {
  if (max <= 0 || min <= 0) {
    console.log('Диапазон может быть только положительный');
  }
  else if (max <= min) {
    console.log('Максимальное значение не может быть меньше или равно минимальному');
  }
  else {
    return (Math.random() * (max - min) + min).toFixed(decimals);
  }
}
