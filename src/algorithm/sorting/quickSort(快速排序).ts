/**
 * 快速排序
 * - 平均：O(NLogN)
 * - 最坏：每次都取最值O(N^2)
 * - 原地排序
 * - 不稳定
 */

function quickSort(arr: number[]) {
  if (arr.length <= 1) {
    return arr;
  }

  // 选一个基准值（优化三数取中法）
  let base = arr[Math.floor(arr.length / 2)];
  let left = [];
  let right = [];
  // *稳定性优化：等于基准值的归位一组，保持稳定性
  const equal = [];

  for (const val of arr) {
    if (val < base) {
      left.push(val);
    } else if (val > base) {
      right.push(val);
    } else {
      equal.push(val);
    }
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
}

console.log(quickSort([3, 4, 6, 2, 1]));
