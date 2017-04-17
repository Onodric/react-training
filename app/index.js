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
        Hello {this.props.name}!
      </div>
    )
  }
}

class FriendsContainer extends React.Component {
  render() {
    var name = 'Tyler McGinnis';
    var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen'];
    return (
      <div>
        <h3> Name: {name} </h3>
        <ShowList names={friends} />
      </div>
    )
  }
}

class ShowList extends React.Component {
  render() {
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {this.props.names.map(function(friend){
            return <li> {friend} </li>;
          })}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <App name="World"/>,
  document.getElementById('app')
);
ReactDOM.render(
    <FriendsContainer/>,
    document.getElementById('friends')
)