type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

function once(fn: Function): OnceFn {
  let isCalled = false;
  return function (...args) {
    if (isCalled) {
      return undefined;
    }

    isCalled = true;
    return fn(...args);
  };
}

const fn = once((a, b, c) => a + b + c);

console.log(fn(1, 2, 3), 'once!');
console.log(fn(4, 5, 6));
console.log(fn(4, 5, 6));
console.log(fn(4, 5, 6));

export {};