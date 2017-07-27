import React from 'react';

import './GuessInput.css';

export default function GuessInput(props) {
  return (
    <div className="guess-input">
      <form onSubmit={props.onSubmit}>
        <input
          type="number"
          name="numberInput"
          placeholder="?"
          value={props.numberInput}
          onChange={props.onChange}
          min='1'
          max='100'
          required
        />
        <br />
        <button type="submit" value="Submit">
           TAKE A GUESS 
        </button>
      </form>

      <h2 >
        Guess # {props.guessCount + 1}
      </h2>
    </div>
  );
}
