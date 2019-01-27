import { getDefaultColor, getGreenColor } from './colors';
export function mergeSnakeToMatrix(matrix, snake) {
  return matrix.map((arrX, y) =>
    arrX.map((el, x) =>
      hereIsSnake(x, y, snake) ? getGreenColor() : getDefaultColor(),
    ),
  );
}

function hereIsSnake(x, y, snake) {
  return snake.some(bone => bone.x === x && bone.y === y);
}
