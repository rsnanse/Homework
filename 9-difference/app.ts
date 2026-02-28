interface IA {
  a: number;
  b: string;
}

interface IB {
  a: number;
  c: boolean;
}

let a: IA = { a: 5, b: '' };
let b: IB = { a: 10, c: true };

interface IDifference {
  b: string;
}

type UniqueProperty = Pick<IA, Exclude<keyof IA, keyof IB>>;

function difference(objA: IA, objB: IB): UniqueProperty {
  const keys = Object.keys(objA);
  let res: Record<string, any> = {};
  keys.map((el) => {
    if (!(el in objB)) {
      res[el] = objA[el as keyof IA];
    }
  });
  return res as UniqueProperty;
}

let res: IDifference = difference(a, b);
console.log(res);
