import { describe, expect, test } from 'vitest';
import { ArrayStack as Stack, LinkedListStack as Stack1 } from '@/templates/stack';

describe('stack', () => {
  test('peek/push', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });

  test('pop', () => {
    const stack = new Stack();
    stack.push(2);

    expect(stack.pop()).toEqual(2);
  });

  test('size', () => {
    const stack = new Stack();
    stack.push(2);
    stack.push(3);
    stack.push(4);

    expect(stack.size()).toEqual(3);
  });

  test('isEmpty', () => {
    const stack = new Stack();
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.clear();

    expect(stack.size()).toEqual(0);
  });
});
