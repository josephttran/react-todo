import React from 'react';

import AddTodoForm from './form/AddTodoForm';
import List from './list/List';
import ClearTodoList from './buttons/clearTodoList'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo List App</h1>
      <div className="todo-container">
        <AddTodoForm />
        <List />
        <ClearTodoList />
      </div>
    </div>
  );
}

export default App;
