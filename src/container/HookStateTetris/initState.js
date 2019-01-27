import { getDefaultColor } from './colors';
export const initMatrix = new Array(20).fill(
  new Array(10).fill(getDefaultColor()),
);

export const initSnake = new Array(5)
  .fill({ x: 0, y: 0 })
  .map((el, index) => ({ ...el, x: 5, y: index + 5 }));
