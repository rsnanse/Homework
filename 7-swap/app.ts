const obj: Record<string, number> = {
  a: 1,
  b: 2,
};

function swapKeysAndValues<T extends Record<string, number>>(
  obj: T,
): Record<number, string> | undefined {
  if (obj) {
    const asd = Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [Number(v), k] as const), // Важно: as const
    );
    return asd;
  } else {
    return undefined;
  }
}

const res = swapKeysAndValues(obj);
console.log(res);
