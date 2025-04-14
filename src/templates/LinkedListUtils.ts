import { LinkedList, ListNode } from './LinkedList';

export const arrayToLinkedHead = (arr: any[]) => {
  const linkedList = new LinkedList();
  linkedList.appendFromArray(arr);
  return linkedList.getHead();
};

export const arrayToLinkedList = (arr: any[]) => {
  const linkedList = new LinkedList();
  linkedList.appendFromArray(arr);
  return linkedList;
};

export const reverseLinkedList = (head: ListNode | null) => {
  let prev = null;
  let cur: ListNode | null = head;

  while (cur) {
    const nextTemp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nextTemp;
  }

  return head;
};

export const genLinkedListLen = (head: ListNode | null) => {
  let len = 0;

  if (head === null) {
    len = 0;
  }

  let p1 = head;
  while (p1 !== null) {
    len++;
    p1 = p1.next;
  }

  return len;
};
