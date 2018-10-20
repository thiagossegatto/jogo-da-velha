import React from "react";

const Player = props => {
  return (
    <div className="player">
      <input
        name={props.name}
        value={props.value}
        onChange={e => props.handleChange(e.target.value, props.id)}
      />
      <div className="winners">{props.winners}</div>
      <div className="mark">
        <props.mark />
      </div>
    </div>
  );
};

export default Player;
