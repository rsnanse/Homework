const queryObj = {
  search: "Вася",
  take: 10,
};

function createQuerryToString(object) {
  return Object.entries(object)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
}

console.log(createQuerryToString(queryObj));
