import { motion } from "framer-motion";
import Model22 from "../models/model2";

export default function Introduction() {
  const paragraphVariants = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  const imageVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  const commonDivStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexWrap: "wrap",
        background: "#0F172A",
      }}
    >
      <div style={{ width: "50%", position: "relative" }}>
        <div style={commonDivStyle}>
          <motion.div
            variants={imageVariants}
            initial="initial"
            animate="animate"
          >
            <Model22 />
          </motion.div>
        </div>
      </div>

      <div style={{ width: "50%", position: "relative" }}>
        <div style={commonDivStyle}>
          <motion.p
            variants={paragraphVariants}
            initial="initial"
            animate="animate"
            className="intro-text"
            style={{
              color: "white",
              fontFamily: "Open Sans, sans-serif",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "left",
              padding: "0 20px",
            }}
          >
            <span className="intro-heading">
              <span
                className="importantText"
                style={{
                  color: "white",
                  fontWeight: "100",
                  margin: "0",
                  fontSize: "4rem",
                  marginBottom: "0",
                  lineHeight: "1",
                }}
              >
                Vishv Shah
              </span>
              <br />
              <span
                className="importantText"
                style={{ color: "#b3c5dd", margin: "0", fontSize: "4rem" }}
              >
                Web Developer
              </span>
            </span>
            <br />
            <span style={{ fontSize: "1rem", color: "#b3c5dd", margin: "0" }}>
              I'm a fresh Computer Science graduate from Lakehead University. With
              my passion for technology and a Master's degree under my belt, I'm
              ready to embark on exciting new challenges in the digital realm. I
              focus on delivering key outcomes and swiftly adjusting to new
              learnings to solve problems. I'm a natural at putting big ideas
              into action under pressure.
            </span>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
