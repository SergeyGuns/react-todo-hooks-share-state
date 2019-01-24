import React from 'react';
import { useStore } from '../hook-store';

const CounterTodo = () => {
  let [count] = useStore();
  return <div>{count}</div>;
};
export default CounterTodo;
