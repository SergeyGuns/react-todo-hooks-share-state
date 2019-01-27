import React from 'react';
import PropTypes from 'prop-types';

const TodoView = ({
  handleInput,
  handleAddItem,
  handleToggleDone,
  handleDeleteItem,
  inputValue,
  todoList,
  counter,
}) => {
  return (
    <div>
      {counter || null}
      <input
        onInput={handleInput}
        onKeyPress={ev => ev.key === 'Enter' && handleAddItem()}
        value={inputValue}
        type='text'
      />
      <div className='todo__list'>
        {todoList.map(({ text, done, id }) => (
          <div
            style={{ opacity: done ? '.2' : '1' }}
            onClick={() => handleToggleDone(id)}
            className='todo__item'
          >
            {text}
            <span
              onClick={ev => {
                ev.stopPropagation();
                handleDeleteItem(id);
              }}
            >
              [X]
            </span>
          </div>
        ))}
      </div>
      <button onClick={handleAddItem}>add</button>
    </div>
  );
};

TodoView.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleAddItem: PropTypes.func.isRequired,
  handleToggleDone: PropTypes.func.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  todoList: PropTypes.array.isRequired,
  counter: PropTypes.number,
};

export default TodoView;
