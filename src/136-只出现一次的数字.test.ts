import { expect, test } from 'vitest';

/**
 * 思路：异或技巧题
 * - 0开始，如果值不一样，会变成目标值
 * - 如果值一样，会重置
 * - !!!只适用于偶数重复的case
 *
 * O(N)
 * 节省了空间复杂度
 * @param nums
 */
function singleNumber(nums: number[]): number {
  let ans = 0;

  for (const num of nums) {
    ans ^= num;
  }

  return ans;
}


/**
 * 思路：哈希表
 * - 遍历一次 map记录出现的次数
 * - 遍历二次 找出现一次的数
 *
 * O(N) + O(N) = O(N)
 * @param nums
 */
function singleNumber2(nums: number[]): number {
  let ans = -1;
  const map = new Map();

  nums.forEach(num => {
    map.set(num, (map.get(num) || 0) + 1);
  });

  nums.forEach(num => {
    if (map.get(num) === 1) {
      ans = num;
    }
  })

  return ans;
}

test('singleNumber', () => {
  expect(singleNumber([2, 2, 1])).toEqual(1);
  expect(singleNumber([4, 1, 2, 1, 2])).toEqual(4);
  expect(singleNumber([1])).toEqual(1);
});
