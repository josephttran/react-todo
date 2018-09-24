import React, { Component } from 'react'
import './Task.css'

class Task extends Component {
  render() {
    return (
      <div className="task">
        <span className="task-name" style={{ textDecoration: this.props.todo.done ? 'line-through' : 'none' }}>
          {this.props.todo.value}
        </span> 
        <button className="task-btn" onClick={() => this.props.handleClick(this.props.index)}>
          {this.props.todo.done ? 'Undo' : 'Complete'}
        </button> 
        <button className="task-del-btn" onClick={() => this.props.handleClickDelete(this.props.index)}>
          Delete
        </button>       

      </div>
    )
  }
}

export default Task;