class Counter extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }

    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this)
  }

  componentDidMount() {
    const json = localStorage.getItem('counter');
    const count = parseInt(json, 10);
    if (!isNaN(count))
      this.setState(() => ({count}));

  }

  componentDidUpdate(prevProp, prevState) {
    if(prevState.count !== this.state.count){
      const json = this.state.count;
      localStorage.setItem('counter', json);
    }

  }

  handleAddOne(e){
    e.preventDefault();
    this.setState((prevState) => ({
        count: prevState.count + 1
      }));
  }

  handleMinusOne(e){
    e.preventDefault();
    this.setState(prevState => (
      {
        count: prevState.count - 1
      }
    ));
  }

  handleReset(e){
    e.preventDefault();
    this.setState(() => ({
      count: 0
    }));
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

// Counter.defaultProps = {
//   counter: 0
// };

ReactDOM.render(<Counter />, document.getElementById('app'));

// // Counter application
// // Used to explain how to render without components

// let count = 0;

// const addOne = function increment() {
//   count += 1;
//   renderApp();
// };

// const minusOne = () => {
//   count -= 1;
//   renderApp();
// };

// const reset = () => {
//   count = 0;
//   renderApp();
// };

// const appRoot = document.getElementById('app');

// const renderApp = () => {

//   const tempTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne} >+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(tempTwo, appRoot); // eslint-disable-line
// }

// renderApp();