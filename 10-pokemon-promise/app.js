'use strict';

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then((response) => response.json())
  .then((data) => {
    return fetch(data.abilities[0].ability.url);
  })
  .then((response) => response.json())
  .then((data) => {
    const result = data.effect_entries.find((el) => el.language.name === 'en');
    if (!result) {
      throw new Error(error);
    }
    console.log(result.effect);
  })
  .catch((error) => console.log(error))
  .finally(console.log('Запрос выполнен'));
