declare module 'sort-by' {
  function sortBy<T>(...args: Array<string | ((key: string, value: any) => any)>): (a: T, b: T) => number;
}
