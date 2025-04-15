import { Stack } from '@/templates/stack';
import { AbstractQueue } from '@/templates/quque/queue.abstract';

/**
 * 队列: 栈实现 (优化版本)
 *
 * 1. inStack outStack 两个栈
 * 2. 每次出栈，把 in 倒腾道 out 里
 * 3. 依次出 out 就是队列的顺序
 *
 * - 实现栈列表倒序
 * - 先进的元素，到了out栈的最上面，达到先出的效果
 *
 * O(1)
 */
export class StackQueue<T = unknown> implements AbstractQueue<T> {
  inStack = new Stack<T>();
  outStack = new Stack<T>();

  in2Out() {
    while (!this.inStack.isEmpty()) {
      this.outStack.push(this.inStack.pop());
    }
  }

  dequeue(): T | undefined {
    // 倒腾到 outStack
    this.in2Out();

    return this.outStack.pop();
  }

  enqueue(item: T): void {
    this.inStack.push(item);
  }

  front(): T | undefined {
    this.in2Out();
    return this.outStack.peek();
  }

  isEmpty(): boolean {
    return this.inStack.isEmpty() && this.outStack.isEmpty();
  }

  size(): number {
    return this.inStack.size() + this.outStack.size();
  }

  clear(): void {
    this.inStack.clear();
    this.outStack.clear();
  }

  toArray(): T[] {
    return [...this.outStack.toArray(), ...this.inStack.toArray()];
  }
}

/**
 * 队列: 栈实现
 * - 反转栈，出栈，再反转回去
 *
 * O(N) + O(N) = O(N)
 */
export class StackQueue2<T = unknown> implements AbstractQueue<T> {
  stack = new Stack<T>();

  reverseStack() {
    let tempStack = new Stack<T>();
    while (this.stack.size() > 0) {
      tempStack.push(this.stack.pop());
    }
    this.stack = tempStack;
  }

  dequeue(): T | undefined {
    // 倒腾到另一个栈里，拿到第一个入栈的值
    this.reverseStack();

    let val = this.stack.pop();

    // 倒腾回去
    this.reverseStack();

    return val;
  }

  enqueue(item: T): void {
    this.stack.push(item);
  }

  front(): T | undefined {
    // 倒腾到另一个栈里，拿到第一个入栈的值
    this.reverseStack();

    let val = this.stack.peek();

    // 倒腾回去
    this.reverseStack();

    return val;
  }

  isEmpty(): boolean {
    return this.stack.size() === 0;
  }

  size(): number {
    return this.stack.size();
  }

  clear(): void {
    this.stack.clear();
  }

  toArray(): T[] {
    return this.stack.toArray();
  }
}
