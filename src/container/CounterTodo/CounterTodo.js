import React from 'react';
import { useStore } from '../../hook-observer';

const CounterTodo = () => {
  let [count] = useStore();
  return <div>{count}</div>;
};
export default CounterTodo;
