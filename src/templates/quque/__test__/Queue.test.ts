import { describe, expect, test } from 'vitest';
import { Queue } from '@/templates/quque';

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

  test('toArray', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);

    queue.dequeue();
    queue.dequeue();

    expect(queue.toArray()).toEqual([3, 4]);
  });
});
