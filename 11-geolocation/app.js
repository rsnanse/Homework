'use strict';

function getMyPosition() {
  const { resolve, reject, promise } = Promise.withResolvers();

  navigator.geolocation.getCurrentPosition(
    (position) => {
      if (!position) {
        reject(new Error('Ошибка в опредлении геопозиции'));
      }
      let myCoords = `Мои координаты: Широта: ${position.coords.latitude}, Долгота: ${position.coords.longitude}`;
      resolve(myCoords);
    },
    (error) => {
      reject(new Error(error.message));
    },
  );

  return promise;
}

getMyPosition()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
