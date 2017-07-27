import React from 'react';

import './GuessInput.css';

export default function GuessInput(props) {
  return (
    <div className="guess-input">
      <form onSubmit={props.onSubmit}>
        <input
          type="number"
          name="numberInput"
          placeholder="Make a guess"
          //onChange={this.props.onChangeValue}
          value={props.numberInput}
          onChange={props.onChange}
          required
        />
        <br />
        <button type="submit" value="Submit">
          {' '}TAKE A GUESS{' '}
        </button>
      </form>

      <h2 >
        Guess # {props.guessCount + 1}{' '}
      </h2>
    </div>
  );
}
