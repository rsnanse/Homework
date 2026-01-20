'use strict';

async function getQuote(id) {
  try {
    const quoteResponse = await fetch('https://dummyjson.com/quotes/' + id);

    const data = await quoteResponse.json();
    return data.author;
  } catch (e) {
    console.error(e);
  }
}

async function race() {
  try {
    const res = await Promise.race([getQuote(1), getQuote(4), getQuote(6)]);
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}
race();
