import React, { Component } from 'react';
import './App.css';
import Homepage from './Homepage';
import { Route, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';

class App extends Component {

  renderMainRoutes() {
    return (
      <>
        <Route
          exact
          path='/'
          render={() => {
            return (<body><Header navLinks="registering" /><Homepage /><Footer /></body>)
          }}
        />
        <Route
          exact
          path='/login'
          render={() => {
            return (<body><Header navLinks="registering" /><Login /><Footer /></body>)
          }}
        />
        <Route
          exact
          path='/register'
          render={() => {
            return (<body><Header navLinks="registering" /><Register /><Footer /></body>)
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
