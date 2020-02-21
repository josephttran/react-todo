import React from 'react'
import './Task.css'

function Task({todo, index, setTodos}) {
  const handleClickComplete = (value) => {
    setTodos(prevState => {
      return prevState.map((todo, index) => {
        if (index === value) {
          todo.done = !todo.done
        }
        return todo;
      });
    });
  }

  const handleClickDelete = (value) => {
    setTodos(prevState => {
      return prevState.filter((todo, index) => index !== value);
    });
  }

  return (
    <div className="task">
      <span className="task-name" style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.value}
      </span>
      <button className="task-btn" onClick={() => handleClickComplete(index)}>
        {todo.done ? 'Undo' : 'Complete'}
      </button>
      <button className="task-del-btn" onClick={() => handleClickDelete(index)}>
        Delete
      </button>
    </div>
  )
}

export default Task;