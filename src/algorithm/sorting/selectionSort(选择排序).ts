/**
 * 选择排序
 * - 选择最小的放到已排序的区间
 * - O(N^2)
 * - 原地排序
 * - 非稳定排序
 */
function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        minIndex = j;
      }
    }

    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }

  console.log('arr=', arr);
}

selectionSort([5, 4, 3, 2, 1]);