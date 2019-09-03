class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       options : []
    };

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      console.log(options);

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


  handlePick() {
    const number = Math.random() * this.state.options.length;
    alert(this.state.options[Math.floor(number)]);
  }

  handleDeleteOptions() {
    this.setState(() => ({ options : [] }));
  };

  handleDeleteOption(option) {

    this.setState((prevState) => ({
        // filter will remove the elements we don't need
        // note option !== word, will return false when they match
        // false return deletes, while truthy keeps elements
        options: prevState.options.filter((word) => option !== word )
      }));
  }

  handleAddOption(option) {
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
        <Header subtitle={subtitle} title={title} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          handleDeleteOption={this.handleDeleteOption}
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}


const Header = ({ title, subtitle }) => (
      <div>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
      </div>
    );

    // Define default values for props passed down to Header
    Header.defaultProps = {
      title: 'Indecision App',
    };

// class Header extends React.Component{
//   render() {
//     const { title, subtitle } = this.props;

//     return (
//       <div>
//         <h1>{title}</h1>
//         <h2>{subtitle}</h2>
//       </div>
//     );
//   }
// }

const Action = ({handlePick, hasOptions}) => (
    <button
      onClick={handlePick}
      disabled={!hasOptions}
    >
       What should I do
    </button>
    );

const Options = (props) => (
  <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add an option to get started!</p>  }
        {
          props.options.map((opt) => (
            <Option
              handleDeleteOption={props.handleDeleteOption}
              key={opt}
              optionText={opt}
            />
          ))
        }
  </div>
)

const Option = (props) => (
  <div>
    {
      props.optionText
    }
  <button onClick={ (e) => {
    props.handleDeleteOption(props.optionText);
  }}
  >remove</button>
  </div>
  );

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    }

    this.handleAddOption = this.handleAddOption.bind(this);
  }

  // Behaviour that handles the form & getting the
  // the input text from the form should be handled here
  handleAddOption(e) {
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
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option" />
        <button>Submit</button>
        {this.state.error && <p>{this.state.error}</p>}
      </form>
      </div>
    )
  }
}

// const UserComponent = ({name, age}) => (
//     <div>
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//     </div>
//   );


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));