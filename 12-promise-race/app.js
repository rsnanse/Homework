'use strict';

async function getQuote(id) {
  try {
    const quoteResponse = await fetch('https://dummyjson.com/quotes/' + id);

    const data = await quoteResponse.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

async function race(array) {
  try {
    const res = await Promise.race(array);
    console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
}
race([getQuote(1), getQuote(4), getQuote(6)]);
