import React from 'react';

const DeckDesc = ({ desc }) => {
  console.log(desc);
  return (
    <div className="deck--desc">
      <div className="content">
        <h3>How to play this deck</h3>
        <p>{desc.description}</p>
      </div>
    </div>
  );
}

export default DeckDesc;
