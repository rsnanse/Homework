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

function hashFn(key: string | number): number {
  if (typeof key === 'string') {
    let hash = 5381;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * 33) ^ key.charCodeAt(i);
    }
    return Math.abs(hash);
  } else if (typeof key === 'number') {
    let hash = key;
    hash = ((hash >> 16) ^ hash) * 0x45d9f3b;
    hash = ((hash >> 16) ^ hash) * 0x45d9f3b;
    hash = (hash >> 16) ^ hash;
    return hash >>> 0;
  } else {
    throw new Error('Ошибка');
  }
}

interface Bucket {
  bucketKey: number | string;
  bucketValue: unknown[][];
}

class Map {
  private buckets!: Bucket[];

  constructor() {
    this.buckets = [];
  }

  set(key: number | string, value: number | string): void {
    let tmp = hashFn(key);
    const tmp2 = this.buckets.find(
      (el: Bucket): boolean => el.bucketKey === tmp,
    );
    if (tmp2) {
      const element = tmp2.bucketValue.find((el) => el.includes(key));
      if (element) {
        element.push(value);
      }
    } else {
      this.buckets.push({ bucketKey: tmp, bucketValue: [[key, value]] });
    }
  }

  delete(key: number | string): void {
    let tmp = hashFn(key);
    const tmp2 = this.buckets.find(
      (el: Bucket): boolean => el.bucketKey === tmp,
    );
    if (tmp2) {
      tmp2.bucketValue = tmp2.bucketValue.filter((el) => el[0] !== key);
    }
    if (tmp2?.bucketValue.length === 0) {
      this.buckets = this.buckets.filter((el) => el.bucketKey !== key);
    } else {
      return;
    }
  }

  get(key: number | string): string | undefined {
    let tmp = hashFn(key);
    const tmp2 = this.buckets.find(
      (el: Bucket): boolean => el.bucketKey === tmp,
    );
    if (tmp2) {
      const res = tmp2.bucketValue
        .find((el) => el[0] === key)
        ?.filter((el) => el !== key);

      if (res) {
        return res.toString();
      }
    } else {
      return;
    }
  }

  clear(): void {
    this.buckets = [];
  }
}

const map = new Map();
