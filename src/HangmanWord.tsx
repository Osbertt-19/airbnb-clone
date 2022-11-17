type HangmanDrawingProps = {
  wordToGuess: string
  guessedLetters: string[]
  end:boolean
};

export default ({ wordToGuess, guessedLetters ,end}: HangmanDrawingProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
      {wordToGuess.split("").map((letter, index) => {
        return (
          <span
            key={index}
            style={{
              textTransform: "uppercase",
              fontFamily: "monospace",
              fontSize: "4rem",
              fontWeight: "bold",
              borderBottom: "5px solid black",
            }}
          >
            <span
              style={{
                visibility: guessedLetters.includes(letter)||end
                  ? "visible"
                  : "hidden",
                  color:guessedLetters.includes(letter)?"var(--green)":"var(--red)",
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
};
