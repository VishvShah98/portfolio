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
import SL1 from "./assets/SL-1.mp4";
import SL2 from "./assets/SL-2.mp4";
import VS1 from "./assets/VS-1.mp4";
import VS2 from "./assets/VS-2.mp4";
import MM1 from "./assets/MM-1.mp4";
import MM2 from "./assets/MM-2.mp4";
import IRMobile from "./assets/IR-mobile.mp4";
import MMMobile from "./assets/MM-mobile.mp4";
import SSMobile from "./assets/SS-mobile.mp4";
import VSMobile from "./assets/VS-mobile.mp4";
import { FaCode, FaDesktop } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion, useScroll, useSpring } from "framer-motion";

export default function Main() {
  const videosIR = [IR1, IR2, IR3, IR4];
  const videosSS = [SS1, SS2];
  const videosVS = [VS1, VS2];
  const videosMM = [MM1, MM2];
  const videosSL = [SL1, SL2];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
  };
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
              "I'm currently building Immersive Realities' website, showcasing their cutting-edge AR and VR solutions through captivating 3D models and immersive VR filters. Join us on this exciting journey into immersive realities.",
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
              Shirt Lab
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/VishvShah98/shirtLab-frontend"
                className="codeLink"
              >
                {" "}
                <FaCode />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://shirtlab.onrender.com/"
                className="liveLink"
              >
                {" "}
                <FaDesktop />
              </a>
            </span>
          </p>

          <Projects
            video={videosSL}
            //mobileVideo={IRMobile}
            projectInfo={[
              "I generated and explored ideas to create a Minimum Viable Product utilizing OpenAI's API. As a result, I developed a web app that enables users to customize a 3D model of a t-shirt using AI-generated images.",
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
              Money Maven
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/VishvShah98/moneyMaven-frontend"
                className="codeLink"
              >
                {" "}
                <FaCode />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://moneymaven.onrender.com/"
                className="liveLink"
              >
                {" "}
                <FaDesktop />
              </a>
            </span>
          </p>

          <Projects
            video={videosMM}
            mobileVideo={MMMobile}
            projectInfo={[
              "Money Maven is a finance dashboard app that displays annual financial data through graphs and charts, including revenue, profit, and expenses. Powered by ML regression, it also predicts upcoming year's revenue.",
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
              Sociosphere
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/VishvShah98/sociosphere-frontend"
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
              "Sociosphere is a comprehensive social media app with full stack functionality. Users can create, share, like, and comment on posts, as well as connect with friends for a seamless social experience.",
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
              Tutor Website
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
              "I developed a website for a Sanskrit tutor, featuring a monthly schedule, study material downloads, and a location finder on Google Maps for convenient access to the tutor's services.",
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
