import React from 'react';

import './GuessResponse.css';

export default function GuessResponse(props) {
  return (
    <div className="guess-response">
      <p>
        {props.onSubmit}
      </p>
    </div>
  );
}
