import { expect, test } from 'vitest';

/**
 * 思路: 左右双指针
 * - 优先移动短板指针
 *
 * O(N)
 */
function maxArea(height: number[]): number {
  let area = 0;

  let p1 = 0;
  let p2 = height.length - 1;

  while (p1 < p2) {
    area = Math.max(area, Math.min(height[p1], height[p2]) * (p2 - p1));

    if (height[p1] < height[p2]) {
      p1++;
    } else {
      p2--;
    }
  }

  return area;
}

test('maxArea', () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
  expect(maxArea([1, 1])).toEqual(1);
});
