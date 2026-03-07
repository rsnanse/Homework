class User {
  @allowFunc((a: number) => a > 0)
  age: number = 30;
}

function allowFunc(ValidateFn: (a: number) => boolean) {
  return (target: Object, propertyKey: string | symbol) => {
    let value: number;
    const setter = function (newValue: number) {
      if (ValidateFn(newValue)) {
        value = newValue;
      } else {
        console.log('Недопустимый параметр');
      }
    };
    const getter = function () {
      return value;
    };
    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    });
  };
}

const person = new User();
console.log(person.age); // 30

person.age = 0;
console.log(person.age); // 30

person.age = 20;
console.log(person.age); // 20
