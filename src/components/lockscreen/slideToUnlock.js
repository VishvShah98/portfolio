import "../../styles.css";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Slide() {
  const navigate = useNavigate();
  var w = window.innerWidth;
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #1F1F1F 0%, #1F1F1F 100%)",
    "linear-gradient(180deg, #1F1F1F 0%, #1F1F1F 100%)",
    "linear-gradient(180deg, #1F1F1F 0%, #1F1F1F 100%)",
  ]);

  let timeout;

  function myFunction() {
    timeout = setTimeout(transition, 1000);
  }

  function transition() {
    navigate("/lockscreen");
  }

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
          borderRadius: ["0%", "30%"],
        }}
        transition={{
          duration: 2,
          ease: "backInOut",
        }}
      >
        <motion.p
          className="text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2,
            ease: "easeInOut",
          }}
          onAnimationComplete={myFunction}
        >
          Greetings !
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
