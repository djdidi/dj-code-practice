/**
 * 左右双指针，利用Set记录重复元素
 * O(N)
 * @param s
 */
function lengthOfLongestSubstring(s: string): number {
  let maxLen = 0;
  const set = new Set();

  // 左右双指针
  let p2 = 0;

  for (let p1 = 0; p1 < s.length; p1++) {
    while (p2 < s.length && !set.has(s[p2])) {
      set.add(s[p2]);
      p2++;
    }

    maxLen = Math.max(maxLen, p2 - p1);
    set.delete(s[p1]);
  }

  return maxLen;
}

// 3 abc
console.log(lengthOfLongestSubstring('abcabcbb'));
// 1 b
console.log(lengthOfLongestSubstring('bbbbb'));
// 3 wke
console.log(lengthOfLongestSubstring('pwwkew'));
// 1 ' '
console.log(lengthOfLongestSubstring(' '));
// 0 ''
console.log(lengthOfLongestSubstring(''));

export {};
