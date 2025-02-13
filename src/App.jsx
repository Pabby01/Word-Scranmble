import { useState } from "react";
import { getRandomWord, scrambleWord } from "./utils/wordUtils";
import GameBoard from "./components/Gameboard";
import Timer from "./components/Timer";
import Scoreboard from "./components/Scoreboard";
import HintButton from "./components/Hintbutton";
import "./App.css";

const App = () => {
  const [currentWord, setCurrentWord] = useState(getRandomWord());
  const [scrambled, setScrambled] = useState(scrambleWord(currentWord.word));
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);

  const handleCorrectGuess = () => {
    setScore((prev) => prev + 1);
    setTimeLeft(30);
    const newWord = getRandomWord();
    setCurrentWord(newWord);
    setScrambled(scrambleWord(newWord.word));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-darkBg text-neon">
      <Scoreboard score={score} />
      <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} onTimeUp={() => alert("Time's up!")} />
      <GameBoard updateScore={handleCorrectGuess} scrambled={scrambled} correctWord={currentWord.word} />
      <HintButton hint={currentWord.hint} />
    </div>
  );
};

export default App;
