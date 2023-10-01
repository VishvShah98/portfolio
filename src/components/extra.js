<div style={{ display: "flex", justifyContent: "center" }}>
<div style={{ flex: "0 0 45%", marginRight: "1rem" }}>
  {/* <h3>Mobile View</h3> */}
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "50%",
      borderRadius: "15px",
      overflow: "hidden",
      position: "relative",
      padding: "10% 5%",
      backgroundColor: "black",
    }}
  >
    <img
      src={project.mobile_image}
      alt={`${project.name} Mobile View`}
      style={{
        maxWidth: "100%",
        maxHeight: "350px",
        width: "auto",
        borderRadius: "0.5rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    />
  </div>
</div>
<div style={{ flex: "0 0 45%" }}>
  {/* <h3>Desktop View</h3> */}
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      //   minHeight: "350px",
      height: "50%",
      borderRadius: "15px",
      overflow: "hidden",
      position: "relative",
      padding: "10% 5%",
      backgroundColor: "black",
    }}
  >
    <img
      src={project.desktop_image}
      alt={`${project.name} Desktop View`}
      style={{
        maxWidth: "100%",
        maxHeight: "350px",
        width: "auto",
        borderRadius: "0.5rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    />
  </div>
</div>
</div>

    // <div
    //   className="homeScreen"
    //   style={{
    //     backgroundImage: `url(${bg1})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    // >
    //   <motion.div
    //     className="square"
    //     drag="x"
    //     style={{ x }}
    //     dragConstraints={{ left: 0, right: 0 }}
    //     animate={{
    //       scale: [
    //         0, 1.1, 1,
    //       ] /* Makes it scale up and then settle back down for a bouncing effect */,
    //       rotate: [0, 10, -10, 0] /* Slight rotation back and forth */,
    //       borderRadius: ["0%", "50px"],
    //     }}
    //     transition={{
    //       duration: 2,
    //       ease: [0.68, -0.55, 0.27, 1.55],
    //     }}
    //   >
    //     <motion.p
    //       className="text"
    //       initial={{ opacity: 0, y: -10 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{
    //         delay: 1.5,
    //         ease: "easeInOut",
    //         duration: 1.5,
    //       }}
    //       onAnimationComplete={myFunction}
    //     >
    //       Greetings !
    //     </motion.p>
    //   </motion.div>
    // </div>


            {/* <div id="projects" style={{ marginTop: "10vh" }}>
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
        </div> */}
        {/* <motion.div className="progress" style={{ scaleX }} /> */}