import React from "react";

import Game from "./Game";

const Table = props => {
  return (
    <div className="table">
      <div>
        Acertos: {props.status.acertos}
      </div>
      <div>
        Erros: {props.status.errors}
      </div>
      <Game cards={props.cards} handleClick={props.handleClick} />
    </div>
  );
};

export default Table;
