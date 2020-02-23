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
    <button className="w-full p-1 bg-white hover:bg-red-600 border border-blue-700 rounded-full leading-8 font-semibold" 
            onClick={clearTodoList}>
      CLEAR LIST
    </button>
  );
}

export default ClearTodoList;