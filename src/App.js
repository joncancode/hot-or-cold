import React, { Component } from 'react';
import Header from './components/Header'
import GuessBox from './components/GuessBox'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <GuessBox/>
      </div>
    );
  }
}

export default App;
