import React from "react";

function Card({ name, children }) {
  return (
    <>
      {name}
      {children}
    </>
  );
}

export default Card;