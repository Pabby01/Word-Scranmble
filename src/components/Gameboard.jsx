/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { getRandomWord, scrambleWord } from "../utils/wordUtils";
import { motion } from "framer-motion";
import "./GameBoard.css"; // Import external CSS

const GameBoard = ({ updateScore }) => {
  const [currentWord, setCurrentWord] = useState(getRandomWord());
  const [scrambled, setScrambled] = useState(scrambleWord(currentWord.word));
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const checkGuess = () => {
    if (input.toLowerCase() === currentWord.word.toLowerCase()) {
      setMessage("✅ Correct!");
      updateScore();
      const newWord = getRandomWord();
      setCurrentWord(newWord);
      setScrambled(scrambleWord(newWord.word));
      setInput("");
    } else {
      setMessage("❌ Try Again!");
    }
  };

  return (
    <div className={`game-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* Water Animation Background */}
      <div className="water-background">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>

      {/* Theme Toggle Button */}
      <button onClick={toggleTheme} className="theme-toggle">
        {darkMode ? "🌙 Dark" : "☀️ Light"}
      </button>

      <motion.div
        className="game-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="game-title">Scrambled Word:</h2>
        <p className="scrambled-word">{scrambled}</p>

        <input
          type="text"
          className="guess-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <motion.button
          onClick={checkGuess}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="submit-button"
        >
          Submit
        </motion.button>

        <p className="result-message">{message}</p>
      </motion.div>
    </div>
  );
};

export default GameBoard;
