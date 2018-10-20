import React from "react";

import Game from "./game";

const Table = props => {
  return (
    <div className="table">
      {props.games.map(game => (
        <Game game={game} handleClick={props.handleClick} />
      ))}
    </div>
  );
};

export default Table;
