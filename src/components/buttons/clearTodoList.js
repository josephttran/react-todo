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
    <button className="tw-w-full tw-p-1 tw-leading-8 tw-font-semibold
                      tw-bg-white hover:tw-bg-red-600 tw-border tw-border-blue-700 tw-rounded-full" 
            onClick={clearTodoList}>
      CLEAR LIST
    </button>
  );
}

export default ClearTodoList;