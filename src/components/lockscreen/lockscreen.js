import React, { useState } from "react";
import { motion } from "framer-motion";
import Main from "../../main.js";

export default function LockScreen() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true);
  };

  const lockScreenVariants = {
    initial: {
      y: "0vh",
      opacity: 1
    },
    animate: {
      y: "-100vh",
      opacity: 0.5
    }
  };

  return isAnimationComplete ? (
    <Main />
  ) : (
    <div>
      <motion.div
        className="homeScreen"
        style={{
          background: "linear-gradient(180deg, #1F1F1F 0%, #1F1F1F 100%)"
        }}
        initial="initial"
        animate="animate"
        variants={lockScreenVariants}
        transition={{
          duration: 1.5, // Increased the duration for a smoother effect
          ease: [0.6, -0.05, 0.01, 0.99] // Custom cubic bezier easing
        }}
        onAnimationComplete={handleAnimationComplete}
      />
    </div>
  );
}
