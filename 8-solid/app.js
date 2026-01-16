"use strict";

class Billing {
  constructor(amount) {
    this.amount = amount;
  }

  calculateTotal() {
    return this.amount;
  }
}

class FixBilling extends Billing {}

class HourBilling extends Billing {
  constructor(amount, hours) {
    super(amount);
    this.hours = hours;
  }

  calculateTotal() {
    return this.amount * this.hours;
  }
}

class ItemBilling extends Billing {
  constructor(amount, item) {
    super(amount);
    this.item = item;
  }

  calculateTotal() {
    return this.amount * this.item;
  }
}

const fixBill = new FixBilling(123);
console.log(fixBill);
console.log(fixBill.calculateTotal());

const hourBill = new HourBilling(25, 2);
console.log(hourBill);
console.log(hourBill.calculateTotal());

const itemBill = new ItemBilling(12, 2);
console.log(itemBill);
console.log(itemBill.calculateTotal());
