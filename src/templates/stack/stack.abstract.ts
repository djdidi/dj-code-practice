// stack.abstract.ts

export abstract class AbstractStack<T> {
  /**
   * 将元素压入栈顶
   */
  abstract push(item: T): void;

  /**
   * 弹出栈顶元素
   */
  abstract pop(): T | undefined;

  /**
   * 查看栈顶元素但不移除
   */
  abstract peek(): T | undefined;

  /**
   * 当前栈是否为空
   */
  abstract isEmpty(): boolean;

  /**
   * 当前栈的大小
   */
  abstract size(): number;

  /**
   * 清空栈
   */
  abstract clear(): void;
}
