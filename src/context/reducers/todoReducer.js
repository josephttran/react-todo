import * as actionTypes from '../actionTypes/actionTypes';

/* 
 * Implement actions behavior
 * Takes in state and actions then returns new state
 */
export function todoReducer(state, action) {
  const { type, payload } = action;

  switch(type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos , payload]
        };
    case actionTypes.DELETE_TODO:
      return  {
        ...state,
        todos: state.todos.filter((todo, index) => index !== payload)
      };
    case actionTypes.REPLACE_TODOLIST:
      return {
        ...state,
        todos: payload
      }
    case actionTypes.TOGGLE_TODO:
      return  {
        ...state,
        todos: state.todos.map((todo, index) => (index === payload) ? {...todo, done: !todo.done } : todo)
      };
    default:
      throw new Error(`Invalid action type: ${action.type}!`);
  }
}