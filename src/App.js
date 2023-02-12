import { useState, useEffect } from 'react';
import './App.css';

import SearchBox from './components/search-box/search-box';
import CardList from './components/card-list/card-list';

const App = () => {
  // initial state
  const [searchFeild, setSearchFeild] = useState('')
  const [monsters, setMosters] = useState([])
  const [filteredMonsters, setFilteredMosters] = useState(monsters)

  // update the monsters after mounting app component
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMosters(users))
  }, [])

  // update the filteredMonsters after monsters and searchFeild
  useEffect(() => {
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchFeild)
    })
    setFilteredMosters(filteredMonsters)
  }, [monsters, searchFeild])

  // change handler funtion 
  const onChangeHandler = event => {
    const searchFeild = event.target.value.toLowerCase()
    setSearchFeild(searchFeild)
  }

  return (
    <div className='app_container'>
      <h1 className='app_title'>Mosters Rolodex</h1>
      <SearchBox
        className='searchBox'
        placeholder='Search Monsters by Name'
        onChangeHandler={onChangeHandler}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
