import React from 'react';
import { useStore } from '../../hook-observer';
import Counter from '../../component/Counter';

const HookStateCounterTodo = () => {
  let [count] = useStore();
  return <Counter count={count} />;
};
export default HookStateCounterTodo;
