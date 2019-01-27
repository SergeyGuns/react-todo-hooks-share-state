import React, { useState } from 'react';
import { initMatrix, initSnake } from './initState';
import { mergeSnakeToMatrix } from './utils';
import TetrisPlayfield from '../../component/TetrisPlayfield';
const HookStateTetris = () => {
  const [matrix, setMatrix] = useState(initMatrix);
  const [snake, setSnake] = useState(initSnake);
  const [game, setGame] = useState({ direction: 'stop' });

  return (
    <div>
      <TetrisPlayfield matrix={mergeSnakeToMatrix(matrix, snake)} />
    </div>
  );
};

export default HookStateTetris;
