import React, { Component } from 'react';

import Header from './components/Header';
import GuessResponse from './components/GuessResponse';
import GuessInput from './components/GuessInput';
import PastGuesses from './components/PastGuesses';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      answer: Math.floor(Math.random() * 100) + 1,
      numberInput: '',
      listOfGuesses: [
        // ...this.state.athleteInfo,
        // { name: this.state.nameInput, time: this.state.timeInput }
      ],
      gameState: 'start'
    };
  }

  changeNumber(e) {
    this.setState({
    numberInput: e.target.value
    });
  }

  submitNumber(e) {
    e.preventDefault();
    console.log('working')
    this.setState({
    listOfGuesses: [
      ...this.state.listOfGuesses, this.state.numberInput
]
    });
  }

  resetGame() {
    this.setState({
      listOfGuesses: [],
      gameState: 'start',
      answer: Math.floor(Math.random() * 100) + 1
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
    console.log(GuessInput);
    return (
      <div className="App">
        <Header />

        <div className="guess-box">
          <GuessResponse />
          <GuessInput 
            onChange={e=> this.changeNumber(e)} 
            onSubmit={e => this.submitNumber(e)} 
            name="numberInput" 
            value={this.state.numberInput} />
          <PastGuesses />
        </div>
      </div>
    );
  }
}


export default App;
