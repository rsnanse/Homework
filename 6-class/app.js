"use strict";

class Car {
  #brand;
  #model;
  #_mileage;
  constructor(brand, model, mileage) {
    this.#brand = brand;
    this.#model = model;
    this.#mileage = mileage;
  }
  set #mileage(data) {
    this.#_mileage = data;
  }

  get #mileage() {
    return this.#_mileage;
  }

  changeMileage(newMileage) {
    return (this.#mileage = newMileage);
  }

  info() {
    console.log(this.#brand, this.#model, this.#mileage);
  }
}

const car = new Car("BMW", "X5", "50000");
console.log(car);
car.changeMileage("90000");
console.log(car);

car.info();
