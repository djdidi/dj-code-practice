import { LinkedListHelpers, ListNode } from '@/templates/linked-list';

/**
 * 队列: 链表实现
 * - 先进先出
 * - 进: 链表尾
 * - 出: 链表头
 */
export class LinkedListQueue<T> {
  head: ListNode<T> | null = null;
  tail: ListNode<T> | null = null;
  len = 0;

  enqueue(item: T): void {
    const newNode = new ListNode(item);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.len++;
  }

  dequeue(): T | undefined {
    let val = this.front();

    if (!this.head) {
      return undefined;
    }

    this.head = this.head.next;
    this.len--;

    return val;
  }

  front(): T | undefined {
    return this.head?.val;
  }

  isEmpty(): boolean {
    return !this.head;
  }

  size(): number {
    return this.len;
  }

  clear(): void {
    this.tail = null;
    this.head = null;
    this.len = 0;
  }

  toArray(): T[] {
    return LinkedListHelpers.toArray(this.head);
  }
}
