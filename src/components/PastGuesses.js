import React from 'react';

import './PastGuesses.css';

export default function PastGuesses(props) {
  return (
    <div className="past-guesses">
      
      <p>Past Guesses</p>

      {props.listOfGuesses.map((number, i) => (

        <span className="past-numbers" key={i}>{number}</span>

      ))}
    </div>
  );
}
