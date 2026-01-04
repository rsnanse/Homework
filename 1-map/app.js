"use strict";

const obj = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];

let uniqueObj = [];

let arrayOfId = obj.map((el) => el.id);

let arrayOfUniqueId = [...new Set(arrayOfId)];

for (const element of arrayOfUniqueId) {
  uniqueObj.push(obj.find((el) => el.id === element));
  console.log(uniqueObj);
}
