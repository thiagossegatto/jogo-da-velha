import React from "react";
import { FaRegCircle, FaTimes } from "react-icons/fa";

import Row from "./Row";

const Game = props => {
  return (
    <div className="gameAll">
      <h3>{props.game.name}</h3>
      <span>Próximo: {props.game.initMark?<FaTimes/>:<FaRegCircle/>}</span>
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
