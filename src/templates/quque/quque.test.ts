import { describe, expect, test } from 'vitest';
import { ArrayQueue, LinkedListQueue } from '@/templates/quque';

const Queue = ArrayQueue;

describe('queue', () => {
  test('enqueue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.toArray()).toEqual([1, 2, 3]);
  });

  test('dequeue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
  });

  test('front', () => {
    const queue = new Queue();
    expect(queue.front()).toEqual(undefined);
    queue.enqueue(1);
    expect(queue.front()).toEqual(1);
    queue.dequeue();
    expect(queue.front()).toEqual(undefined);
  });

  test('isEmpty', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toEqual(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).toEqual(false);
    queue.clear();
    expect(queue.isEmpty()).toEqual(true);
  });
});
