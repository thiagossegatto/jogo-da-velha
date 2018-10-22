import React from "react";

const Cards = props => {
  return (
    <div className="cards" onClick={() => props.handleClick(props.card.name,props.id)}>
      <div style={{display:'block',transition: 'opacity 0.10s ease', opacity:props.card.opacity}}>
        {props.card.icon}
      </div>
    </div>
  );
};

export default Cards;
