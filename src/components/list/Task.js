import React from 'react'

import { useTodoDispatchContext } from '../../context/todoContextProvider';
import { deleteTodo, toggleTodoDone } from '../../context/todoOperations';
import './Task.css'

function Task({todo, index}) {
  const dispatch = useTodoDispatchContext();

  const handleClickComplete = (value) => {
    toggleTodoDone(dispatch, value);
  }

  const handleClickDelete = (value) => {
    deleteTodo(dispatch, value);
  }

  return (
    <div className="task">
      <span className="task-name" style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.value}
      </span>
      <button className="task-btn" onClick={() => handleClickComplete(index)}>
        {todo.done ? 'Undo' : 'Complete'}
      </button>
      <button className="task-del-btn" onClick={handleClickDelete.bind(this, index)}>
        Delete
      </button>
    </div>
  )
}

export default Task;