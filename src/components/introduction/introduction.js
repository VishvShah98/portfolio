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

  return (
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     padding: "0 5vw"
    //   }}
    // >
    //   <motion.div
    //     variants={imageVariants}
    //     initial="initial"
    //     animate="animate"

    //     style={{
    //       width: "35vw",
    //       height: "35vw",
    //       marginRight: "8vw"
    //     }}

    //   > <Model22 /></motion.div>

    //   <motion.p
    //     variants={paragraphVariants}
    //     initial="initial"
    //     animate="animate"
    //     style={{
    //       color: "white",
    //       borderRadius: "5% 5% 5% 5%",
    //       flex: 1,
    //       padding: "0 1vw",
    //       height: "25vw",
    //       width: "40vw",
    //       fontFamily: "Open Sans, sans-serif",
    //       fontSize: "1.5vw",
    //       display: "flex",
    //       flexDirection: "column",
    //       justifyContent: "center",
    //       textAlign:'left'
    //     }}
    //   >
    //     <span style={{ fontSize: "4vw", paddingBottom: "1vw" }}>
    //       Hi, I'm <span className="importantText">Vishv Shah</span>, a{" "}
    //       <span className="importantText">Software Developer</span>
    //     </span>
    //     With expertise in software development and a deep understanding of data
    //     science, I aim to build scalable and efficient applications that drive
    //     business growth. Let's work together to turn your ideas into reality.
    //   </motion.p>
    // </div>
    <div style={{ height: "100vh", display: "flex", flexWrap: "wrap" }}>
      <div style={{ width: "50%", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width:'100%'
          }}
        ><motion.div
         variants={imageVariants}
         initial="initial"
         animate="animate"><Model22 /></motion.div></div>
      </div>
      <div style={{ width: "50%", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
    
          }}
        >
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
            }}
          >
            <span className='intro-heading'>
              Hi, I'm <span className="importantText">Vishv Shah</span>, a
              <span className="importantText"> Software Developer</span>
            </span>
            <br />I build scalable and efficient applications that drive
            business growth. Let's work together to turn your ideas into
            reality.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
