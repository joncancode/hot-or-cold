import React, { Component } from 'react';

import './PastGuesses.css';


class GuessInput extends Component {
    render() {
        return (
            <div className="past-guesses">
                <span className="past-numbers">50</span>
            </div>
    );
    }
}

export default GuessInput;
