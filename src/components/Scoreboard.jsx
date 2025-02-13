/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import "./Scoreboard.css"; // Import external CSS

const Scoreboard = ({ score }) => {
  return (
    <motion.div
      className="scoreboard"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      Score: {score}
    </motion.div>
  );
};

export default Scoreboard;
