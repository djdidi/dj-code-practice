import { ListNode } from '@/data-structure/linked-list';
import { test } from 'vitest';

/**
 * 思路: 长度补齐，节省空间开销
 *
 * 3O(N) = O(N)
 */
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let lenA = 0;
  let lenB = 0;

  let p1 = headA;
  let p2 = headB;
  while (p1 !== null) {
    lenA++;
    p1 = p1.next;
  }
  while (p2 !== null) {
    lenB++;
    p2 = p2.next;
  }

  p1 = headA;
  p2 = headB;
  while (p1 !== null || p2 !== null) {
    // 相交
    if (p1 === p2) {
      return p1;
    }

    // 长的先跑，看作长度补齐
    if (lenA > lenB) {
      lenA--;
      p1 = p1.next;
    } else if (lenB > lenA) {
      lenB--;
      p2 = p2.next;
    } else {
      p1 = p1.next;
      p2 = p2.next;
    }
  }

  return null;
}

/**
 * 思路：哈希集合 Set
 * - 遍历 A 节点放入 Set
 * - 遍历 B Set 查相同节点
 *
 * O(M + N)
 * 空间 O(M)
 */
function getIntersectionNode2(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  const set = new Set<ListNode>();

  let p1 = headA;
  while (p1 !== null) {
    set.add(p1);
    p1 = p1.next;
  }

  let p2 = headB;
  while (p2 !== null) {
    if (set.has(p2)) {
      return p2;
    }
    p2 = p2.next;
  }

  return null;
}

test('getIntersectionNode', () => {});
