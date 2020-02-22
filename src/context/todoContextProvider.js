import React, { useContext, createContext, useReducer } from 'react';

import { todoReducer } from './reducers/todoReducer';

/*
 * Context and Provider 
 */
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

function useTodoStateContext() {
  const context = useContext(TodoStateContext);

  if (context === undefined) {
    throw new Error('useTodoState must be used within a TodoContextProvider')
  }

  return context
}

function useTodoDispatchContext() {
  const context = useContext(TodoDispatchContext);
  
  if (context === undefined) {
    throw new Error('useTodoDispatch must be used within a TodoContextProvider')
  }
  
  return context
}

function TodoContextProvider(props) {
  const initialState = {
    todos: [
      {
        value: 'Cook dinner',
        done: false
      },
      {
        value: 'Take out trash',
        done: true
      },
      {
        value: 'Read',
        done: true
      },
      {
        value: 'Eat',
        done: false
      }
    ]
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {props.children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export { useTodoStateContext, useTodoDispatchContext, TodoContextProvider }