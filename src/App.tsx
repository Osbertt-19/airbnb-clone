import { useEffect, useState } from "react";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";
import words from "./wordList.json";
function App() {
  const getword = () => {
    return words[Math.floor(Math.random() * words.length)];
  };
  const [wordToGuess, setWordToGuess] = useState(getword);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (word) => !wordToGuess.includes(word)
  );
  const addGuessedLetters = (letter: string) => {
    if (guessedLetters.includes(letter)) return;
    setGuessedLetters((current) => [...current, letter]);
  };
  const isLoser =incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/) || isLoser || isWinner) return;
      e.preventDefault();
      addGuessedLetters(key);
    };
    document.addEventListener("keypress", handleKey);
    return () => {
      document.removeEventListener("keypress", handleKey);
    };
  }, [guessedLetters]);
  useEffect(() => {
    const handleEnter = (e: KeyboardEvent) => {
      const key = e.key;
      if (key != "Enter") return;
      e.preventDefault();
      setWordToGuess(getword);
      setGuessedLetters([]);
    };
    document.addEventListener("keypress", handleEnter);
    return () => {
      document.removeEventListener("keypress", handleEnter);
    };
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        width: "50%",
        margin: "auto",
      }}
    >
      <h1>
        {isWinner && "You Win"}
        {isLoser && "You Lose"}
      </h1>
      <HangmanDrawing incorrectLetters={incorrectLetters.length} />
      <HangmanWord
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
        end={isLoser || isWinner}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          addGuessedLetters={addGuessedLetters}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          disabled={isLoser || isWinner}
        />
      </div>
    </div>
  );
}

export default App;
