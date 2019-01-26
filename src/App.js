import React, { Component } from 'react';
import './App.css';
import HookStateTodo from './container/HookStateTodo';
import HookStateCounterTodo from './container/HookStateCounterTodo';
import HookReduserTodo from './container/HookReduserTodo';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='hook'>
          Hook State
          <HookStateTodo />
          <HookStateCounterTodo />
          <hr />
          Hook Reduser State
          <HookReduserTodo />
          <hr />
        </div>
      </div>
    );
  }
}

export default App;
