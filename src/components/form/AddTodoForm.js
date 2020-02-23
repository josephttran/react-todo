import React, { useState } from 'react';

import { useTodoDispatchContext } from '../../context/todoContextProvider';
import { addTodo } from '../../context/todoOperations';

function AddTodoForm() {
  const [textInput, setTextInput] = useState("");
  const dispatch = useTodoDispatchContext();

  const handleChange = (e) => {
    setTextInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textInput.length > 0) {
      addTodo(dispatch, textInput);
      setTextInput("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-row leading-8">
      <input className="flex-grow border border-blue-700 rounded-full focus:bg-blue-200"
        onChange={handleChange} 
        value={textInput} 
      />
      <button className="ml-4 w-1/4 bg-blue-600 text-white border rounded-full">
        ADD
      </button>
    </form>
  );
}

export default AddTodoForm;
