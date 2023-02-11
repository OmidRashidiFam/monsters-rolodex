import React from 'react';
import './App.css';

import SearchBox from './components/search-box/search-box';

class App extends React.Component {
  // initial state
  state = {
    monsters: [],
    searchFeild: ''
  }

  // update the state after mounting app component
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(
        // updating the state
        () => ({ monsters: users }),
        // logging out to the console
        () => { console.log('state is:', this.state) }
      ))
  }

  render() {
    // destructure methods from component
    const { onChangeHandler } = this

    // destructure from state
    const { monsters, searchFeild } = this.state

    return (
      <div className='app_container'>
        <h1 className='app_title'>Mosters Rolodex</h1>
        <SearchBox className='searchBox' placeholder='Search Monsters by Name' onChangeHandler={onChangeHandler} />
        {monsters.map(monster => {
          return (
            <h1 key={monster.id}>{monster.name}</h1>
          )
        })}
      </div>
    );
  }
}

export default App;