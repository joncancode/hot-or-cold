import React, { Component } from 'react';
import GuessResponse from './GuessResponse'
import GuessInput from './GuessInput'
import PastGuesses from './PastGuesses'


import './GuessBox.css';


class GuessBox extends Component {
    render() {
        return (
            <div className = "guess-box">
            	<GuessResponse/>
		        <GuessInput/>
		       	<PastGuesses/>
            </div>
    );
    }
}

export default GuessBox;
