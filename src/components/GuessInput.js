import React from 'react';

import './GuessInput.css';

export default function GuessInput(props) {
  return (
    <div className="guess-input">
      <form>
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
        <button type="submit" onSubmit={props.onSubmit} value="Submit">
          {' '}TAKE A GUESS{' '}
        </button>
      </form>

      <h2>
        Guess # {props.listOfGuesses}{' '}
      </h2>
    </div>
  );
}
