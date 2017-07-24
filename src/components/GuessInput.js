import React, { Component } from 'react';

import './GuessInput.css';


class GuessInput extends Component {
    render() {
        return (
            <div className="guess-input">
               
                    <input type = "text" placeholder = "Make a guess" />
                    <br/>
                    <button type="submit" value="Submit"> GUESS </button>
               
            </div>
    );
    }
}

export default GuessInput;
