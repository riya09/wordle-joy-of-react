import React from "react";

function GameStatus({status, answer, numberOfGuesses}) {
  const banner = () => {
    if (status === 'win') {
      return (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {numberOfGuesses} guesses</strong>.
        </p>
      )
    } else {
      return (
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      )
    }
  }

  return (
    <>
      <div className={status === 'win' ? 'happy banner' : 'sad banner'}>
        {banner()}
      </div>
    </>
  );
}

export default GameStatus;
