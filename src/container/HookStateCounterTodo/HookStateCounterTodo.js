import React from 'react';
import { useStore } from '../../hook-observer';
import CounterView from '../../component/CounterView';

const HookStateCounterTodo = () => {
  let [count] = useStore();
  return <CounterView count={count} />;
};
export default HookStateCounterTodo;
