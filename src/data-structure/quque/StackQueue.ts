import { Stack } from '@/data-structure/stack';

/**
 * 队列：
 * - 用两个栈实现
 * - 遍历顺序：队头到队尾
 * 1. inStack outStack 两个栈
 * 2. 每次出栈，把 in 倒腾到 out 里
 * 3. 依次出 out 就是队列的顺序
 *
 * - 实现栈列表倒序
 * - 先进的元素，到了out栈的最上面，达到先出的效果
 *
 * O(1)
 */
export class StackQueue<T = unknown> {
  private inStack = new Stack<T>();
  private outStack = new Stack<T>();

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

  peek(): T | undefined {
    this.in2Out();
    return this.outStack.peek();
  }

  isEmpty(): boolean {
    return this.inStack.isEmpty() && this.outStack.isEmpty();
  }

  size(): number {
    return this.inStack.size() + this.outStack.size();
  }

  toArray(): T[] {
    return [...this.outStack.toArray(), ...this.inStack.toArray().reverse()];
  }

  toString(stringifier?: (val: T) => string) {
    this.in2Out();
    return this.outStack.toString(stringifier);
  }
}

/**
 * 队列: 栈实现
 * - 反转栈，出栈，再反转回去
 *
 * 2*O(N) = O(N)
 */
export class StackQueue2<T = unknown> {}
