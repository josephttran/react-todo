import React from 'react';

import './styles/app.css';
import Header from './components/Header';
import AddTodoForm from './components/form/AddTodoForm';
import List from './components/list/List';
import ClearTodoList from './components/buttons/ClearTodoList'

function App() {
  return (
    <div className="tw-flex tw-flex-col tw-bg-white tw-overflow-hidden">
      <Header />
      <main className="tw-px-4">
        <div className="tw-my-4">
          <AddTodoForm />
        </div>
        <List />
        <div className="tw-fixed tw-bottom-0 tw-left-0 tw-w-screen tw-p-4">
          <ClearTodoList />
        </div>
      </main>      
    </div>
  );
}

export default App;
