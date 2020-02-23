import React from 'react'

import { useTodoDispatchContext } from '../../context/todoContextProvider';
import { deleteTodo, toggleTodoDone } from '../../context/todoOperations';

function Task({todo, index}) {
  const dispatch = useTodoDispatchContext();

  const handleClickComplete = (value) => {
    toggleTodoDone(dispatch, value);
  }

  const handleClickDelete = (value) => {
    deleteTodo(dispatch, value);
  }
 
  return (
    <div className="mb-2 p-2 bg-gray-300 flex flex-row items-center rounded-lg">
      <input className="mx-2" 
              type="checkbox" 
              checked={todo.done} 
              onChange={() => handleClickComplete(index)}/>
      <span className={todo.done ? "flex-grow line-through" : "flex-grow"} >
        {todo.value}
      </span>
      <button className="mr-1 p-1 relative right-0 border border-blue-700 hover:bg-red-600 rounded-full"
              onClick={handleClickDelete.bind(this, index)}>
        DELETE
      </button>
    </div>
  )
}

export default Task;