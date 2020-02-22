import * as actionTypes from '../actionTypes/actionTypes';

/* 
 * Actions to dispatch 
 */
const addTodo = (textInput) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: {
      value: textInput,
      done: false
    }
  }
}

const deleteTodo = (index) => {
  return {
    type: actionTypes.DELETE_TODO,
    payload: index
  }
}

const replaceTodoList = (todosList) => {
  return {
    type: actionTypes.REPLACE_TODOLIST,
    payload: todosList
  }
}

const toggleTodo = (index) => {
  return {
    type: actionTypes.TOGGLE_TODO,
    payload: index
  }
}

export { addTodo, deleteTodo, replaceTodoList, toggleTodo }