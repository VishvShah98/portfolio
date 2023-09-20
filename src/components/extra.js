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