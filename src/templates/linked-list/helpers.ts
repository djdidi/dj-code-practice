import { LinkedList, ListNode } from './linked-list';

export const LinkedListHelpers = {
  reverse(head: ListNode | null) {
    let prev = null;
    let cur = head;

    while (cur) {
      const nextTemp = cur.next;
      cur.next = prev;
      prev = cur;
      cur = nextTemp;
    }

    return head;
  },

  genLen(head: ListNode | null) {
    let len = 0;

    let p = head;
    while (p !== null) {
      len++;
      p = p.next;
    }

    return len;
  }
};
