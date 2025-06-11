function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  let ans = new Array(arr.length);

  // 稀疏数组跳过，for...in
  // 预先分配内存+下标写入

  for (let i = 0; i < arr.length; i++) {
    ans.push(fn(arr[i], i));
  }

  return ans;
}

map([1, 2, 3], function plusone(n) {
  return n + 1;
});
