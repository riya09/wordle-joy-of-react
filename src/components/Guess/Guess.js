import React from "react";
import { range } from "../../utils";

function Guess({ word }) {
  return (
    <p className="guess">
      {range(5).map((cell) => {
        return (
          <span key={cell} className={word ? `${word[cell].status} cell` : 'cell'}>
            {word ? word[cell].letter : ""}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
