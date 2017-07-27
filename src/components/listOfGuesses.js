import React from 'react';

import './listOfGuesses.css';

export default function listOfGuesses(props) {
  return (
      <h2>
        Guess # {props.listOfGuesses}{' '}
      </h2>
  );
}
