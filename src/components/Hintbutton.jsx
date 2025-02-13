/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import "./HintButton.css"; // Import external CSS

const HintButton = ({ hint }) => {
  const [showHint, setShowHint] = useState(false);

  return (
    <motion.div className="hint-container">
      <motion.button
        onClick={() => setShowHint(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="hint-button"
      >
        Show Hint
      </motion.button>

      {showHint && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="hint-text">
          {hint}
        </motion.p>
      )}
    </motion.div>
  );
};

export default HintButton;
