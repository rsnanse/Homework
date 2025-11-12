const queryObj = {
  search: "Вася",
  take: 10,
};

function createQuerryToString(object) {
  let names = Object.keys(object);
  let value = [];
  for (keys in object) {
    value.push(object[keys]);
  }

  console.log(names);
  console.log(value);
  return names[0] + "=" + value[0] + "&" + names[1] + "=" + value[1];
}

console.log(createQuerryToString(queryObj));
