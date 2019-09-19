import React, {Component} from 'react';
import './App.css';
import Homepage from './Homepage';
import {Route, Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';

class App extends Component {

  renderMainRoutes() {
    return (
      <>
      <Route 
      exact
      path='/'
      render={() => {
        return (<body><Header /><Homepage navLinks="loggedOut"/><Footer /></body>)
      }}
      />
      <Route
      exact
      path='/login'
      render={() => {
        return (<body><Header /><Login navLinks="loggedOut"/><Footer /></body>)
      }}
      />
      </>
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
