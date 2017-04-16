var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// state (data)
// lifecycle events
// UI (always required)

class App extends React.Component {
  render() {
    return (
      <div>
        Hello Ben!
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);