function GuessList({guessedWords}) {
  return (
    <div className="guess-results">
      {guessedWords.map((word, w) => {
        return <p key={w}>{word}</p>
      })}
    </div>
  );
}

export default GuessList;
