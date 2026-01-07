"use strict";

function playDice(dice) {
  const allDices = [
    { name: "d4", value: 4 },
    { name: "d6", value: 6 },
    { name: "d8", value: 8 },
    { name: "d10", value: 10 },
    { name: "d12", value: 12 },
    { name: "d16", value: 16 },
    { name: "d20", value: 20 },
  ];
  const min = 1;
  let max = allDices.find((el) => el.name === dice);
  if (!max) {
    return null;
  }
  return Math.floor(Math.random() * (max.value - min + 1) + min);
}

console.log(playDice("d4"));
