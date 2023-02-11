import React from 'react';
import './App.css';

class App extends React.Component {
  // initial state
  state = {
    monsters: [],
  }

  // update the state after mounting app component
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(
        () => ({ monsters: users }),
        () => { console.log('state is:', this.state) } // logging to the console
      ))
  }

  render() {
    return (
      <div className='app_container'>
        <h1>Hello world!</h1>
      </div>
    );
  }
}

export default App;