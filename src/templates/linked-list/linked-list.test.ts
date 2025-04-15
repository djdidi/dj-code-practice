import { describe, expect, test } from 'vitest';
import { LinkedList } from '@/templates/linked-list';

describe('linked-list', () => {
  test('append', () => {
    const linkedList = new LinkedList();
    linkedList.append(10);
    linkedList.append(20);
    linkedList.append(30);
    expect(linkedList.toArray()).toEqual([10, 20, 30]);
  });

  test('prepend', () => {
    const linkedList = new LinkedList();
    linkedList.prepend(10);
    linkedList.prepend(20);
    linkedList.prepend(30);
    expect(linkedList.toArray()).toEqual([30, 20, 10]);
  });

  test('insertAt', () => {
    const linkedList = new LinkedList([10, 20, 30, 40]);
    linkedList.insertAt(35, 3);
    expect(linkedList.toArray()).toEqual([10, 20, 30, 35, 40]);
  });

  test('removeAt', () => {
    const linkedList = new LinkedList([10, 20, 30, 40]);
    linkedList.removeAt(0);
    expect(linkedList.toArray()).toEqual([20, 30, 40]);
  });

  test('revert', () => {
    const linkedList = new LinkedList([10, 20, 30, 40]);
    linkedList.revert();
    expect(linkedList.toArray()).toEqual([40, 30, 20, 10]);
  });
});
