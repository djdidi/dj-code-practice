import { LinkedList } from '@/data-structure/linked-list';

/**
 * 栈：链表实现
 * - 先进后出
 * - 头插法
 */
export class LinkedListStack<T = unknown> {
  linkedList = new LinkedList<T>();

  peek(): T | null {
    if (!this.linkedList.head) {
      return null;
    }
    return this.linkedList.head.val;
  }

  pop(): T | null {
    if (!this.linkedList.head) {
      return null;
    }

    const removedHead = this.linkedList.head;
    this.linkedList.deleteHead();
    return removedHead.val;
  }

  push(item: T): void {
    this.linkedList.prepend(item);
  }

  size(): number {
    return this.linkedList.size();
  }

  isEmpty(): boolean {
    return !this.linkedList.head;
  }

  toArray(): T[] {
    return this.linkedList.toArray();
  }

  toString(stringifier?: (val: T) => string): string {
    return this.linkedList.toString(stringifier);
  }
}
