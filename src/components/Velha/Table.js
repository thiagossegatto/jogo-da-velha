import React from "react";

import Game from "./Game";

const Table = props => {
  return (
    <div className="table">
      {props.games.map(game => (
        <Game game={game} handleClick={props.handleClick} />
      ))}
      <div className="gameAll newGame">
        <div className="game">
          <button onClick={props.nemGame}>NEW GAME</button>
        </div>
      </div>
    </div>
  );
};

export default Table;
