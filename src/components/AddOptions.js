import React from 'react';

export default class AddOptions extends React.Component {
  state = {
    error: []
  }
  // constructor(props) {
  //   super(props)
  //   this.handleAddOptions = this.handleAddOptions.bind(this)
  // }  DUE TO ARROW FUNCTION 
  handleAddOptions = (e) => {
    e.preventDefault();
    var option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return {
        error
      }
    })
    if (!error) {
      e.target.elements.option.value = ""
    }
  }
  render() {
    return (
      <div>
        {
          this.state.error && <p className="add-option-error">{this.state.error}</p>
        }
        <form className="add-option" onSubmit={this.handleAddOptions}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    )
  }
}