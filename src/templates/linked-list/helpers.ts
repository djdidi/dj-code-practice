import { LinkedList, ListNode } from './linked-list';

export const LinkedListHelpers = {
  /**
   * 获取链表长度
   */
  genLen(head: ListNode | null) {
    let len = 0;

    let p = head;
    while (p !== null) {
      len++;
      p = p.next;
    }

    return len;
  },

  /**
   * 反转链表
   */
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

  /**
   * 转换为数组
   */
  toArray(head: ListNode | null) {
    if (!head) return [];

    let arr = [];

    let p = head;
    while (p !== null) {
      arr.push(p.val);
      p = p.next;
    }

    return arr;
  },

  /**
   * 判断链表是否有环
   */
};
