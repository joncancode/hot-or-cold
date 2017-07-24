import React, { Component } from 'react';

import './GuessInput.css';


class GuessInput extends Component {
    render() {
        return (
            <div className="guess-input">
                <form>
                    <input type = "text" placeholder = "guess">
                    <input type="submit" value="Submit">
                </form>
            </div>
    );
    }
}

export default GuessInput;
