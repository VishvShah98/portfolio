import "../../styles.css";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bg1 from "../../assets/bg1.jpg";

export default function Slide() {
  const navigate = useNavigate();
  var w = window.innerWidth;
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  // const background = useTransform(x, xInput, [
  //   "linear-gradient(180deg, #1F1F1F 0%, #1F1F1F 100%)",
  //   "linear-gradient(180deg, #1F1F1F 0%, #1F1F1F 100%)",
  //   "linear-gradient(180deg, #1F1F1F 0%, #1F1F1F 100%)",
  // ]);
  // const background = {
  //   backgroundImage: {bg1},
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  // };

  let timeout;

  function myFunction() {
    timeout = setTimeout(transition, 1000);
  }

  function transition() {
    navigate("/lockscreen");
  }

  return (
    <div
      className="homeScreen"
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        className="square"
        drag="x"
        style={{ x }}
        dragConstraints={{ left: 0, right: 0 }}
        animate={{
          scale: [
            0, 1.1, 1,
          ] /* Makes it scale up and then settle back down for a bouncing effect */,
          rotate: [0, 10, -10, 0] /* Slight rotation back and forth */,
          borderRadius: ["0%", "50px"],
        }}
        transition={{
          duration: 2,
          ease: [0.68, -0.55, 0.27, 1.55],
        }}
      >
        <motion.p
          className="text"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            ease: "easeInOut",
            duration: 1.5,
          }}
          onAnimationComplete={myFunction}
        >
          Greetings !
        </motion.p>
      </motion.div>
    </div>
  );
}
