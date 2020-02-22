import * as actions from './actions/actions';

/* 
 * Function that get call
 * Takes in dispatch and action payload
 */
function addTodo(dispatch, textInput) {
  dispatch(actions.addTodo(textInput));
}

function deleteTodo(dispatch, index) {
  dispatch(actions.deleteTodo(index))
}

function toggleTodoDone(dispatch, index) {
  dispatch(actions.toggleTodo(index));
}

export { addTodo, deleteTodo, toggleTodoDone };
