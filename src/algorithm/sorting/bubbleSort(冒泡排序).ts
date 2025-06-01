/**
 * 冒泡排序
 * - O(N^2)
 * - 原地排序
 * - 稳定排序：相等元素不交换
 */
function bubbleSort(arr: number[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  console.log('arr=', arr);
}

bubbleSort([5, 4, 3, 2, 1]);
