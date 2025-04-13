import { expect, test } from 'vitest';

/**
 * Do not return anything, modify nums in-place instead.
 *
 * 思路：双指针
 * - 头部双指针遍历
 * - 交换值, 把非0的值前移
 *
 * O(N)
 */
function moveZeroes(nums: number[]): void {
  let lastNonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[lastNonZeroIndex]] = [nums[lastNonZeroIndex], nums[i]];
      lastNonZeroIndex++;
    }
  }
}

/**
 * Do not return anything, modify nums in-place instead.
 *
 * 思路：双指针
 * - 头部双指针遍历
 * - 交换值, 把等于0的后移
 *
 * O(N^2)
 */
function moveZeroes2(nums: number[]): void {
  for (let p1 = 0; p1 < nums.length; p1++) {
    let p2 = p1 + 1;
    while (nums[p1] === 0 && p2 < nums.length) {
      [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
      p2++;
    }
  }
}

test('moveZeroes', () => {
  expect(moveZeroes([0, 1, 0, 3, 12]));
  expect(moveZeroes([0]));
});
