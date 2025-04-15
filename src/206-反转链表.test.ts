import { LinkedList, ListNode } from '@/templates/linked-list';
import { expect, test } from 'vitest';

/**
 * 思路: 双指针 迭代法
 * - prev 从 null 开始
 * - curr 从 head 开始
 * - 暂存 curr.next 指针反转
 */
function reverseList2(head: ListNode | null): ListNode | null {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    const tempNext = curr.next;
    curr.next = prev;
    prev = curr;
    curr = tempNext;
  }

  return prev;
}

/**
 * 思路: 递归法
 * - 问题拆解为反转 4->5->null 和 5->null
 */
function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }

  // 认为后面的都反转完了
  const reversedHead = reverseList(head.next);

  // 后一项 -> 前一项
  head.next.next = head;
  // 前一项 -> null
  head.next = null;

  return reversedHead;
}

test('reverseList', () => {
  expect(reverseList(new LinkedList([1, 2, 3, 4, 5]).getHead())).toEqual(new LinkedList([5, 4, 3, 2, 1]).getHead());
  expect(reverseList(new LinkedList([1]).getHead())).toEqual(new LinkedList([1]).getHead());
  expect(reverseList(null)).toEqual(null);
});
