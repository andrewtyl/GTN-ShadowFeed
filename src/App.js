import React, {Component} from 'react';
import './App.css';
import Homepage from './Homepage/Homepage';
import {Route, Link} from 'react-router-dom';
import './App.css';

class App extends Component {

  renderMainRoutes() {
    return (
      <Route 
      exact
      path='/'
      render={() => {
        return (<Homepage />)
      }}
      />
    )
  }

  render() {
    return (
      <div id="App">
        <main>
        {this.renderMainRoutes()}
        </main>
      </div>
    )
  }
}


export default App;
