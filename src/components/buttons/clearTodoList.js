import React from 'react';

import { useTodoDispatchContext } from '../../context/todoContextProvider';
import { replaceTodoList } from '../../context/todoOperations';

function ClearTodoList() {
  const dispatch = useTodoDispatchContext();

  const clearTodoList = () => {
    localStorage.removeItem('todos');
    replaceTodoList(dispatch, []);
  }
  return(
    <div>
      <button onClick={clearTodoList}>Clear List</button>
    </div>
  );
}

export default ClearTodoList;