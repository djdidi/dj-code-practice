/**
 * 链表板子 LinkedList / ListNode
 */
import { ListNode } from '@/templates/linked-list';

export class LinkedList<T = any> {
  head: ListNode<T> | null = null;
  tail: ListNode<T> | null = null;
  _size = 0;

  constructor(arr?: T[]) {
    if (Array.isArray(arr)) {
      arr.forEach(item => this.insert(item));
    }
  }

  append(val: T) {

  }

  prepend(val: T) {
    const newNode = new ListNode(val);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this._size++;
  }

  insert(val: T, idx: number) {
    if (idx < 0 || idx > this.size()) {
      return;
    }

    if (idx === 0) {
      this.prepend(val);
    }

    if (idx === this.size()) {
      this.insert(val);
    }

    const newNode = new ListNode(val);
    let p = this.head!;
    for (let i = 0; i < idx - 1; i++) {
      p = p.next!;
    }
    newNode.next = p.next;
    p.next = newNode;
  }

  removeAt(idx: number) {
    if (this.isEmpty() || idx < 0 || idx >= this.size()) {
      return;
    }

    // 如果移除的是头节点
    if (idx === 0) {
      this.head = this.head!.next;
      if (this._size === 1) {
        this.tail = null;
      }
    } else {
      // 如果不是头节点
      let p = this.head;
      for (let i = 0; i < idx - 1; i++) {
        p = p!.next;
      }

      const removedNode = p!.next!;
      p!.next = removedNode?.next;
      if (idx === this._size - 1) {
        this.tail = p;
      }
    }

    this._size--;
  }

  revert() {
    if (this._size <= 1) {
      return;
    }

    let prev = null;
    let cur = this.head;

    while (cur) {
      const nextTemp = cur.next;
      cur.next = prev;
      prev = cur;
      cur = nextTemp;
    }

    this.tail = this.head;
    this.head = prev;
  }

  toArray() {
    let arr = [];
    let p = this.head;
    while (p) {
      arr.push(p.val);
      p = p.next;
    }
    return arr;
  }

  print() {
    const arr = this.toArray();
    console.log(arr.join('->'));
  }

  appendFromArray(arr: T[]) {
    arr.forEach(val => this.insert(val));
  }

  size() {
    return this._size;
  }

  isEmpty() {
    return this._size === 0;
  }

  getHead() {
    return this.head;
  }
}
