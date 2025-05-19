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

  for (const x of set) {
    // 神来一笔：这样能找到连续数的第一个
    if (set.has(x - 1)) {
      continue;
    }

    // 统计一下连续的长度
    let y = x + 1;
    while (set.has(y)) {
      y++;
    }
    ans = Math.max(ans, y - x);
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
