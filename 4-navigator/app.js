/* Чтобы рассчитать дистанцию между двумя объектами, используем формулу, основанную на теореме Пифагора, если точки А(x₁, y₁) и B(x₂, y₂)находятся на плоскости: 
d = √((x₁ - x₂)² + (y₁ - y₂)²) */

/* 
latitude (широта) и longitude (долгота).

addressLatX - адрес назначения lat 
addressLongY - адрес назначения long
positionLatX - текущее положение пользователя lat
positionLongY - текущее положение пользователя long

*/

let positionLatX, positionLongY, addressLatX, addressLongY;

positionLatX = 10;
positionLongY = 15;
addressLatX = 23;
addressLongY = 43;

const distance = Math.sqrt(
  (positionLatX - addressLatX) ** 2 + (positionLongY - addressLongY) ** 2
);

console.log(distance);
