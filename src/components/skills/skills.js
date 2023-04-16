import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Skills() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <div style={{ textAlign: "center", height: "100vh" }}>
      <motion.p
        className="intro-heading"
        style={{
          color: "white",
          marginBottom: "2vw",
        }}
      >
        <span className="importantText">Technologies</span> I'm familiar with
      </motion.p>
      <div className="skills">
        <motion.div
          className="skill-box"
          style={{
            background: "#FFD1DC",
          }}
          variants={variants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          <p className="skill-heading" style={{ color: "#7E3C6E" }}>
            Frontend
          </p>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <li>
              <motion.img
                animate={{
                  rotate: [0, -10, 10, -10, 10, -5, 5, -5, 0],
                  transition: {
                    duration: 0.5,
                    repeatDelay: 2,
                    repeat: Infinity,
                  },
                }}
                className="icon"
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/null/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-color-tal-revivo.png"
              />
              HTML
            </li>
            <li>
              <motion.img
                animate={{
                  rotate: [0, -10, 10, -10, 10, -5, 5, -5, 0],
                  transition: {
                    duration: 0.5,
                    repeatDelay: 2,
                    repeat: Infinity,
                  },
                }}
                className="icon"
                src="https://img.icons8.com/color/48/null/css3.png"
              />
              CSS 3
            </li>
            <li>
              <motion.img
                animate={{
                  rotate: [0, -10, 10, -10, 10, -5, 5, -5, 0],
                  transition: {
                    duration: 0.5,
                    repeatDelay: 2,
                    repeat: Infinity,
                  },
                }}
                className="icon"
                src="https://img.icons8.com/ios-filled/50/null/javascript-logo.png"
              />
              JavaScript
            </li>
            <li>
              <motion.img
                animate={{
                  rotate: [0, -10, 10, -10, 10, -5, 5, -5, 0],
                  transition: {
                    duration: 0.5,
                    repeatDelay: 2,
                    repeat: Infinity,
                  },
                }}
                className="icon"
                src="https://img.icons8.com/color/48/null/typescript.png"
              />
              TypeScript
            </li>
            <li>
              <motion.img
                animate={{
                  rotate: [0, -10, 10, -10, 10, -5, 5, -5, 0],
                  transition: {
                    duration: 0.5,
                    repeatDelay: 2,
                    repeat: Infinity,
                  },
                }}
                className="icon"
                src="https://img.icons8.com/ios-glyphs/30/null/react.png"
              />
              React
            </li>
            <li>
              <motion.img
                animate={{
                  rotate: [0, -10, 10, -10, 10, -5, 5, -5, 0],
                  transition: {
                    duration: 0.5,
                    repeatDelay: 2,
                    repeat: Infinity,
                  },
                }}
                className="icon"
                src="https://img.icons8.com/external-others-inmotus-design/67/null/external-N-alphabet-others-inmotus-design-21.png"
              />
              Next.js
            </li>
            <li>
              <motion.img
                animate={{
                  rotate: [0, -10, 10, -10, 10, -5, 5, -5, 0],
                  transition: {
                    duration: 0.5,
                    repeatDelay: 2,
                    repeat: Infinity,
                  },
                }}
                className="icon"
                src="https://img.icons8.com/color/48/null/tailwindcss.png"
              />
              Tailwind
            </li>
            <li>
              <motion.img
                animate={{
                  rotate: [0, -10, 10, -10, 10, -5, 5, -5, 0],
                  transition: {
                    duration: 0.5,
                    repeatDelay: 2,
                    repeat: Infinity,
                  },
                }}
                className="icon"
                src="https://img.icons8.com/color/48/null/material-ui.png"
              />
              Material UI
            </li>
            <li>
              <motion.img
                animate={{
                  rotate: [0, -10, 10, -10, 10, -5, 5, -5, 0],
                  transition: {
                    duration: 0.5,
                    repeatDelay: 2,
                    repeat: Infinity,
                  },
                }}
                className="icon"
                src="https://img.icons8.com/color/48/null/bootstrap.png"
              />
              Bootstrap
            </li>
          </ul>
        </motion.div>
        <motion.div
          className="skill-box"
          style={{
            background: "#E6E6FA",
          }}
          variants={variants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          <p className="skill-heading" style={{ color: "#2E86C1" }}>
            Tools
          </p>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <li>
              <motion.img
                animate={{
                  rotate: [0, -10, 10, -10, 10, -5, 5, -5, 0],
                  transition: {
                    duration: 0.5,
                    repeatDelay: 2,
                    repeat: Infinity,
                  },
                }}
                className="icon"
                src="https://img.icons8.com/color/48/null/git.png"
              />
              Git
            </li>
            <li>
              <motion.img
                animate={{
                  rotate: [0, -10, 10, -10, 10, -5, 5, -5, 0],
                  transition: {
                    duration: 0.5,
                    repeatDelay: 2,
                    repeat: Infinity,
                  },
                }}
                className="icon"
                src="https://img.icons8.com/ios-glyphs/30/null/github.png"
              />
              GitHub
            </li>
            <li>
              <motion.img
                animate={{
                  rotate: [0, -10, 10, -10, 10, -5, 5, -5, 0],
                  transition: {
                    duration: 0.5,
                    repeatDelay: 2,
                    repeat: Infinity,
                  },
                }}
                className="icon"
                src="https://img.icons8.com/color/48/null/visual-studio-code-2019.png"
              />
              VSCode
            </li>
            <li>
              <motion.img
                animate={{
                  rotate: [0, -10, 10, -10, 10, -5, 5, -5, 0],
                  transition: {
                    duration: 0.5,
                    repeatDelay: 2,
                    repeat: Infinity,
                  },
                }}
                className="icon"
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/null/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png"
              />
              Postman
            </li>
            <li>
              <motion.img
                animate={{
                  rotate: [0, -10, 10, -10, 10, -5, 5, -5, 0],
                  transition: {
                    duration: 0.5,
                    repeatDelay: 2,
                    repeat: Infinity,
                  },
                }}
                className="icon"
                src="https://img.icons8.com/ios-filled/50/null/docker.png"
              />
              Docker
            </li>
            {/* <li>
              <motion.img
                animate={{
                  rotate: [0, -10, 10, -10, 10, -5, 5, -5, 0],
                  transition: {
                    duration: 0.5,
                    repeatDelay: 2,
                    repeat: Infinity,
                  },
                }}
                className="icon"
                src="https://img.icons8.com/color/48/null/kubernetes.png"
              />
              Kubernetes
            </li> */}
            <li>
              <motion.img
                animate={{
                  rotate: [0, -10, 10, -10, 10, -5, 5, -5, 0],
                  transition: {
                    duration: 0.5,
                    repeatDelay: 2,
                    repeat: Infinity,
                  },
                }}
                className="icon"
                src="https://img.icons8.com/external-tal-revivo-light-tal-revivo/48/null/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-light-tal-revivo.png"
              />
              Jest
            </li>
          </ul>
        </motion.div>
        <motion.div
          className="skill-box"
          style={{
            background: "#F5FFFA",
          }}
          variants={variants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          <p className="skill-heading" style={{ color: "green" }}>
            Backend
          </p>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <li>
              <motion.img
                animate={{
                  rotate: [0, -10, 10, -10, 10, -5, 5, -5, 0],
                  transition: {
                    duration: 0.5,
                    repeatDelay: 2,
                    repeat: Infinity,
                  },
                }}
                className="icon"
                src="https://img.icons8.com/color/48/null/nodejs.png"
              />
              Node.js
            </li>
            <li>
              <motion.img
                animate={{
                  rotate: [0, -10, 10, -10, 10, -5, 5, -5, 0],
                  transition: {
                    duration: 0.5,
                    repeatDelay: 2,
                    repeat: Infinity,
                  },
                }}
                className="icon"
                src="https://img.icons8.com/ios/50/null/express-js.png"
              />
              Express.js
            </li>
            {/* <li>
              <motion.img
                animate={{
                  rotate: [0, -10, 10, -10, 10, -5, 5, -5, 0],
                  transition: {
                    duration: 0.5,
                    repeatDelay: 2,
                    repeat: Infinity,
                  },
                }}
                className="icon"
                src="https://img.icons8.com/color/48/null/python--v1.png"
              />
              Python
            </li> */}
            <li>
              <motion.img
                animate={{
                  rotate: [0, -10, 10, -10, 10, -5, 5, -5, 0],
                  transition: {
                    duration: 0.5,
                    repeatDelay: 2,
                    repeat: Infinity,
                  },
                }}
                className="icon"
                src="https://img.icons8.com/ios-filled/50/null/sql.png"
              />
              SQL
            </li>
            <li>
              <motion.img
                animate={{
                  rotate: [0, -10, 10, -10, 10, -5, 5, -5, 0],
                  transition: {
                    duration: 0.5,
                    repeatDelay: 2,
                    repeat: Infinity,
                  },
                }}
                className="icon"
                src="https://img.icons8.com/fluency/48/null/my-sql.png"
              />
              MySQL
            </li>
            <li>
              <motion.img
                animate={{
                  rotate: [0, -10, 10, -10, 10, -5, 5, -5, 0],
                  transition: {
                    duration: 0.5,
                    repeatDelay: 2,
                    repeat: Infinity,
                  },
                }}
                className="icon"
                src="https://img.icons8.com/color/48/null/mongodb.png"
              />
              MongoDB
            </li>
            <li>
              <motion.img
                animate={{
                  rotate: [0, -10, 10, -10, 10, -5, 5, -5, 0],
                  transition: {
                    duration: 0.5,
                    repeatDelay: 2,
                    repeat: Infinity,
                  },
                }}
                className="icon"
                src="https://img.icons8.com/ios/50/null/api.png"
              />
              RESTful APIs
            </li>
            <li>
              <motion.img
                animate={{
                  rotate: [0, -10, 10, -10, 10, -5, 5, -5, 0],
                  transition: {
                    duration: 0.5,
                    repeatDelay: 2,
                    repeat: Infinity,
                  },
                }}
                className="icon"
                src="https://img.icons8.com/color/48/null/amazon-web-services.png"
              />
              AWS
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
