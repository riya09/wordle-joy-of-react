import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess/Guess';

function GuessList({guessedWords}) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((guess) => {
        return <Guess key={guess} word={guessedWords[guess]}/>
      })}
    </div>
  );
}

export default GuessList;
