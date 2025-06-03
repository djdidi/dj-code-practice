import { expect, test } from 'vitest';

/**
 * BFS 搜索板子
 * - entrance [y, x]
 * @param maze
 * @param entrance
 */
function nearestExit(maze: string[][], entrance: number[]): number {
  let yLen = maze.length;
  let xLen = maze[0].length;

  maze[entrance[0]][entrance[1]] = 'A';
  const queue: number[][] = [[entrance[0], entrance[1], 0]];
  const dirs: number[][] = [
    [-1, 0], // 上
    [1, 0], // 下
    [0, -1], // 左
    [0, 1], // 右
  ];

  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      const [y, x, step] = queue.shift();

      // 判断是否为出口 且不是起点
      if ((x === 0 || y === 0 || x === xLen - 1 || y === yLen - 1) && (x !== entrance[1] || y !== entrance[0])) {
        return step;
      }

      for (let [dy, dx] of dirs) {
        const newY = dy + y;
        const newX = dx + x;
        if (newX >= 0 && newY >= 0 && newX < xLen && newY < yLen && maze[newY][newX] === '.') {
          maze[newY][newX] = 'A';
          queue.push([newY, newX, step + 1]);
        }
      }
    }
  }

  return -1;
}

test('nearestExit', () => {
  expect(
    nearestExit(
      [
        ['+', '.', '+', '+', '+', '+', '+'],
        ['+', '.', '+', '.', '.', '.', '+'],
        ['+', '.', '+', '.', '+', '.', '+'],
        ['+', '.', '.', '.', '.', '.', '+'],
        ['+', '+', '+', '+', '.', '+', '.'],
      ],
      [0, 1],
    ),
  ).toEqual(7);
  expect(nearestExit([['.', '+']], [0, 0])).toEqual(-1);
  expect(
    nearestExit(
      [
        ['+', '+', '+'],
        ['.', '.', '.'],
        ['+', '+', '+'],
      ],
      [1, 0],
    ),
  ).toEqual(2);
  expect(
    nearestExit(
      [
        ['+', '+', '.', '+'],
        ['.', '.', '.', '+'],
        ['+', '+', '+', '.'],
      ],
      [1, 2],
    ),
  ).toEqual(1);
});
