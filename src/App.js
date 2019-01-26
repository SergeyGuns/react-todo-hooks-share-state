import React, { Component } from 'react';
import './App.css';
import Todo from './container/HookTodo';
import CounterTodo from './container/CounterTodo';
import ReducerTodo from './container/ReduserTodo/ReducerTodo';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='hook'>
          <Todo />
          <CounterTodo />
          <hr />
          <ReducerTodo />
          <hr />
        </div>
      </div>
    );
  }
}

export default App;
