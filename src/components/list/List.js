import React, { useState, useEffect } from 'react';

import { useTodoStateContext, useTodoDispatchContext } from '../../context/todoContextProvider';
import { replaceTodoList } from '../../context/todoOperations';

import Task from './Task';

function List() {
  const state = useTodoStateContext();
  const dispatch = useTodoDispatchContext();

  const [todoList, setTodoList] = useState(() => {
    if (localStorage.getItem('todos')) {
      replaceTodoList(dispatch, JSON.parse(localStorage.getItem('todos')));
      return JSON.parse(localStorage.getItem('todos'))
    }
    return state.todos;
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos));
    setTodoList(JSON.parse(localStorage.getItem('todos')));
  }, [state.todos]);

  return (
    <div>
      <div className="tw-mb-4 tw-font-semibold">
        List of Tasks
      </div>
      <div className="tw-pr-2 tw-h-screen-3/5 tw-flex tw-flex-col tw-flex-grow tw-overflow-auto">
        {todoList.length > 0
          ?
          todoList.map((todo, index) => {
            return (
              <Task
                key={index}
                index={index}
                todo={todo}
              />
            );
          })
          :
          <div>Todo Empty</div>
      }
      </div>      
    </div>

  );
}

export default List;
