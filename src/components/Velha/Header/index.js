import React from "react";
import { FaSlackHash, FaRegCircle, FaTimes } from "react-icons/fa";

import Player from "./player";

const Header = props => {
  return (
    <header>
      <div className="logo">
        <FaSlackHash />
      </div>
      {props.players.map((player, index) => (
        <Player
          key={index}
          name="player1"
          value={player.name}
          id={player.id}
          winners={player.winners}
          mark={player.mark ? FaTimes : FaRegCircle}
          handleChange={props.handleChange}
        />
      ))}
    </header>
  );
};

export default Header;
