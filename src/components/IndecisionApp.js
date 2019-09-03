import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //      options : []
  //   };

  //   this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  //   this.handlePick = this.handlePick.bind(this);
  //   this.handleAddOption = this.handleAddOption.bind(this);
  //   this.handleDeleteOption = this.handleDeleteOption.bind(this);
  // }

  state = {
    options : [],
    // define undefined as a starting value allows us to use this for conditional checking
    // !!undefined - start as false
    // assigning a string or any value to selectedOption,
    // will make any conditions that are defined using this state
    // into a truthy value, very powerful use of undefined.
    selectedOption : undefined
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      // console.log(options);

      if(options) {
        this.setState(() => ({options}));
      }

    } catch (error) {
      console.log(error);
    }

  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('component did unmount');
  }

  handleCloseModal = () => {
    this.setState(() => ({ selectedOption : undefined }))
  }


  handlePick = () => {
    const number = Math.random() * this.state.options.length;
    const option = this.state.options[Math.floor(number)];
    // alert(option);
    // Add selected option to state object
    this.setState(() => ({ selectedOption : option }));
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options : [] }));
  };

  handleDeleteOption = (option) => {
    this.setState((prevState) => ({
        // filter will remove the elements we don't need
        // note option !== word, will return false when they match
        // false return deletes, while truthy keeps elements
        options: prevState.options.filter((word) => option !== word )
      }));
  }

  handleAddOption = (option) => {
    // !option will check if the string is not empty
    // !option is the same as option == '';
    if (!option) {
      return 'Enter valid value to add item';
    }
    // will check if the string is already in option
    // -1 will be returned if no option was found
    // 0 will be returned if it's the first item
    // 1 will be reutnred if it's the second item
    else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }


  render() {
    const title = 'Indecision App';
    const subtitle = 'Let me decide for you';

    return (
      <div>
        <div className="container">
          <Header subtitle={subtitle} title={title} />

          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">

            <Options
              class="widget__content"
              handleDeleteOption={this.handleDeleteOption}
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
            />

            <AddOption
              class="widget__form"
              handleAddOption={this.handleAddOption}
            />
          </div>
          <OptionModal
            selectedOption={this.state.selectedOption}
            closeModal={this.handleCloseModal}
          />
        </div>
      </div>
    )
  }
}
