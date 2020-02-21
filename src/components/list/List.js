import React from 'react'
import Task from './Task';

function List({todos, setTodos}) {
  return (
    <div className="list">
      {todos.map((todo, index) => {
        return (
          <Task
            key={index}
            index={index}
            todo={todo}
            setTodos={setTodos}
          />
        );
      })}
    </div>
  );
}

export default List;
