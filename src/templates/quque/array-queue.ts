import { AbstractQueue } from '@/templates/quque';

/**
 * 队列：数组实现
 * - 先进先出
 * - 尾部进，头部出
 */
export class ArrayQueue<T> implements AbstractQueue<T> {
  items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  front(): T | undefined {
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }

  toArray(): T[] {
    return this.items;
  }
}
