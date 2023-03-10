import "../../styles.css";
import { motion } from "framer-motion";
export default function CenterMessage() {
  return (
    <motion.p
      className="centerMessage text"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 3,
        ease: "easeInOut",
        repeat: Infinity,
        duration: 2
      }}
    >
      Swipe to enter &gt;&gt;&gt;
    </motion.p>
  );
}
