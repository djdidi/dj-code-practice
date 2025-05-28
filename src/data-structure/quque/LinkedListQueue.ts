import { LinkedList } from '@/data-structure/linked-list';

/**
 * 队列：
 * - 先进先出
 * - 链表实现
 * - 遍历顺序：队头到队尾
 * - 插入顺序：尾插头出
 */
export class LinkedListQueue<T> {
  linkedList = new LinkedList<T>();

  enqueue(item: T) {
    this.linkedList.append(item);
    return this;
  }

  dequeue(): T {
    if (!this.linkedList.head) {
      return null;
    }

    return this.linkedList.deleteHead().val;
  }

  peek(): T {
    if (!this.linkedList.head) {
      return null;
    }

    return this.linkedList.head.val;
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  toString(stringifier?: (val: T) => string) {
    return this.linkedList.toString(stringifier);
  }
}
