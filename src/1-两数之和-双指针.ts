function twoSum(_nums: number[], target: number): number[] {
  const nums = _nums.map((val, originIndex) => ({ val, originIndex }));

  // 假设排序算法时间复杂度是"理论最优" O(nlogN)
  nums.sort((a, b) => a.val - b.val);

  let left = 0;
  let right = nums.length - 1;

  // O(n)
  while (left < right) {
    const sum = nums[left].val + nums[right].val;
    if (sum === target) {
      return [nums[left].originIndex, nums[right].originIndex];
    }

    if (sum < target) {
      left++;
    }

    if (sum > target) {
      right--;
    }
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
