import { useState } from "react";

function GuessInput({getWord, disabled}) {
  const [text, setText] = useState('')
  return ( 
    <form className="guess-input-wrapper" onSubmit={(event) => {
      event.preventDefault()
      getWord(text)
      setText('')
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={text}
        minLength={5}
        maxLength={5}
        disabled={disabled}
        onChange={(event) => setText((event.target.value).toUpperCase())}
      />
    </form>
   );
}

export default GuessInput;
