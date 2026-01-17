'use strict';

const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();

request.addEventListener('load', function () {
  const data = JSON.parse(this.responseText).abilities[0].ability.url;

  const request = new XMLHttpRequest();
  request.open('GET', data);
  request.send();
  request.addEventListener('load', function () {
    const data2 = JSON.parse(this.responseText).effect_entries;
    const result = data2.find((el) => el.language.name === 'en');
    if (!result) {
      return;
    }
    console.log(result.effect);
  });
});
