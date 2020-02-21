import React, { useState } from 'react'
import './AddTodoForm.css'

function AddTodoForm({setTodos}) {
  const [textInput, setTextInput] = useState("");

  const handleChange = (e) => {
    setTextInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (textInput.length > 0) {
      setTodos(prevState => [...prevState, {
        value: textInput,
        done: false
      }]);
      setTextInput("");
    }
  }

  return (
    <div className="add-to-form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Todo Input:
          <input 
            onChange={(e) => handleChange(e)} 
            value={textInput} 
          />
        </label>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
