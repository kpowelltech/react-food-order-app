import React from "react";

const LiElement = (props) => {
  return (
    <li key={props.id}>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </li>
  );
};

export default LiElement;
