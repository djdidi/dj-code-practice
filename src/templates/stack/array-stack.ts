import { AbstractStack } from './stack.abstract';

export class ArrayStack<T> implements AbstractStack<T> {
  arr: T[] = [];

  peek(): any {
    return this.arr[this.arr.length - 1];
  }

  pop(): any {
    return this.arr.pop();
  }

  push(item: T): void {
    this.arr.push(item);
  }

  size(): number {
    return this.arr.length;
  }

  clear(): void {
    this.arr = [];
  }

  isEmpty(): boolean {
    return this.arr.length === 0;
  }
}
