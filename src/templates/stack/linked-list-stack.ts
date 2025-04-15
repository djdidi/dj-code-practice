import { AbstractStack } from '@/templates/stack';
import { LinkedListHelpers, ListNode } from '@/templates/linked-list';

/**
 * 链表实现栈
 * - 先进先出
 * - 链表头插
 */
export class LinkedListStack<T = unknown> implements AbstractStack<T> {
  private head = null;
  private len = 0;

  peek(): T | undefined {
    return this.head?.val;
  }

  pop(): T | undefined {
    const val = this.peek();

    this.head = this.head?.next || null;
    this.len--;

    return val;
  }

  push(item: T): void {
    const node = new ListNode(item);
    node.next = this.head;
    this.head = node;
    this.len++;
  }

  size(): number {
    return this.len;
  }

  clear(): void {
    this.head = null;
    this.len = 0;
  }

  isEmpty(): boolean {
    return this.len === 0;
  }
}
