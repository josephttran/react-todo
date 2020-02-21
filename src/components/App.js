import React, { useState } from 'react';
import './App.css';

import AddTodoForm from './form/AddTodoForm';
import List from './list/List';

function App() {
  const [todos, setTodos] = useState([
    {
      value: 'Cook dinner',
      done: false
    },
    {
      value: 'Take out trash',
      done: true
    },
    {
      value: 'Read',
      done: true
    },
    {
      value: 'Eat',
      done: false
    }
  ]);

  return (
    <div className="App">
      <h1>Todo List App</h1>
      <div className="todo-container">
        <AddTodoForm setTodos={setTodos} />
        <List todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
