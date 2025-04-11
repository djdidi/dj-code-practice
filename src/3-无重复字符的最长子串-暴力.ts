/**
 * 暴力 从 0 -> s.length，遍历
 * @param s
 */
function lengthOfLongestSubstring(s: string): number {
  let maxLen = 0;
  const set = new Set();

  for (let i = 0; i < s.length; i++) {
    let curLen = 0;
    for (let j = i; j < s.length; j++) {
      if (!set.has(s[j])) {
        curLen++;
        set.add(s[j]);
      } else {
        break;
      }
    }
    if (curLen > maxLen) {
      maxLen = curLen;
    }
    set.clear();
  }

  return maxLen;
}

// 3 abc
console.log(lengthOfLongestSubstring('abcabcbb'));
// 1 b
console.log(lengthOfLongestSubstring('bbbbb'));
// 3 wke
console.log(lengthOfLongestSubstring('pwwkew'));
// ' '
console.log(lengthOfLongestSubstring(' '));

export {};
