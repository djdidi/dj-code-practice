/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
import { arrayToLinkedHead, ListNode } from './templates/LinkedList';

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let p1 = l1;
  let p2 = l2;

  const l3 = new ListNode(0);
  let p3 = l3;

  let carry = 0;
  while (p1 || p2) {
    let v1 = p1?.val || 0;
    let v2 = p2?.val || 0;
    // 处理求和进位
    let sum = v1 + v2 + carry;
    p3.val = sum % 10;
    carry = sum >= 10 ? 1 : 0;

    p1 = p1?.next;
    p2 = p2?.next;

    if (p1 || p2) {
      p3.next = new ListNode(0);
      p3 = p3.next;
    }
  }

  // 记得最后的进位
  if (carry === 1) {
    p3.next = new ListNode(1);
  }

  return l3;
}

/**
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
 */
addTwoNumbers(arrayToLinkedHead([2, 4, 3]), arrayToLinkedHead([5, 6, 4]));
// addTwoNumbers(arrayToLinkedHead([9, 9, 9, 9, 9, 9, 9]), arrayToLinkedHead([9, 9, 9, 9]));
