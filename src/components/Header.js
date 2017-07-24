import React, { Component } from 'react';

import './Header.css';


class Header extends Component {
    render() {
        return (
            <header>
                <button className="what">What?</button>
                <button className="new">+ New Game</button>
                <h1>Hot or Cold</h1>
            </header>
    );
    }
}

export default Header;
