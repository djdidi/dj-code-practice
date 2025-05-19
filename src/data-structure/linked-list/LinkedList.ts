/**
 * 链表板子 LinkedList
 * - 可以链式调用
 * - 不考虑异常case
 */
import { ListNode } from '@/data-structure/linked-list';

export class LinkedList<T = unknown> {
  head: ListNode<T> | null = null;
  tail: ListNode<T> | null = null;

  /**
   * 增 -> 任意位置
   * @param val
   * @param idx
   *
   * @return {LinkedList}
   */
  insert(val: T, idx: number): LinkedList<T> {
    const newNode = new ListNode(val);

    if (idx <= 0) {
      this.prepend(val);
      return this;
    }

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    // 正常插入: 指针滑到插入位置的前一个
    let currIdx = 0;
    let curr = this.head;
    while (curr.next && currIdx < idx - 1) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
    return this;
  }

  /**
   * 增 -> 尾部
   * @param {*} val
   * @return {LinkedList}
   */
  append(val: T): LinkedList {
    const newNode = new ListNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return this;
  }

  /**
   * 增 -> 头部
   * @param {*} val
   * @return {LinkedList}
   */
  prepend(val: T): LinkedList {
    const newNode = new ListNode(val);

    // head 为 null 也没事
    newNode.next = this.head;
    this.head = newNode;

    // 初始为空，tail也要处理
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  /**
   * 指定元素全部删除
   * @param val
   * @return {ListNode} 最后一个 del node
   */
  delete(val: T): ListNode<T> {
    if (!this.head) {
      return null;
    }

    let deleteNode = null;

    // 先删头部
    while (this.head?.val === val) {
      deleteNode = this.head;
      this.head = this.head.next;
      // 删光了
      if (this.head === null) {
        this.tail = null;
        return deleteNode;
      }
    }

    // 删下一个
    let prev = this.head;
    while (prev.next) {
      if (prev.next.val === val) {
        deleteNode = prev.next;
        prev.next = prev.next.next;
        // 这里如果尾巴被删除了，需要动 this.tail
        if (prev.next === null) {
          this.tail = prev;
        }
      } else {
        prev = prev.next;
      }
    }

    return deleteNode;
  }

  /**
   * 删 -> 头部
   * @return {ListNode}
   */
  deleteHead(): ListNode<T> | null {
    if (!this.head) {
      return null;
    }

    let deletedNode = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedNode;
  }

  /**
   * 删 -> 尾部
   * @return {ListNode}
   */
  deleteTail(): ListNode<T> | null {
    let deleteNode = this.tail;

    // 只有一项 or 都为空
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deleteNode;
    }

    // cur.next -> tail 时，操作删除 tail
    let curr = this.head;
    while (curr.next !== this.tail) {
      curr = curr.next;
    }
    curr.next = null;
    this.tail = curr;

    return deleteNode;
  }

  /**
   * 查 node
   * @param val
   * @param callback
   * @return {ListNode}
   */
  find({ val, callback }: { val?: T; callback?: (val: T) => boolean; }): ListNode<T> | null {
    let curr = this.head;
    while (curr) {
      if (typeof callback === 'function' && callback(curr.val)) {
        return curr;
      }
      if (curr.val === val) {
        return curr;
      }
      curr = curr.next;
    }

    return null;
  }

  /**
   * 反转链表
   * @returns {LinkedList}
   */
  reverse(): LinkedList<T> {
    let prev = null;
    let curr = this.head;
    this.tail = this.head;

    while (curr) {
      let nextNode = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextNode;
    }

    this.head = prev;

    return this;
  }

  /**
   * 数组
   * @return {LinkedList}
   */
  fromArray(arr: T[]): LinkedList<T> {
    arr.forEach(item => this.append(item));
    return this;
  }

  toArray(): T[] {
    let arr = [];

    let curr = this.head;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }

    return arr;
  }

  /**
   * 默认 val 逗号分割
   * - Array.prototype.toString 内部调用了 join() 分割数组
   * @param stringifier
   * @return {string}
   */
  toString(stringifier?: (val: T) => string): string {
    return this.toArray().map(val => stringifier?.(val) || val).toString();
  }

  size(): number {
    let len = 0;

    let curr = this.head;
    while (curr) {
      len++;
      curr = curr.next;
    }

    return len;
  }
}
