import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
// {isModalOpen && currentProject && (
//   <div
//     style={{
//       position: "fixed",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       backgroundColor: "rgba(0, 0, 0, 0.5)",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       zIndex: 100,
//     }}
//   >
//     <div
//       style={{
//         width: "80%",
//         maxWidth: "1000px", // Increased for better desktop presentation
//         height: "80%", // More space for content
//         backgroundColor: "#1E293B",
//         borderRadius: "1rem",
//         padding: "2rem", // Added some padding
//         display: "flex",
//         flexDirection: "column",
//         overflow: "hidden",
//       }}
//     >
//       <button
//         onClick={closeModal}
//         style={{
//           position: "absolute",
//           top: "20px",
//           right: "20px",
//           background: "transparent",
//           border: "none",
//           color: "#E2E8F0",
//           fontSize: "1.5rem",
//           cursor: "pointer",
//           transition: "color 0.3s ease",
//           zIndex: 2,
//         }}
//         onHover={{ color: "#A0AEC0" }} // added a hover color change
//       >
//         X
//       </button>
//       <img
//         src={currentProject.cover_image}
//         alt={currentProject.name}
//         style={{
//           height: "auto",
//           width: "100%", // Using full width
//           marginBottom: "1rem", // Added some space below
//           objectFit:"none"
//         }}
//       />
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           marginBottom: "1rem", // Space below the images
//         }}
//       >
//         <img
//           src={currentProject.desktop_image}
//           alt={`${currentProject.name} - Desktop`}
//           style={{
//             height: "auto",
//             width: "48%", // Reduced a bit to consider the gap between images
//             objectFit: "cover",
//             marginRight: "1%", // A small gap between the images
//           }}
//         />
//         <img
//           src={currentProject.mobile_image}
//           alt={`${currentProject.name} - Mobile`}
//           style={{
//             height: "auto",
//             width: "48%",
//             objectFit: "cover",
//           }}
//         />
//       </div>
//       <h2
//         style={{
//           color: "#E2E8F0",
//           marginBottom: "1rem",
//         }}
//       >
//         {currentProject.name}
//       </h2>
//       <p style={{ color: "#E2E8F0" }}>{currentProject.description}</p>
//     </div>
//   </div>
// )}
export default function Skills() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerStyle = {
    textAlign: "center",
    minHeight: "100vh",
    padding: "2rem 15rem 0rem 15rem",
    background: "#0F172A",
  };

  const skillsContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    height: "100%", // this ensures the container takes full height
    flexDirection: "column",
  };
  const listItemStyle = {
    padding: "5px 25px 5px 15px",
    border: "1px solid #334155",
    borderRadius: "10%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // You can adjust this as per your needs
    margin: "10px",
    color: "#E2E8F0",
  };
  return (
    <div style={containerStyle}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "5rem",
          marginTop: "5rem",
          justifyContent: "center",
        }}
      >
        <hr
          style={{
            flex: "0.5",
            border: "none",
            height: "1px",
            backgroundColor: "#475569",
            marginRight: "1rem",
          }}
        />
        <h1
          style={{
            marginBottom: "0",
            margin: "0 1rem",
            color: "#E2E8F0",
          }}
        >
          Skills
        </h1>
        <hr
          style={{
            flex: "0.5",
            border: "none",
            height: "1px",
            backgroundColor: "#475569",
            marginLeft: "1rem",
          }}
        />
      </div>
      <div style={skillsContainerStyle}>
        <motion.div
          style={{
            color: "white",
          }}
          ref={ref}
        >
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {/* Frontend skills list */}
            {/* ... */}

            <li style={listItemStyle}>
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
                src="https://img.icons8.com/color/1024/html-5--v1.png"
              />
              HTML5
            </li>
            <li style={listItemStyle}>
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
                src="https://img.icons8.com/color/1024/null/css3.png"
              />
              CSS 3
            </li>
            <li style={listItemStyle}>
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
                src="https://img.icons8.com/color/1024/javascript--v1.png"
              />
              JavaScript
            </li>
            <li style={listItemStyle}>
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
                src="https://img.icons8.com/color/1024/null/typescript.png"
              />
              TypeScript
            </li>
            <li style={listItemStyle}>
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
                src="https://img.icons8.com/color/1024/react-native.png"
              />
              React
            </li>
            <li style={listItemStyle}>
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
                src="https://img.icons8.com/fluency/1024/vuejs.png"
              />
              Vue.js
            </li>
            <li style={listItemStyle}>
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
                src="https://img.icons8.com/fluency/1024/angularjs.png"
              />
              AngularJS
            </li>
            <li style={listItemStyle}>
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
                src="https://img.icons8.com/nolan/1024/nextjs.png"
              />
              Next.js
            </li>
            <li style={listItemStyle}>
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
                src="https://img.icons8.com/color/1024/null/tailwindcss.png"
              />
              Tailwind
            </li>
            <li style={listItemStyle}>
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
                src="https://img.icons8.com/color/1024/null/material-ui.png"
              />
              Material UI
            </li>
            <li style={listItemStyle}>
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
                src="https://img.icons8.com/color/1024/null/bootstrap.png"
              />
              Bootstrap
            </li>

            {/* Tools skills list */}
            <li style={listItemStyle}>
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
                src="https://img.icons8.com/color/1024/null/git.png"
              />
              Git
            </li>
            <li style={listItemStyle}>
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
                src="https://img.icons8.com/nolan/1024/github.png"
              />
              GitHub
            </li>
            <li style={listItemStyle}>
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
                src="https://img.icons8.com/color/1024/null/visual-studio-code-2019.png"
              />
              VSCode
            </li>
            <li style={listItemStyle}>
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
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/1024/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png"
              />
              Postman
            </li>
            <li style={listItemStyle}>
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
                src="https://img.icons8.com/nolan/1024/docker.png"
              />
              Docker
            </li>
            <li style={listItemStyle}>
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
                src="https://img.icons8.com/external-tal-revivo-duo-tal-revivo/1024/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-duo-tal-revivo.png"
              />
              Jest
            </li>

            {/* Backend skills list */}
            <li style={listItemStyle}>
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
                src="https://img.icons8.com/color/1024/null/nodejs.png"
              />
              Node.js
            </li>
            <li style={listItemStyle}>
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
                src="https://img.icons8.com/nolan/1024/express-js.png"
              />
              Express.js
            </li>
            <li style={listItemStyle}>
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
                src="https://img.icons8.com/color/1024/null/python--v1.png"
              />
              Python
            </li>
            <li style={listItemStyle}>
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
                src="https://img.icons8.com/fluency/1024/null/my-sql.png"
              />
              MySQL
            </li>
            <li style={listItemStyle}>
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
                src="https://img.icons8.com/color/1024/null/mongodb.png"
              />
              MongoDB
            </li>
            <li style={listItemStyle}>
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
                src="https://img.icons8.com/nolan/1024/api-settings.png"
              />
              RESTful APIs
            </li>
            <li style={listItemStyle}>
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
                src="https://img.icons8.com/color/1024/null/amazon-web-services.png"
              />
              AWS
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
