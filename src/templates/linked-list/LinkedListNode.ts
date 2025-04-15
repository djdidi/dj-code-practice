export class LinkedListNode<T = any> {
  val: T;
  next: LinkedListNode<T> | null;

  constructor(val: T, next: LinkedListNode<T> = null) {
    this.val = val;
    this.next = next;
  }


  toString(stringifier?: (val: T) => string) {
    if (typeof stringifier === 'function') {
      return stringifier(this.val);
    }

    return String(this.val);
  }
}
