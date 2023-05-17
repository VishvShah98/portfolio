import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaHome,
  FaProjectDiagram,
  FaEnvelope,
  FaUser
} from "react-icons/fa";

const linkVariants = {
  hover: { scale: 1.2 },
};

const NavButton = ({ icon, label, link, click }) => {
  return (
    <motion.a
      onClick={click}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={linkVariants}
      className='navbar'
      whileHover="hover"
      style={{
        display: "flex",
        alignItems: "center",
        marginRight: "2vw",
        textDecoration: "none",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer"
      }}
    >
      <span style={{ marginRight: "0.5vw", textDecoration: "none" }}>
        {label}
      </span>
      {icon}
    </motion.a>
  );
};

export default function Navbar() {
  const handleMyWorkClick = (event) => {
    event.preventDefault();
    const projectsSection = document.getElementById("projects");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };
  const handleHomeClick = (event) => {
    event.preventDefault();
    const projectsSection = document.getElementById("home");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };
  const handleContactClick = (event) => {
    event.preventDefault();
    const projectsSection = document.getElementById("contact");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "anticipate" }}
      style={{
        position: "fixed",
        background: "#212529",
        top: 0,
        left: 0,
        right: 0,
        height: "8vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5vw 5vw",
        zIndex: 10,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <NavButton icon={<FaHome />} label="Home" click={handleHomeClick} />

        <NavButton
          icon={<FaProjectDiagram />}
          label="Projects"
          click={handleMyWorkClick}
        />

        <NavButton
          icon={<FaEnvelope />}
          label="Contact"
          click={handleContactClick}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <NavButton
          icon={<FaGithub />}
          label="GitHub"
          link="https://github.com/VishvShah98"
        />
        <NavButton
          icon={<FaLinkedin />}
          label="LinkedIn"
          link="https://www.linkedin.com/in/vishv-shah"
        />
        <NavButton
          icon={<FaUser />}
          label="Resume"
          link="https://drive.google.com/file/d/1GvnagiH7OicU8thHu6My6Q22vvAqegUX/view?usp=share_link"
        />
      </div>
    </motion.nav>
  );
}
