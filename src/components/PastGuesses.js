import React from 'react';

import './PastGuesses.css';

export default function PastGuesses(props) {
  return (
    <div className="past-guesses">
      <span className="past-numbers">{props.listOfGuesses}</span>
    </div>
  );
}
