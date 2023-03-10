import '../../styles.css'
import { motion, useMotionValue, useTransform } from "framer-motion";

import CenterMessage from '../introduction/centerMessage';
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

export default function Slide() {
  const navigate = useNavigate();
  var w = window.innerWidth;
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
    "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)"
  ]);

  useEffect(() => {
    x.onChange(() => {
      if (w / x.get() <= 6.0 && w / x.get() > 0) {
        navigate("/lockscreen");
      }
    });
  });

  return (
    <motion.div className="homeScreen" style={{ background }}>
      <motion.div
        className="square"
        drag="x"
        style={{ x }}
        dragConstraints={{ left: 0, right: 0 }}
        animate={{
          scale: [0, 1],
          rotate: [0, 360],
          borderRadius: ["0%", "30%"]
        }}
        transition={{
          duration: 2,
          ease: "backInOut"
        }}
      >
        <motion.p
          className="text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2,
            ease: "easeInOut"
          }}
        >
          Greetings !
        </motion.p>
      </motion.div>
      <CenterMessage />
    </motion.div>
  );
}
