import { LinkedList, ListNode } from '@/templates/linked-list';
import { expect, test } from 'vitest';

/**
 * 思路: 双指针
 * - 新链表存求和/进位的值
 * - 记录进位 carry
 * - 不要忘了最后的进位 1
 *
 * O(Max(M, N))
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let ansHead = new ListNode(0);
  let pAns = ansHead;

  let p1 = l1;
  let p2 = l2;

  let carry = 0;

  while (p1 || p2) {
    let sum = (p1?.val || 0) + (p2?.val || 0) + carry;
    carry = sum >= 10 ? 1 : 0;

    pAns.next = new ListNode(sum % 10);
    pAns = pAns.next;

    p1 = p1?.next;
    p2 = p2?.next;
  }

  if (carry === 1) {
    pAns.next = new ListNode(1);
  }

  return ansHead.next;
}

test('addTwoNumbers', () => {
  expect(addTwoNumbers(new LinkedList([9, 9, 9, 9, 9, 9, 9]).getHead(), new LinkedList([9, 9, 9, 9]).getHead()))
    .toEqual(new LinkedList([8, 9, 9, 9, 0, 0, 0, 1]).getHead());

  // 342 + 465 = 807
  expect(addTwoNumbers(new LinkedList([2, 4, 3]).getHead(), new LinkedList([5, 6, 4]).getHead()))
    .toEqual(new LinkedList([7, 0, 8]).getHead());

  expect(addTwoNumbers(new LinkedList([0]).getHead(), new LinkedList([0]).getHead()))
    .toEqual(new LinkedList([0]).getHead());
});
