const arr = [3, 6, 9, 2];

function deleteElement(num) {
  if (num > 5) {
    return true;
  } else {
    return false;
  }
}

function sortArray(fn, array) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    const result = fn(array[i]);
    if (result === false) {
      newArr.push(array[i]);
    } else {
      continue;
    }
  }
  return newArr;
}
const result = sortArray(deleteElement, arr);
console.log(result);
