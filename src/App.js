import React from 'react';

import './styles/app.css';
import Header from './components/Header';
import AddTodoForm from './components/form/AddTodoForm';
import List from './components/list/List';
import ClearTodoList from './components/buttons/ClearTodoList'

function App() {
  return (
    <div className="flex flex-col justify-between bg-white overflow-hidden">
      <Header />
      <main className="px-4">
        <div className="my-4">
          <AddTodoForm />
        </div>
        <List />
        <div className="fixed bottom-0 left-0 w-screen p-4">
          <ClearTodoList />
        </div>
      </main>      
    </div>
  );
}

export default App;
