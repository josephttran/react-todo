import React from 'react';

import './styles/app.css';
import Header from './components/Header';
import AddTodoForm from './components/form/AddTodoForm';
import List from './components/list/List';
import ClearTodoList from './components/buttons/clearTodoList'

function App() {
  return (
    <div>
      <Header />
      <main className="flex bg-gray-200">
        <AddTodoForm />
        <List />
        <ClearTodoList />
      </main>
    </div>
  );
}

export default App;
