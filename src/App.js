import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/Card-list.component.jsx';
import { Search } from './components/search-box/Search-box.Component.jsx';
class App extends Component {
  constructor() {
    super()
    this.state = {
      monster: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(resoponse =>
      resoponse.json()).then(users => this.setState({ monster: users }))
  }
  render() {
    const monsters = this.state.monster;
    const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (

      <div className="App">
        <h1>Kitten house </h1>
        <Search
          placeholder="Search kitty"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monster={filteredMonsters} />


      </div>
    )
  }

}

export default App;
