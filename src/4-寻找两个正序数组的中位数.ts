/**
 * Hard
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length === 0 && nums2.length === 0) {
    return 0;
  }

  let ans = 0;

  const arr = [...nums1, ...nums2];
  arr.sort((a, b) => a - b);

  const midIdx = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    ans = (arr[midIdx] + arr[midIdx - 1]) / 2;
  } else {
    ans = arr[midIdx];
  }

  return ans;
}

console.log(findMedianSortedArrays([], [])); // 0
console.log(findMedianSortedArrays([1, 3], [2])); // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
console.log(findMedianSortedArrays([], [1])); // 1
console.log(findMedianSortedArrays([1], [1])); // 1
console.log(findMedianSortedArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])); // 9
