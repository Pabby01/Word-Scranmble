/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Timer.css"; // Import external CSS

const Timer = ({ timeLeft, setTimeLeft, onRestart }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeout(() => setShowModal(true), 500); // Delay slightly for smoother UX
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, setTimeLeft]);

  return (
    <>
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="timer"
      >
        ⏳ Time Left: {timeLeft}s
      </motion.div>

      {/* Modal for Time's Up */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h2>⏳ Times Up!</h2>
              <p>You ran out of time! Want to try again?</p>
              <button
                className="restart-button"
                onClick={() => {
                  setShowModal(false);
                  setTimeLeft(30); // Reset Timer
                  onRestart(); // Restart Game
                }}
              >
                🔄 Restart Game
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Timer;
