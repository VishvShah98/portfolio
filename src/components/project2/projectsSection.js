import { React, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Import icons if you are using React Icons library

const ProjectsSection = ({ projects }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [githubIconHovered, setGithubIconHovered] = useState(false);
  const [liveIconHovered, setLiveIconHovered] = useState(false);

  const openModal = (project) => {
    setCurrentProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setCurrentProject(null);
    setModalOpen(false);
  };

  const Modal = ({ project, closeModal }) => {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "grid",
          placeItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            width: "55%",
            backgroundColor: "#1E293B",
            borderRadius: "0.75rem",
            padding: "2rem",
            position: "relative",
            overflowY: "auto",
            color: "#E2E8F0",
            fontFamily: "Open Sans, sans-serif",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Added shadow for depth
          }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                color: "#94A3B8",
                top: "1rem",
                right: "1rem",
                border: "none",
                backgroundColor: "transparent",
                fontSize: "1.5rem",
                cursor: "pointer",
                transition: "color 0.3s, background-color 0.3s", // Added background transition
                borderRadius: "50%", // To create circle effect
                // Space for hover effect
                width: "2rem", // Set width and height to the same value for a circle
                height: "2rem",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#94A3B8";
                e.target.style.backgroundColor = "rgba(150,150,150,0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#94A3B8";
                e.target.style.backgroundColor = "transparent";
              }}
            >
              &times;
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                display: "flex",
                flex: 1,
                marginRight: "2rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={project.cover_image}
                alt={project.name}
                style={{
                  width: "25rem",
                  height: "20rem", // Ensure the image scales properly
                  borderRadius: "0.5rem",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <div>
                <h1 style={{ marginTop: 0 }}>{project.name}</h1>
                <p style={{}}>{project.description}</p>
              </div>

              {/* Icons aligned at the bottom */}
              <div style={{ marginTop: "auto", display: "flex", gap: "2rem" }}>
                {/* Replace the following paths with your actual SVG paths or images */}
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: githubIconHovered ? "#22D3EE" : "#94A3B8",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setGithubIconHovered(true)}
                  onMouseLeave={() => setGithubIconHovered(false)}
                >
                  <FaGithub size={24} /> {/* GitHub icon */}
                  <span style={{ marginLeft: "0.5rem" }}>GitHub</span>
                </a>
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: liveIconHovered ? "#22D3EE" : "#94A3B8",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setLiveIconHovered(true)}
                  onMouseLeave={() => setLiveIconHovered(false)}
                >
                  <FaExternalLinkAlt size={18} /> {/* Live icon */}
                  <span style={{ marginLeft: "0.5rem" }}>Live</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects">
      <div
        style={{
          margin: "5rem 10rem 5rem 10rem",
        }}
      >
        <h1
          style={{
            marginBottom: "1.25rem",
            fontSize: "1.875rem", // text-3xl
            fontWeight: "bold",
            textAlign: "center",
            color: "#E2E8F0",
            whiteSpace: "nowrap",
          }}
        >
          Projects
        </h1>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              margin: "0 auto",
              marginBottom: "4.5rem",
              position: "relative",
              display: "flex",
              alignItems: "center",
              borderRadius: "0.75rem",
              overflow: "hidden",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              textAlign: index % 2 === 0 ? "right" : "left",
            }}
          >
            <div
              style={{
                width: "20rem", // Change width to 20rem
                height: "25rem", // Change height to 30rem
                borderRadius: "0.75rem",
                overflow: "hidden",
                boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={project.cover_image}
                alt={project.name}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                padding: "1rem",
                display: "flex",
                alignItems: "center",
                position: "absolute",
                color: "white",
                borderRadius: "0.75rem",
                top: "9rem", // Positioned to overlap half the image's height
                left: index % 2 === 0 ? "15rem" : "0rem", // Adjusted left position
                right: index % 2 === 0 ? "0rem" : "15rem", // Adjusted right position
                zIndex: "1",
              }}
            >
              <div>
                <h1
                  style={{
                    marginBottom: "1rem",
                    fontWeight: "bold",
                    letterSpacing: "tight",
                    color: "#E2E8F0",
                    fontSize: "1.75rem", // text-2xl
                  }}
                >
                  {project.name}
                </h1>
                <div
                  style={{
                    padding: "0.5rem 2rem 0.5rem 2rem",
                    backgroundColor: "#1E293B", // lg:bg-gray-100 with opacity
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // lg:shadow-xl
                    borderRadius: "0.5rem", // lg:rounded-lg
                    color: "#E2E8F0",
                  }}
                >
                  <p>
                    {project.description.slice(0, 150) + "..."}
                    {project.description.length > 150 && (
                      <button
                        style={{
                          color: "#22D3EE", // text-blue-500
                          textDecoration: "underline",
                          marginLeft: "5px",
                          backgroundColor: "transparent",
                          border: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => openModal(project)}
                      >
                        Read more
                      </button>
                    )}
                  </p>
                </div>
                <p
                  style={{
                    marginTop: "0.5rem",
                    fontFamily: "monospace", // font-sourcecode
                    color: "#94A3B8", // text-gray-200
                    borderRadius: "0.25rem", // rounded
                    fontSize: "0.875rem", // text-base
                  }}
                >
                  {project.languages.map((lang, i) => (
                    <span key={i}>{lang} </span>
                  ))}
                </p>
                <div
                  style={{
                    marginTop: "0.5rem",
                    fontSize: "1rem", // text-lg
                    color: "rgb(200, 200, 200)", // text-gray-200
                    display: "flex",
                    alignItems: "center",
                    justifyContent: index % 2 === 0 ? "flex-end" : "flex-start",
                  }}
                >
                  {/* Replace with your GitHub icon */}
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: githubIconHovered ? "#22D3EE" : "#94A3B8",
                      // display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      height: "2rem",
                      width: "2rem",
                      display: "grid",
                      placeItems: "center",
                      textDecoration: "none",
                      borderRadius: "50%",
                      marginRight: "0.5rem",
                    }}
                    onMouseEnter={() => setGithubIconHovered(true)}
                    onMouseLeave={() => setGithubIconHovered(false)}
                  >
                    <FaGithub size={24} /> {/* GitHub icon */}
                  </a>

                  {/* Replace with your external link icon */}
                  <a
                    href={project.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: liveIconHovered ? "#22D3EE" : "#94A3B8",
                      alignItems: "center",
                      cursor: "pointer",
                      height: "2rem",
                      width: "2rem",
                      display: "grid",
                      placeItems: "center",
                      textDecoration: "none",
                      borderRadius: "50%",
                      marginRight: "0.5rem",
                    }}
                    onMouseEnter={() => setLiveIconHovered(true)}
                    onMouseLeave={() => setLiveIconHovered(false)}
                  >
                    <FaExternalLinkAlt size={18} /> {/* Live icon */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && currentProject && (
        <Modal project={currentProject} closeModal={closeModal} />
      )}
    </section>
  );
};

export default ProjectsSection;
