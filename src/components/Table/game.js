import React from "react";

import Row from "./row";

const Game = props => {
  return (
    <div className="gameAll">
      <h3>{props.game.name}</h3>
      <div className="game">
        {props.game.rows.map(row => (
          <Row
            row={row}
            key={props.game.id + row.position}
            id={props.game.id}
            handleClick={props.handleClick}
          />
        ))}
      </div>
      <h5>Vencedor: {props.game.winner}</h5>
    </div>
  );
};

export default Game;
