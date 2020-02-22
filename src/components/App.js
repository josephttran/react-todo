import React from 'react';

import './App.css';
import AddTodoForm from './form/AddTodoForm';
import List from './list/List';

function App() {
  return (
    <div className="App">
      <h1>Todo List App</h1>
      <div className="todo-container">
        <AddTodoForm />
        <List />
      </div>
    </div>
  );
}

export default App;
