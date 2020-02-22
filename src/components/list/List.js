import React from 'react';

import { useTodoStateContext } from '../../context/todoContextProvider';
import Task from './Task';

function List() {
  const state = useTodoStateContext();

  return (
    <div className="list">
      {state.todos.map((todo, index) => {
        return (
          <Task
            key={index}
            index={index}
            todo={todo}
          />
        );
      })}
    </div>
  );
}

export default List;
