import { expect, test } from "vitest";

/**
 * 思路: 哈希表
 * 1.map 存下来 val => idx
 * 2.只遍历一次，当前值和前面的差值去比较
 *
 * O(N)
 */
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, { idx: number; val: number; }>();

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];

    if (map.has(target - val)) {
      return [map.get(target - val).idx, i];
    } else {
      map.set(val, { idx: i, val });
    }
  }

  return [-1, -1];
}

/**
 * 思路: 双指针
 * 1.存下来之前的 index 值
 * 2.排序, 理论最优 O(NlogN)
 * 3.首尾双指针找和
 *
 * O(N) + O(NlogN) + O(N) = O(Nlog(N))
 */
function twoSum2(nums: number[], target: number): number[] {
  let p1 = 0, p2 = nums.length - 1;

  const newNums = nums.map((num, idx) => ({ num, idx }));

  newNums.sort((a, b) => a.num - b.num);

  while (p1 < p2) {
    const sum = newNums[p1].num + newNums[p2].num;

    if (sum === target) {
      return [newNums[p1].idx, newNums[p2].idx];
    }

    if (sum > target) {
      p2--;
    } else {
      p1++;
    }
  }

  return [-1, -1];
}

/**
 * 思路: 暴力解
 * 双重 for 求和
 *
 * O(n^2)
 */
function twoSum3(nums: number[], target: number) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

test("twoSum", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});
