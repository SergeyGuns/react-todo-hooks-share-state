import React, { useReducer } from 'react';
import TodoView from '../../component/TodoView.js';
import reducer, { initialState } from '../../hook-reducer';

const HookReduserTodo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleAddItem = () =>
    dispatch({
      type: 'add_item',
      payload: {
        id: Date.now(),
        text: state.input,
        done: false,
      },
    });

  const handleDeleteItem = itemID =>
    dispatch({
      type: 'delete_item',
      payload: itemID,
    });

  const handleToggleDone = itemID =>
    dispatch({
      type: 'toggle_done',
      payload: itemID,
    });

  const handleInput = ev =>
    dispatch({ type: 'set_input', payload: ev.target.value });

  return (
    <TodoView
      handleInput={handleInput}
      handleToggleDone={handleToggleDone}
      handleDeleteItem={handleDeleteItem}
      handleAddItem={handleAddItem}
      todoList={state.list}
      inputValue={state.input}
    />
  );
};

export default HookReduserTodo;
