import React, { Component } from 'react'
import Task from './Task';

class List extends Component {
  render() {
    return (
      <div className="list">
        {this.props.todos.map((todo, index) => {
          return (
            <Task 
              key={index}
              index={index}
              handleClick={this.props.handleClick}
              handleClickDelete={this.props.handleClickDelete}
              todo={todo} 
            /> 
          )
        })}
      </div>
    )
  }
}

export default List;
