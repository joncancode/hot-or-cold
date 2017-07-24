import React, { Component } from 'react';

import './Header.css';


class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                <button className="what">What?</button>
                <button className="new">+ New Game</button>
                </nav>
                <br/>
                <h1 className="gameName">Hot or Cold</h1>
            </header>
    );
    }
}

export default Header;
