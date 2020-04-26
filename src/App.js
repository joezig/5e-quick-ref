import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SingleSpell from './components/SingleSpell/SingleSpell';
import SpellsList from './components/SpellsList/SpellsList';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchfield: '',
      showSearch: true,
      spells: []
    }
  }

  componentDidMount() {
    this.setState({searchfield: ''})
    fetch('https://www.dnd5eapi.co/api/spells/')
        .then(res => res.json() )
        .then(data => this.setState({ spells: data.results }))
}

  changeHandler = (evt) => {
    this.setState({ searchfield: evt.target.value})
  }

  render() {
    const { searchfield, spells } = this.state;
    const filteredSpells = spells.filter(spell => (
      spell.name.toLowerCase().includes(searchfield.toLowerCase())
    ))

    return (
      <div className="App">
        <Route exact path='/' render={() => <SearchBar handleChange={this.changeHandler} placeholder='search spells' />} />
        <Switch>
          <Route 
            exact 
            path='/' 
            render ={ () => <SpellsList spells={filteredSpells} />} 
          />
          <Route  
            exact 
            // path={`:/${this.state.spells.index}`} 
            path={`/:spellName`} 
            render={(routeProps) => <SingleSpell spellName={routeProps.match.params.spellName} {...routeProps} />} 
          />
        </Switch>
      </div>
    );
  }
}

export default App;
