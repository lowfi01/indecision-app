
class VisToggle extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      toggle: false
    }

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    this.setState((prevState) => ({ toggle : !prevState.toggle  }));
  }

  render() {
    return (
      <div>
        <h1>Visibility toggle</h1>
        <button onClick={this.onToggle}>{this.state.toggle? 'Show Details': 'Hide Details'}</button>
        {
          this.state.toggle && <p>Hey. These are some details you can now see!</p>
        }
      </div>
    )
  }

}


ReactDOM.render(<VisToggle/>, document.getElementById('app'));

// const state = {
//   toggle: false
// }

// const onToggle = () => {

//   state.toggle = !state.toggle;
//   render();

// };


// const render = () => {

//   const template = (

//     <div>
//       <h1>Visibility toggle</h1>
//       <button onClick={onToggle}>{state.toggle? 'Show Details': 'Hide Details'}</button>
//       {
//         state.toggle && <p>Hey. These are some details you can now see!</p>
//       }
//     </div>

//   );

//   ReactDOM.render(template, document.getElementById('app')); // eslint-disable-line

// }

// render();