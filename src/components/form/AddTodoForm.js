import React, { useState } from 'react';

import { useTodoDispatchContext } from '../../context/todoContextProvider';
import { addTodo } from '../../context/todoOperations';
import './AddTodoForm.css';

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
    <div className="add-to-form">
      <form onSubmit={handleSubmit}>
        <label>
          Todo Input:
          <input 
            onChange={handleChange} 
            value={textInput} 
          />
        </label>
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
