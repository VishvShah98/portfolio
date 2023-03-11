import Navbar from "./components/navbar/navbar.js";
import Introduction from "./components/introduction/introduction.js";
import Skills from "./components/skills/skills.js";
import Projects from "./components/projects/projects.js";
import Form from "./components/form/form.js";
import IR1 from "./assets/IR-1.mp4";
import IR2 from "./assets/IR-2.mp4";
import IR3 from "./assets/IR-3.mp4";
import IR4 from "./assets/IR-4.mp4";
import SS1 from "./assets/SS-1.mp4";
import SS2 from "./assets/SS-2.mp4";
import VS1 from "./assets/VS-1.mp4";
import VS2 from "./assets/VS-2.mp4";
import IRMobile from "./assets/IR-mobile.mp4";
import SSMobile from "./assets/SS-mobile.mp4";
import VSMobile from "./assets/VS-mobile.mp4";
import { FaCode, FaDesktop } from "react-icons/fa";

import { motion, useScroll, useSpring } from "framer-motion";

export default function Main() {
  const videosIR = [IR1, IR2, IR3, IR4];
  const videosSS = [SS1, SS2];
  const videosVS = [VS1, VS2];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      style={{
        paddingLeft: "4vw",
        paddingRight: "4vw",
      }}
    >
      <div
        style={{
          padding: "10vh 0",
          position: "relative",
          //background:
          // "linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(66, 93, 228) 100%)",
          background: "black",
        }}
      >
        <div id="home">
          <Navbar />
        </div>
        <Introduction />
        <Skills />
        <div id="projects" style={{ marginTop: "10vh" }}>
          <p
            style={{
              fontSize: "4vw",
              marginBottom: "2vw",
              textAlign: "center",
            }}
          >
            <span className="importantText intro-heading">
              Immersive Realities
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/VishvShah98/immersive-realities/tree/master"
                className="codeLink"
              >
                {" "}
                <FaCode />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://vishvshah98.github.io/immersive-realities/"
                className="liveLink"
              >
                {" "}
                <FaDesktop />
              </a>
            </span>
          </p>

          <Projects
            video={videosIR}
            mobileVideo={IRMobile}
            projectInfo={[
              "Immersive 3D and AR Experience",
              "Engaging Content",
              "Cutting-Edge Technology Showcase",
            ]}
          />
          <p
            style={{
              fontSize: "4vw",
              marginBottom: "2vw",
              textAlign: "center",
            }}
          >
            <span className="importantText intro-heading">
              Social Media Application
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/VishvShah98/sociosphere-frontend.git"
                className="codeLink"
              >
                {" "}
                <FaCode />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://sociosphere.onrender.com/"
                className="liveLink"
              >
                {" "}
                <FaDesktop />
              </a>{" "}
            </span>
          </p>
          <Projects
            video={videosSS}
            mobileVideo={SSMobile}
            projectInfo={[
              "Elegant and User Friendly Interface",
              "Seamless Content Management",
              "Secure and Reliable",
            ]}
          />

          <p
            style={{
              fontSize: "4vw",
              marginBottom: "2vw",
              textAlign: "center",
            }}
          >
            <span className="importantText intro-heading">
              Vedic Sanskrit Tutoring
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/VishvShah98/vedic-sanskrit/tree/master"
                className="codeLink"
              >
                {" "}
                <FaCode />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://vishvshah98.github.io/vedic-sanskrit/"
                className="liveLink"
              >
                {" "}
                <FaDesktop />
              </a>
            </span>
          </p>

          <Projects
            video={videosVS}
            mobileVideo={VSMobile}
            projectInfo={[
              "Sanskrit Tutor Platform",
              "Study Material Access",
              "Schedule Management",
              "Location Mapping",
            ]}
          />
        </div>

        <div id="contact">
          <Form />
        </div>
        <motion.div className="progress" style={{ scaleX }} />
      </div>
    </div>
  );
}
