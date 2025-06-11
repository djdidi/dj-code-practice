type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      ans.push(arr[i]);
    }
  }

  return ans;
}

filter([0, 10, 20, 30], function greaterThan10(n) {
  return n > 10;
});

export {};
