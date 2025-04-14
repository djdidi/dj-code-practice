import { expect, test } from 'vitest';

/**
 * 思路:
 * - 排序后字符串作为key
 * - map 存 key => 分组答案
 *
 * O(N * KLogK)
 */
function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (const str of strs) {
    const sortedStr = [...str].sort().join('');
    if (map.has(sortedStr)) {
      map.get(sortedStr).push(str);
    } else {
      map.set(sortedStr, [str]);
    }
  }

  const ans = [];

  for (const [key, value] of map) {
    ans.push(value);
  }

  return ans;
}


type LetterMap = Map<string, number>;

/**
 * 无脑超时算法
 */
function groupAnagrams2(strs: string[]): string[][] {
  const strToLatterMap = (str: string) => {
    // 字母 -> 出现次数
    const map: LetterMap = new Map();

    if (str === '') {
      map.set('', 1);
    }

    for (const s of str) {
      map.set(s, (map.get(s) || 0) + 1);
    }
    return map;
  };

  const diffLetterMap = (map1: LetterMap, map2: LetterMap) => {
    if (map1.size !== map2.size) {
      return false;
    }

    for (const [word, count] of map1) {
      if (map2.get(word) !== count) {
        return false;
      }
    }
    return true;
  };

  const ansWithLetterMapList: { latterMap: LetterMap, ans: string[] }[] = [];

  for (const str of strs) {
    let isExist = false;
    for (const { latterMap, ans } of ansWithLetterMapList) {
      const currentLatterMap = strToLatterMap(str);
      if (diffLetterMap(currentLatterMap, latterMap)) {
        isExist = true;
        ans.push(str);
      }
    }
    if (!isExist) {
      ansWithLetterMapList.push({ latterMap: strToLatterMap(str), ans: [str] });
    }
  }

  return ansWithLetterMapList.map(({ ans }) => ans);
}

test('groupAnagrams', () => {
  expect(groupAnagrams(['', 'b', ''])).toEqual([['', ''], ['b']]);

  expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
    .toEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);

  expect(groupAnagrams(['']))
    .toEqual([['']]);

  expect(groupAnagrams(['a']))
    .toEqual([['a']]);
});
