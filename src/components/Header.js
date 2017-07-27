import React from 'react';

import './Header.css';

export default function Header(props) {
  return (
    <header>
      <nav>
        <button className="what" onMouseUp={props.onMouseUp} >What?</button>
        <button className="new" onClick={props.onClick}>+ New Game</button>
      </nav>
      <br />
      <h1 className="gameName">Hot or Cold</h1>
    </header>
  );
}
