import { expect, test } from 'vitest';

/**
 * 字母异位词
 * - 每个字母的数量一致
 * - 字母排序后的字符串一致
 *
 * 思路：
 * 1. 字母排序作为map的key
 * 2. map的value存原始的异位词
 *
 * O(N * KLogK)
 */
function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split('').sort().join('');
    if (map.has(sortedStr)) {
      map.get(sortedStr).push(strs[i]);
    } else {
      map.set(sortedStr, [strs[i]]);
    }
  }

  return [...map.values()];
}

test('groupAnagrams', () => {
  expect(groupAnagrams(['', 'b', ''])).toEqual([['', ''], ['b']]);

  expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toEqual([
    ['eat', 'tea', 'ate'],
    ['tan', 'nat'],
    ['bat'],
  ]);

  expect(groupAnagrams([''])).toEqual([['']]);

  expect(groupAnagrams(['a'])).toEqual([['a']]);
});
