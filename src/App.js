import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import CounterTodo from './CounterTodo';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='hook'>
          <Todo />
          <CounterTodo />
        </div>
      </div>
    );
  }
}

export default App;
