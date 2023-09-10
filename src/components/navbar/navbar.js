import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaStar,
} from "react-icons/fa";

const linkVariants = {
  hover: { color: "#22D3EE" },
};

let lastScrollPos = window.pageYOffset;

export default function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setIsNavbarVisible(
      currentScrollPos < lastScrollPos || currentScrollPos < 20
    );
    lastScrollPos = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleProjectsClick = (event) => {
    event.preventDefault();
    const projectsSection = document.getElementById("projects");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };
  const handleLogoClick = (event) => {
    event.preventDefault();
    const projectsSection = document.getElementById("home");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };
  const handleAboutClick = (event) => {
    event.preventDefault();
    const projectsSection = document.getElementById("about");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleSkillsClick = (event) => {
    event.preventDefault();
    const projectsSection = document.getElementById("skills");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      animate={{
        y: isNavbarVisible ? 0 : -100,
        opacity: isNavbarVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "anticipate" }}
      style={{
        position: "fixed",
        background: "rgba(15, 23, 42, 0.7)",
        backdropFilter: "blur(10px)",
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
        <NavButton icon={<FaStar size="40" color="#22D3EE" />} click={handleLogoClick} />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NavButton label="About" click={handleAboutClick} />
        <NavButton label="Skills" click={handleSkillsClick} />
        <NavButton label="Projects" click={handleProjectsClick} />
      </div>
    </motion.nav>
  );
}

const NavButton = ({ icon, label, link, click }) => {
  return (
    <motion.a
      onClick={click}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={linkVariants}
      className="navbar"
      whileHover="hover"
      style={{
        display: "flex",
        alignItems: "center",
        marginRight: "2vw",
        textDecoration: "none",
        color: "white",
        fontWeight: "100",
        fontSize: "1.2rem",
        fontFamily: "monospace",
        cursor: "pointer",
        padding: "10px",
        borderRadius: "5px",
        transition: "background 0.3s",
      }}
    >
      <span style={{ marginRight: "0.5vw", textDecoration: "none" }}>
        {label}
      </span>
      {icon}
    </motion.a>
  );
};
