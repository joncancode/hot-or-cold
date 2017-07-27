import React from 'react';

import './NumberOfGuesses.css';

export default function NumberOfGuesses(props) {
  return (
    <div className="number-of-guesses">
      <h2>
        Guess # {props.listOfGuesses}{' '}
      </h2>
    </div>
  );
}


   //  Guess # {this.props.guessNumber}{' '}