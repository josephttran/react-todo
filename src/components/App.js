import React, { Component } from 'react';
import './App.css';

import From from './form/Form';
import List from './list/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <From />
        <List />
      </div>
    );
  }
}

export default App;
