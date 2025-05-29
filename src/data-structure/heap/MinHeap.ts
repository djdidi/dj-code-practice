import { Heap } from '@/data-structure/heap/Heap';

export class MinHeap<T = any> extends Heap<T> {
  /**
   * Checks if pair of heap elements is in correct order.
   * For MinHeap the first element must be always smaller or equal.
   * For MaxHeap the first element must be always bigger or equal.
   *
   * @param {*} firstElement
   * @param {*} secondElement
   * @return {boolean}
   */
  pairIsCorrectOrder(firstElement: T, secondElement: T): boolean {
    return this.compare.lessThanOrEqual(firstElement, secondElement);
  }
}
