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
    <form onSubmit={handleSubmit} className="tw-flex tw-flex-row tw-leading-8">
      <input className="tw-flex-grow tw-border tw-border-blue-700 tw-rounded-full focus:tw-bg-blue-200"
        onChange={handleChange} 
        value={textInput} 
      />
      <button className="tw-ml-4 tw-w-1/4 tw-bg-blue-600 tw-text-white tw-border tw-rounded-full">
        ADD
      </button>
    </form>
  );
}

export default AddTodoForm;
