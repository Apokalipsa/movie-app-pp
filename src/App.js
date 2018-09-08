import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Movie, Movies } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Switch>
          <Route exact path='/' component={Movies} />
          <Route exact path='/movies/:id' component={Movie} />
        </Switch>
      </div>
    );
  }
}
export default App;
