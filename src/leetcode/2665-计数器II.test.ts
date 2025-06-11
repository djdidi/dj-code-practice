import { expect, test } from 'vitest';

type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): Counter {
  let count = init;
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = init),
  };
}

test('createCounter', () => {
  const counter = createCounter(5);
  expect(counter.increment()).toEqual(6);
  expect(counter.reset()).toEqual(5);
  expect(counter.decrement()).toEqual(4);
});
