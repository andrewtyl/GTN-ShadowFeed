import React, {Component} from 'react';
import './App.css';
import Homepage from './Homepage/Homepage';
import {Route, Link} from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class App extends Component {

  renderMainRoutes() {
    return (
      <Route 
      exact
      path='/'
      render={() => {
        return (<body><Header /><Homepage /><Footer /></body>)
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
