import React, { Component } from 'react';

import Addtodo from './Addtodo';
import TodoList from './Todolist';
import Sort from './Sort';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Addtodo />
        <Sort />
        <TodoList />
      </div>
    );
  }
}

export default App;
