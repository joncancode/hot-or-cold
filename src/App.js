import React, { Component } from 'react';

import Header from './components/Header';
import GuessResponse from './components/GuessResponse';
import GuessInput from './components/GuessInput';
import PastGuesses from './components/PastGuesses';

import {checkDistance} from './helper/checkDistance'

//import {answerCorrectly} from './answerCorrectly'
//functions are first class citizens - values
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      answer: Math.floor(Math.random() * 100) + 1,
      numberInput: '',
      listOfGuesses: [],
      distanceAway: ''
    };
  }

  changeNumber(e) {
    this.setState({
      numberInput: e.target.value
    });
  }

  submitNumber(e) {
    e.preventDefault();
    this.setState({
      listOfGuesses: [...this.state.listOfGuesses, this.state.numberInput], 
      distanceAway: checkDistance(this.state.numberInput, this.state.answer)
    });
    this.answerCorrectly(this.state.numberInput, this.state.answer);
  }

  answerCorrectly(numberInput, answer) {
    console.log('numberinput', numberInput);
    console.log('answer', answer);
    if (Number(numberInput) === answer) {

      this.resetGame()
    } 
    else {
      console.log("keep trying") 
    }
  }


  resetGame() {
    this.setState({
      listOfGuesses: [],
      answer: Math.floor(Math.random() * 100) + 1
    });
  }

  whatClicked() {
    alert(
      'What do I do? \nThis is a Hot or Cold Number Guessing Game. The game goes like this: \n 1. I pick a random secret number between 1 to 100 and keep it hidden. \n 2. You need to guess until you can find the hidden secret number. \n 3. You will get feedback on how close ("hot") or far ("cold") your guess is. \n So, Are you ready?!'
    );
  }

  render() {
    return (
      <div className="App">
        <Header
          onClickNew={e => this.resetGame(e)}
          onClickWhat={e => this.whatClicked(e)}
        />

        <div className="guess-box">
          <GuessResponse 
          onSubmit={e => this.checkDistance(e)}
         
          />

          <GuessInput
            onChange={e => this.changeNumber(e)}
            onSubmit={e => this.submitNumber(e)}
            name="numberInput"
            value={this.state.numberInput}
            guessCount={this.state.listOfGuesses.length}
          />


          <PastGuesses listOfGuesses={this.state.listOfGuesses} />
        </div>
      </div>
    );
  }
}

export default App;
