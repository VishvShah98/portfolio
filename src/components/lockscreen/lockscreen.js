import React, { useState } from "react";
import { motion} from "framer-motion";
import Main from "../../main.js";
export default function LockScreen() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true);
  };
  return isAnimationComplete ? (
    <Main />
  ) : (
    <div>
      <motion.div
        className="homeScreen"
        style={{
          background:
          "linear-gradient(180deg, #1F1F1F 0%, #1F1F1F 100%)"
        }}
        animate={{
          y: ["0vh", "-100vh"]
        }}
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
        onAnimationComplete={handleAnimationComplete}
      />
    </div>
  );
}
