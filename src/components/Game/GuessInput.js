import { useState } from "react";

function GuessInput() {
  const [text, setText] = useState('')
  return ( 
    <form className="guess-input-wrapper">
      <label htlmFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </form>
   );
}

export default GuessInput;
