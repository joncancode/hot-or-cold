import React from 'react';

import './GuessInput.css';

export default function GuessInput(props) {
  return (
    <form className="guess-input">
      <input 
        type="number"
        name="numberInput"
        placeholder="Make a guess"
        //onChange={this.props.onChangeValue}
        //value={this.props.numberInput}
        required
      />
      <br />
      <button type="submit" value="Submit">
        {' '}TAKE A GUESS{' '}
      </button>
    </form>
  );
}
