import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess/Guess';
import { checkGuess } from '../../game-helpers';

function GuessList({guessedWords, answer}) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((guess) => {
        return <Guess key={guess} word={checkGuess(guessedWords[guess], answer)}/>
      })}
    </div>
  );
}

export default GuessList;
