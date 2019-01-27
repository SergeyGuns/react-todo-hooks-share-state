import React, { Component } from 'react';
import './App.css';
import HookStateTodo from './container/HookStateTodo';
import HookStateCounterTodo from './container/HookStateCounterTodo';
import HookReduserTodo from './container/HookReduserTodo';
import HookStateTetris from './container/HookStateTetris';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='hook'>
          Hook shared state
          <HookStateTodo />
          <HookStateCounterTodo />
          <hr />
          Hook reduser state
          <HookReduserTodo />
          <hr />
          <HookStateTetris />
          <hr />
        </div>
      </div>
    );
  }
}

export default App;
