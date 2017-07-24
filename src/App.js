import React, { Component } from 'react';
import Header from './components/Header'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div>Make Your Guess</div>
        <div>Text box</div>
        <div>Button</div>
        <div>Past Guesses</div>
      </div>
    );
  }
}

export default App;
