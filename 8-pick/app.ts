const user = {
  name: 'Vasiliy',
  age: 8,
  skills: ['typescript', 'javascript'],
};

function pickObjectKeys<T, K extends keyof T>(obj: T, key: K[]): { [P in K]: T[P] } {
  const resArr = key.map((k) => [k, obj[k]]);
  return Object.fromEntries(resArr) as { [P in K]: T[P] };
}

const res = pickObjectKeys(user, ['age', 'skills']);
console.log(res);
