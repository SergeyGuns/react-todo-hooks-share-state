import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import CounterTodo from './CounterTodo';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Todo />
        <CounterTodo />
      </div>
    );
  }
}

export default App;
