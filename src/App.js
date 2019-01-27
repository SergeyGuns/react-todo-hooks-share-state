import React, { Component } from 'react';
import './App.css';
import HookStateTodo from './container/HookStateTodo';
import HookStateCounterTodo from './container/HookStateCounterTodo';
import HookReduserTodo from './container/HookReduserTodo';
import HookReduserCounter from './container/HookReduserCounter';

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
          <HookReduserCounter />
          <HookReduserTodo />
          <hr />
        </div>
      </div>
    );
  }
}

export default App;
