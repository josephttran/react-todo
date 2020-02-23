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
    <div className="tw-mb-2 tw-p-2 tw-bg-gray-300 tw-flex tw-flex-row tw-items-center tw-rounded-lg">
      <input className="tw-mx-2" 
              type="checkbox" 
              checked={todo.done} 
              onChange={() => handleClickComplete(index)}/>
      <span className={todo.done ? "tw-flex-grow tw-line-through" : "tw-flex-grow"} >
        {todo.value}
      </span>
      <button className="tw-mr-1 tw-p-1 tw-relative tw-right-0 
                        tw-border tw-border-blue-700 hover:tw-bg-red-600 tw-rounded-full"
              onClick={handleClickDelete.bind(this, index)}>
        DELETE
      </button>
    </div>
  )
}

export default Task;