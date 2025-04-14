import { expect, test } from 'vitest';

/**
 * 思路: 哈希集合 Set
 * - 所有数放入集合
 * - 只有 num - 1 不存在的数，才计算最长连续
 *
 * 时间复杂度 O(N)
 */
function longestConsecutive(nums: number[]): number {
  let ans = 0;

  const set = new Set<number>(nums);

  // 这里遍历 set 更少, 遍历 nums 超时
  for (const x of set) {
    // 神来一笔
    if (set.has(x - 1)) {
      continue;
    }

    let y = x;
    while (set.has(y)) {
      y++;
    }
    ans = Math.max(ans, y - x);
  }

  return ans;
}

/**
 * 思路: 排序 + 双指针滑动窗口
 *
 * O(NLogN) + O(N) = O(N)
 */
function longestConsecutive3(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let ans = 1;

  nums.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = 1;

  while (p2 < nums.length) {
    if (nums[p2] === nums[p2 - 1] + 1) {
      ans = Math.max(ans, p2 - p1 + 1);
    } else if (nums[p2] === nums [p2 - 1]) {
      p1++;
    } else {
      p1 = p2;
    }
    p2++;
  }

  return ans;
}

test('longestConsecutive', () => {
  expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toEqual(4);
  expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toEqual(9);
  expect(longestConsecutive([1, 0, 1, 2])).toEqual(3);

  expect(longestConsecutive([])).toEqual(0);
  expect(longestConsecutive([0])).toEqual(1);
  expect(longestConsecutive([0, 0])).toEqual(1);
});
