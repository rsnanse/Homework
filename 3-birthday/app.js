"use strict";

function validAge(date) {
  const birthDate = new Date(date);
  const fourteenYearsLater = new Date(birthDate);
  fourteenYearsLater.setFullYear(birthDate.getFullYear() + 14);
  const now = new Date();

  if (now > fourteenYearsLater) {
    return "Больше 14 лет";
  } else {
    return "Меньше 14 лет";
  }
}

console.log(validAge("2012-01-01"));
