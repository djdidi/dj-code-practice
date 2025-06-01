/**
 * 插入排序
 * - 类似整理扑克牌，从已经整理好的部分找到目标元素需要插入的位置
 * - O(N^2)
 * - 原地排序
 * - 稳定排序
 */
function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let curr = arr[i];

    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = curr;
  }

  console.log(arr);
}

insertionSort([5, 4, 3, 2, 1]);
