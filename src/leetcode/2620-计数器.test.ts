import { expect, test } from 'vitest';

function createCounter(n: number): () => number {
  let callCount = 0;
  return function () {
    let ans = n + callCount;
    callCount++;
    return ans;
  };
}

test('createCounter()', () => {
  const counter = createCounter(10);
  expect(counter()).toEqual(10);
  expect(counter()).toEqual(11);
  expect(counter()).toEqual(12);
});
