const app = {
  title: 'Indecision App',
  subtitle: 'Let this computer guide you my young indicisive child',
  options: []
};


// form submission for indicision app
const onsubmit = (e) => {

  e.preventDefault();
  const inputValue = e.target.elements.option.value;
  console.log(e.target.elements.option.value);
  if(inputValue) {
    app.options.push(inputValue);
    e.target.elements.option.value = '';
  }

  renderApp();
};

// select random item from list of items
const onMakeDecision = () => {
  const number = Math.random() * app.options.length;
  console.log(app.options[Math.floor(number)]);

  alert(app.options[Math.floor(number)]);
}

const onResetAll = () => {
  app.options = [];
  renderApp();
}

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {(app.options && app.options.length > 0) ?
        <p>You have options</p>: <p>No options here friend</p>
      }

      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
      <button onClick={onResetAll}>reset</button>

      <ol>
        {
          app.options.map((e, index) => <li key={index}>{e}</li>)
        }
      </ol>


      <form onSubmit={onsubmit} >
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  )

  ReactDOM.render(template, document.getElementById('app')); // eslint-disable-line
};

renderApp();