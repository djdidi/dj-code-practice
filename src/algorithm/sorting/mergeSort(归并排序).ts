/**
 * 归并排序
 * - O(NLog(N))
 */
function mergeSort(arr: number[]) {
  if (arr.length <= 1) {
    return arr;
  }

  const midIndex = Math.floor(arr.length / 2);
  const left = arr.slice(0, midIndex);
  const right = arr.slice(midIndex);

  return merge(mergeSort(left), mergeSort(right));
}

/**
 * 合并，使两个数组有序
 * @param left
 * @param right
 */
function merge(left: number[], right: number[]) {
  let pl = 0;
  let pr = 0;
  let result = [];

  while (pl < left.length && pr < right.length) {
    if (left[pl] <= right[pr]) {
      result.push(left[pl]);
      pl++;
    } else {
      result.push(right[pr]);
      pr++;
    }
  }

  if (pl < left.length) {
    result.push(...left.slice(pl));
  }

  if (pr < right.length) {
    result.push(...right.slice(pr));
  }

  return result;
}

console.log(mergeSort([5, 4, 3, 2, 1]));
