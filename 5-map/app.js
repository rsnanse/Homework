"use strict";
/*
Написать на TypeScript реализацию Map в виде класса. То есть:

Класс Map с методами: set, delete, get, clear
Хранить данные в buckets, hash которых рассчитывать по какой логике
Если hash одинаков, элементы backet связываются друг с другом

Пример:

class Map {
  constructor() {
     Инициализация структуры
  }

  Методы для работы с данными...
}

// Пример добавления данных
let weatherMap = new Map();
weatherMap.add('London', 20);
weatherMap.add('Berlin', 25);
// Пример получения данных
console.log(weatherMap.get('London')); // Выведет 20
*/
Object.defineProperty(exports, "__esModule", { value: true });
function hashFn(key) {
    if (typeof key === 'string') {
        let hash = 5381;
        for (let i = 0; i < key.length; i++) {
            hash = (hash * 33) ^ key.charCodeAt(i);
        }
        return Math.abs(hash);
    }
    else if (typeof key === 'number') {
        let hash = key;
        hash = ((hash >> 16) ^ hash) * 0x45d9f3b;
        hash = ((hash >> 16) ^ hash) * 0x45d9f3b;
        hash = (hash >> 16) ^ hash;
        return hash >>> 0;
    }
    else {
        throw new Error('Ошибка');
    }
}
class Map {
    buckets;
    constructor() {
        this.buckets = [];
    }
    set(key, value) {
        let tmp = hashFn(key);
        const tmp2 = this.buckets.find((el) => el.bucketKey === tmp);
        if (tmp2) {
            const element = tmp2.bucketValue.find((el) => el.includes(key));
            if (element) {
                element[1] = value;
            }
            else {
                tmp2.bucketValue.push([key, value]);
            }
        }
        else {
            this.buckets.push({ bucketKey: tmp, bucketValue: [[key, value]] });
        }
    }
    delete(key) {
        let tmp = hashFn(key);
        const tmp2 = this.buckets.find((el) => el.bucketKey === tmp);
        if (tmp2) {
            tmp2.bucketValue = tmp2.bucketValue.filter((el) => el[0] !== key);
        }
        if (tmp2?.bucketValue.length === 0) {
            this.buckets = this.buckets.filter((el) => el.bucketKey !== tmp);
        }
        else {
            return;
        }
    }
    get(key) {
        let tmp = hashFn(key);
        const tmp2 = this.buckets.find((el) => el.bucketKey === tmp);
        if (tmp2) {
            const element = tmp2.bucketValue.find((el) => el[0] === key);
            if (element) {
                if (typeof element[1] === 'string') {
                    return element[1];
                }
            }
        }
        else {
            return;
        }
    }
    clear() {
        this.buckets = [];
    }
}
const map = new Map();
//# sourceMappingURL=app.js.map