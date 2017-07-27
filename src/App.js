import React, { Component } from 'react';

import Header from './components/Header';
import GuessResponse from './components/GuessResponse';
import GuessInput from './components/GuessInput';
import NumberOfGuesses from './components/NumberOfGuesses';
import PastGuesses from './components/PastGuesses';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      numberInput: '',
      listOfGuesses: [
        // ...this.state.athleteInfo,
        // { name: this.state.nameInput, time: this.state.timeInput }
      ],
      gameState: 'start'
    };
  }

  resetGame() {
    this.setState({
      //listOfGuesses: [],
      gameState: 'start'
    });
  }

  // onSubmit = e => {
  //     e.preventDefault();
  //     console.log('no spread', this.state.athleteInfo);
  //     console.log('spread op', ...this.state.athleteInfo);
  //     this.setState({
  //       athleteInfo: [
  //         ...this.state.athleteInfo,
  //         { name: this.state.nameInput, time: this.state.timeInput }
  //       ],
  //       nameInput: '',
  //       timeInput: ''
  //     });
  //   };

  render() {

    console.log(GuessInput)
    return (

      <div className="App">
        <Header />

        <div className="guess-box">
          <GuessResponse />
          <GuessInput />
          <NumberOfGuesses />
          <PastGuesses />
        </div>
      </div>
    );
  }
}

export default App;
