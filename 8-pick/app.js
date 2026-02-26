"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: 'Vasiliy',
    age: 8,
    skills: ['typescript', 'javascript'],
};
function pickObjectKeys(obj, key) {
    const resArr = key.map((k) => [k, obj[k]]);
    return Object.fromEntries(resArr);
}
const res = pickObjectKeys(user, ['age', 'skills']);
console.log(res);
//# sourceMappingURL=app.js.map