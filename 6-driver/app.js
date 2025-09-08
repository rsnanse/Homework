const user = "Nicko";
const hasLicense = true;
const age = 18;
const isDrunk = false;

const canDrive = age >= 18 && hasLicense && !isDrunk;

console.log(
  `Водитель ${user} ${
    canDrive ? "может водить автомобиль" : "не может водить автомобиль"
  }`
);
