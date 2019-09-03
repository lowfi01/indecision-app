import React from 'react';

export default class AddOption extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     error: undefined
  //   }

  //   this.handleAddOption = this.handleAddOption.bind(this);
  // }

  state = {
    error: undefined
  };


  // // Behaviour that handles the form & getting the
  // // the input text from the form should be handled here
  // handleAddOption(e) {
  //   e.preventDefault();
  //   const input = e.target.elements.option.value.trim();
  //   const error = this.props.handleAddOption(input);
  //   this.setState(() => ({
  //     error
  //   }));

  //   if(!error) {
  //     e.target.elements.option.value = '';
  //   }
  // }

  handleAddOption = (e) => {
    e.preventDefault();
    const input = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(input);
    this.setState(() => ({
      error
    }));

    if(!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
      <form className="add-option" onSubmit={this.handleAddOption}>
        <input className="add-option__input" type="text" name="option" />
        <button className="button">Submit</button>
      </form>
      </div>
    )
  }
}