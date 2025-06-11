type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x) {
    return functions.reduceRight((accum, fn) => fn(accum), x);
  };
}

const fn = compose([
  // fns
  (x) => x + 1,
  (x) => x * x,
  (x) => 2 * x,
]);

console.log(fn(4)); // 65

export {};