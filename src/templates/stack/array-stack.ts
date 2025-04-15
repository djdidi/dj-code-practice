import { AbstractStack } from './stack.abstract';

/**
 * 栈：数组实现
 * - 先进后出
 * - 只操作数组尾部
 */
export class ArrayStack<T> implements AbstractStack<T> {
  items: T[] = [];

  peek(): any {
    return this.items[this.items.length - 1];
  }

  pop(): any {
    return this.items.pop();
  }

  push(item: T): void {
    this.items.push(item);
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}
