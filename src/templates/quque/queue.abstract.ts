export abstract class AbstractQueue<T> {
  // 入队
  abstract enqueue(item: T): void;

  // 出队
  abstract dequeue(): T | undefined;

  // 查看队头
  abstract front(): T | undefined;

  // 队列是否为空
  abstract isEmpty(): boolean;

  // 队列长度
  abstract size(): number;

  // 清空队列
  abstract clear(): void;

  // 转换为数组
  abstract toArray(): T[];
}
