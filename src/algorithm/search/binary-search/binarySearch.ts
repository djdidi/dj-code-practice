/**
 * 二分查找 O(logN)
 * mid 计算： (left + right) / 2 向下取整
 * 区间移动 [left, mid - 1] 或 [mid + 1, right];
 */

const defaultComparator = (a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  if (a === b) return 0;
};

export function binarySearch<T>(sortedArray: T[], seekElement: T, comparator = defaultComparator): number {
  let ans = -1;

  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    const comparatorResult = comparator(seekElement, sortedArray[mid]);

    if (comparatorResult === -1) {
      right = mid - 1;
    } else if (comparatorResult === 1) {
      left = mid + 1;
    } else {
      ans = mid;
      break;
    }
  }

  return ans;
}
