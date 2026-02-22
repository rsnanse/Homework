"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obj = {
    a: 1,
    b: 2,
};
function swapKeysAndValues(obj) {
    if (obj) {
        const asd = Object.fromEntries(Object.entries(obj).map(([k, v]) => [Number(v), k]));
        return asd;
    }
    else {
        return undefined;
    }
}
const res = swapKeysAndValues(obj);
console.log(res);
//# sourceMappingURL=app.js.map