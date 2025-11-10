const initialCard = "4561-2612-1234-5464";

function lunaCheck(card) {
  card = card.split("-").join("");
  for (const element of card) {
    if (
      card.startsWith("0") ||
      isNaN(element) ||
      card.length < 13 ||
      card.length > 19
    ) {
      return false;
    }
  }
  let res = [];
  for (let i = 0; i < card.length; i++) {
    if (i % 2 === 0) {
      let intermediateRes = card[i] * 2;
      if (intermediateRes > 9) {
        res.push(intermediateRes - 9);
      } else {
        res.push(intermediateRes);
      }
    } else {
      res.push(card[i]);
    }
  }
  const finalRes = res.reduce((acc, element) => {
    return (acc += Number(element));
  }, 0);

  return finalRes % 10 === 0;
}

console.log(lunaCheck(initialCard));
