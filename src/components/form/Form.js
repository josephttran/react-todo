import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <div className="form">
        <form onSubmit={(evt) => this.props.handleSubmit(evt)}>
          <input 
            onChange={(evt) => this.props.handleChange(evt)} 
            value={this.props.inputValue} 
          />      
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;
