import { LinkedList, ListNode } from '@/data-structure/linked-list';
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
  let l3 = new ListNode(-1);
  let p3 = l3;

  let carry = 0;

  while (l1 || l2) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    carry = sum >= 10 ? 1 : 0;

    p3.next = new ListNode(sum >= 10 ? sum - 10 : sum);
    p3 = p3.next;

    l1 = l1?.next;
    l2 = l2?.next;
  }

  if (carry === 1) {
    p3.next = new ListNode(1);
  }

  return l3.next;
}

test('addTwoNumbers', () => {
  expect(
    addTwoNumbers(
      new LinkedList().fromArray([9, 9, 9, 9, 9, 9, 9]).head,
      new LinkedList().fromArray([9, 9, 9, 9]).head,
    ),
  ).toEqual(new LinkedList().fromArray([8, 9, 9, 9, 0, 0, 0, 1]).head);

  // 342 + 465 = 807
  expect(
    addTwoNumbers(
      new LinkedList().fromArray([2, 4, 3]).head,
      new LinkedList().fromArray([5, 6, 4]).head,
    ),
  ).toEqual(new LinkedList().fromArray([7, 0, 8]).head);

  expect(
    addTwoNumbers(
      new LinkedList().fromArray([0]).head,
      new LinkedList().fromArray([0]).head,
    ),
  ).toEqual(new LinkedList().fromArray([0]).head);
});
