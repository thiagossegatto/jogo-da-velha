import React from "react";
import { FaRegCircle, FaTimes } from "react-icons/fa";

const Row = props => {
  return (
    <div
      className="box"
      style={{background: props.row.mark !== "" ? (
        props.row.mark === true ?"red" :"blue"
      ) :false}}
      onClick={() => props.handleClick(props.id, props.row.position)}
    >
      {props.row.mark !== "" ? (
        props.row.mark === true ? (
          <FaTimes />
        ) : (
          <FaRegCircle />
        )
      ) : (
        false
      )}
    </div>
  );
};

export default Row;
