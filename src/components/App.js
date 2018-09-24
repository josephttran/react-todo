import React, { Component } from 'react';
import './App.css';

import Form from './form/Form';
import List from './list/List';

class App extends Component {
  state = {
    inputValue: "",
    todos: [
      {
        value: 'Take out trash',
        done: true
      },
      {
        value: 'Cook dinner',
        done: false
      }
    ]
  }

  handleChange = (evt) => {
    this.setState({inputValue: evt.target.value})
  }

  handleClick = (index) => {
    const todos = this.state.todos;
    todos[index].done = !todos[index].done;
    this.setState({ todos });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const newTodo = {
      value: this.state.inputValue,
      done: false
    }
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({todos: todos, inputValue: ""});
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <Form 
          handleChange={this.handleChange} 
          inputValue={this.state.inputValue}
          handleSubmit={this.handleSubmit}
        />
        <List 
          handleClick={this.handleClick}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
