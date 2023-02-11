import React from 'react';
import './App.css';

import SearchBox from './components/search-box/search-box';
import CardList from './components/card-list/card-list';

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

  // change handler funtion
  onChangeHandler = (event) => {
    const searchFeild = event.target.value.toLowerCase()
    this.setState(
      // updating the state
      () => ({ searchFeild }),
      // logging out to the console
      () => { console.log('state is:', this.state) }
    )
  }

  render() {
    // destructure methods from component
    const { onChangeHandler } = this

    // destructure from state
    const { monsters, searchFeild } = this.state

    // filter monsters
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchFeild)
    })

    return (
      <div className='app_container'>
        <h1 className='app_title'>Mosters Rolodex</h1>
        <SearchBox className='searchBox' placeholder='Search Monsters by Name' onChangeHandler={onChangeHandler} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;