function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const index = map.get(target - nums[i]);
    if (Number.isInteger(index)) {
      return [index, i];
    }
    map.set(nums[i], i);
  }

  return [-1, -1];
}

// [0, 1]
console.log(twoSum([2, 7, 11, 15], 9));
// [1, 2]
console.log(twoSum([3, 2, 4], 6));
// // [0, 1]
console.log(twoSum([3, 3], 6));
// // [1, 2]
console.log(twoSum([2, 5, 5, 11], 10));

export {};
