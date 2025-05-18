import { expect, test } from 'vitest';

/**
 * 思路: 左右双指针
 * - 优先移动短板指针
 * O(N)
 */
function maxArea(height: number[]): number {
  let p1 = 0;
  let p2 = height.length - 1;

  let ans = 0;

  while (p1 < p2) {
    let area = (p2 - p1) * Math.min(height[p1], height[p2]);
    ans = Math.max(area, ans);

    // 移动短边，面积有可能变大
    if (height[p1] < height[p2]) {
      p1++;
    } else {
      p2--;
    }
  }

  return ans;
}

test('maxArea', () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
  expect(maxArea([1, 1])).toEqual(1);
});
