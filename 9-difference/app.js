"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = { a: 5, b: '' };
let b = { a: 10, c: true };
function difference(objA, objB) {
    const keys = Object.keys(objA);
    let res = {};
    keys.map((el) => {
        if (!(el in objB)) {
            res[el] = objA[el];
        }
    });
    return res;
}
let res = difference(a, b);
console.log(res);
//# sourceMappingURL=app.js.map