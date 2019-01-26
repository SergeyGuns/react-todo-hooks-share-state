import React, { useState } from 'react';
import { useStore } from '../../hook-observer';
import TodoView from '../../component/TodoView.js';
const HookTodo = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');
  const [counter, setCounter] = useStore();

  const handleAddItem = () => {
    const newList = [...list, { id: Date.now(), text: input, done: false }];
    setList(newList);
    setInput('');
    setCounter(newList.length);
  };

  const handleToggleDone = targetID =>
    setList(
      list.map(({ id, done, ...item }) => ({
        id,
        ...item,
        done: id === targetID ? !done : done,
      })),
    );

  const handleDeleteItem = targetID =>
    setList(list.filter(item => item.id !== targetID));

  const handleInput = ev => setInput(ev.target.value);

  return (
    <TodoView
      handleAddItem={handleAddItem}
      handleDeleteItem={handleDeleteItem}
      handleToggleDone={handleToggleDone}
      handleInput={handleInput}
      inputValue={input}
      todoList={list}
      counter={counter}
    />
  );
};

export default HookTodo;
