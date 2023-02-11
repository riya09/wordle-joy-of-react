import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessedWordList, setGuessedWordList] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState('')
  const checkAnswer = (word) => {
    setGuessedWordList([...guessedWordList, word])
    if (word === answer) {
      setGameStatus('win')
    } else if(guessedWordList.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lose')
    }
  }
  return (
  <>
    <GuessList guessedWords={guessedWordList} answer={answer}/>
    <GuessInput
      disabled={!!gameStatus}
      getWord={(word) => checkAnswer(word)}/>
  </>
  );
}

export default Game;
