import React, { useState } from 'react';
import { useStore } from '../hook-store';
const Todo = () => {
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

  return (
    <div>
      {counter}
      <input
        onInput={ev => setInput(ev.target.value)}
        value={input}
        type='text'
      />
      <div className='todo__list'>
        {list.map(({ text, done, id }) => (
          <div
            style={{ opacity: done ? '.2' : '1' }}
            onClick={() => handleToggleDone(id)}
            className='todo__item'
          >
            {text}
          </div>
        ))}
      </div>
      <button onClick={handleAddItem}>add</button>
    </div>
  );
};

export default Todo;
