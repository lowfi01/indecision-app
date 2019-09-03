import React from 'react';


const Action = ({handlePick, hasOptions}) => (
  <button
    className="big-button"
    onClick={handlePick}
    disabled={!hasOptions}
  >
     What should I do
  </button>
  );


export {Action as default};