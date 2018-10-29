import React from "react";

import Cards from "./Cards";

const Game = props => {
  return (
    <div className="gameAll memoria">
      <div className="game">
        {props.cards.map((card, index) => (
          <Cards
            card={card}
            id={index}
            key={index}
            handleClick={props.handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
