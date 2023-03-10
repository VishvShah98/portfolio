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
            "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)"
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
