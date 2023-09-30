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