import { expect, test } from 'vitest';

function* fibGenerator(): Generator<number, any, number> {
  let pre = 0;
  let cur = 1;

  yield 0;
  yield 1;

  while (true) {
    yield pre + cur;
    [pre, cur] = [cur, pre + cur];
  }
}

test('fibGenerator()', () => {
  const gen = fibGenerator();
  expect(gen.next().value).toEqual(0);
  expect(gen.next().value).toEqual(1);
  expect(gen.next().value).toEqual(1);
  expect(gen.next().value).toEqual(2);
  expect(gen.next().value).toEqual(3);
  expect(gen.next().value).toEqual(5);
  expect(gen.next().value).toEqual(8);
  expect(gen.next().value).toEqual(13);
});

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
