import React from "react";
import { range } from "../../utils";

function Guess({ word }) {
  return (
    <p className="guess">
      {range(5).map((cell) => {
        return (
          <span key={cell} className="cell">
            {word ? word[cell] : ""}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
