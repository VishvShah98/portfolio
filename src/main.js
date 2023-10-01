import Navbar from "./components/navbar/navbar.js";
import Introduction from "./components/introduction/introduction.js";
import Skills from "./components/skills/skills.js";
import Projects from "./components/projects/projects.js";
import Form from "./components/form/form.js";
import About from "./components/about/about.js";
import { FaGithub, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import pic2 from "./assets/pic2.jpg";
import pic3 from "./assets/pic3.jpg";
import lungs from "./assets/lungs.jpg";
import bank from "./assets/bank.png";
import mira from "./assets/mira.png";
import shirt from "./assets/shirtLab.png";
import jaliyan from "./assets/jaliyan.png";
import money from "./assets/moneyMaven.png";
import mira_mobile from "./assets/mira_mobile.png";
import mira_desktop from "./assets/mira_desktop.png";
import ProjectsSection from "./components/project2/projectsSection.js";


import { FaCode, FaDesktop } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Main() {

  const iconStyles = {
    color: "#B3C5DD",
    fontSize: "24px",
    transition: "transform 0.3s", // Added transition for transform property
  };

  const iconHoverStyles = {
    color: "#22D3EE",
    fontSize: "24px",
    transform: "translateY(-5px)",
    transition: "transform 0.3s", // Move the icon 5 pixels upward
  };
  const emailStyles = {
    position: "fixed",
    right: "-4rem",
    bottom: "60vh",
    transform: "rotate(90deg)",
    fontFamily: "Arial, sans-serif",
    color: "#B3C5DD",
    fontSize: "16px",
    cursor: "pointer",
    transition: "transform 0.3s, color 0.3s", // Added transition for transform and color properties
  };

  const emailHoverStyles = {
    transform: "translateY(-5px) rotate(90deg)", // Move the text 5 pixels upward
    color: "#22D3EE",
  };
  const projects = [
    {
      name: "Your Bank",
      cover_image: bank, // URL to the cover image
      description:
        "Your Bank is your gateway to modern banking, designed with your convenience in mind. Enjoy easy banking with features like deposits, withdrawals, transfers, and peer-to-peer transactions via email. Keep track of your financial journey with transaction history and interactive expense charts",
      languages: ["Vue.js","Node.js","Express.js","MySQL","Prisma","Amazon's RDS"],
      github_link: "https://github.com/VishvShah98/Banking_Application",
      live_link: "https://github.com/VishvShah98/Banking_Application",
      type:"Full Stack Projects"
    },
    {
      name: "Shirt Lab",
      cover_image: shirt, // URL to the cover image
      description:
        "ShirtLab is your gateway to 3D t-shirt personalization. Create unique designs effortlessly and apply them to your shirt model. Powered by AI-generated logo suggestions for a truly customized experience.",
      languages: ["React","Three.js","OpenAI API"],
      github_link: "https://github.com/VishvShah98/shirtLab-frontend",
      live_link: "https://github.com/VishvShah98/shirtLab-frontend",
      type:"Full Stack Projects"
    },
    {
      name: "Money Maven",
      cover_image: money, // URL to the cover image
      desktop_image: mira_desktop,
      mobile_image: mira_mobile,
      description:
        "Money Maven is a finance dashboard application that visualizes annual financial data through graphs and charts, including revenue, profit, and expenses. Powered by ML regression, it also predicts upcoming year's revenue.",
      languages: ["React", "Typescript", "MUI", "MongoDB", "Linear Regression"],
      github_link: "https://github.com/VishvShah98/moneyMaven-frontend",
      live_link: "https://github.com/VishvShah98/moneyMaven-frontend",
      type:"Full Stack Projects"
    },
    {
      name: "Jaliyan Clinic",
      cover_image: jaliyan, // URL to the cover image
      description:
        "The Jaliyan Clinic website is designed to provide patients with seamless access to vital clinic information and the convenience of booking appointments online. In addition to this, in cases of emergencies, patients can easily reach out to a qualified doctor for immediate assistance.",
      languages: ["Next.js", "React", "Tailwind CSS"],
      github_link: "https://github.com/VishvShah98/jaliyanhealthcare",
      live_link: "https://jaliyanhealthcare-eta.vercel.app/",
      type:"Single Page Applications"
    },
    {
      name: "Mira",
      cover_image: mira, // URL to the cover image
      description:
        "Mira is a responsive landing page for a project management app that highlights common landing page components like feature blocks, social proof bars and pricing plans, all enhanced with JavaScript for optimal user engagement.",
      languages: ["HTML", "CSS", "Javascript"],
      github_link: "https://github.com/VishvShah98/mira",
      live_link: "https://mira-eight-beta.vercel.app/",
      type:"Single Page Applications"
    },
    {
      name: "Lung Cancer Classification",
      cover_image: lungs, // URL to the cover image
      description:
        "This research project focuses on the analysis of lung cancer classification using k-nearest neighbor (kNN), Support Vector Machine (SVM), and Artificial Neural Network (ANN) algorithms. The study utilizes the NCCTG database for lung cancer data and employs Genetic Algorithm (GA) and Principal Component Analysis (PCA) for feature reduction. The optimal trade-off between accuracy and the number of features is achieved in round 2, where kNN achieves 99% accuracy with 5 selected features.",
      languages: ["Python","KNN","SVM","ANN","GA","PCA"],
      github_link: "https://github.com/VishvShah98/Lung-Cancer-Classification",
      live_link: "https://github.com/VishvShah98/Lung-Cancer-Classification",
      type:"Python Projects"
    },   
  ];
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
  const [isEmailClicked, setIsEmailClicked] = useState(false);
  const [isGIconClicked, setIsGIconClicked] = useState(false);
  const [isYIconClicked, setIsYIconClicked] = useState(false);
  const [isFIconClicked, setIsFIconClicked] = useState(false);
  const [isLIconClicked, setIsLIconClicked] = useState(false);
  const handleEmailClick = () => {
    setIsEmailClicked(true);
    // Open email client with pre-filled recipient
    window.location.href = "mailto:vishvshahwork@gmail.com";
  };
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
          background: "#0F172A",
        }}
      >
        <div id="home">
          <Navbar />
        </div>
        <Introduction />
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>

        <ProjectsSection projects={projects} />

        <div
          style={{
            position: "fixed",
            left: "2rem",
            bottom: 0,
            width: "2px",
            height: "20vh",
            backgroundColor: "#475569", // Adjust color as needed
          }}
        ></div>
        <div
          style={{
            position: "fixed",
            left: "1.5rem",
            bottom: "30vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <a
            href="https://github.com/VishvShah98"
            target="_blank"
            rel="noopener noreferrer"
            // style={{
            //   color: isGIconClicked ? "#22D3EE" : "#B3C5DD",

            //   fontSize: "24px",
            // }}
            style={isGIconClicked ? iconHoverStyles : iconStyles}
          >
            <FaGithub
              onMouseEnter={() => setIsGIconClicked(true)}
              onMouseLeave={() => setIsGIconClicked(false)}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/vishv-shah/"
            target="_blank"
            rel="noopener noreferrer"
            // style={{
            //   color: isLIconClicked ? "#22D3EE" : "#B3C5DD",
            //   fontSize: "24px",
            // }}
            style={isLIconClicked ? iconHoverStyles : iconStyles}
          >
            <FaLinkedin
              onMouseEnter={() => setIsLIconClicked(true)}
              onMouseLeave={() => setIsLIconClicked(false)}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCuE5gXMiu-aPNKWTEylenmQ"
            target="_blank"
            rel="noopener noreferrer"
            // style={{
            //   color: isYIconClicked ? "#22D3EE" : "#B3C5DD",
            //   fontSize: "24px",
            // }}
            style={isYIconClicked ? iconHoverStyles : iconStyles}
          >
            <FaYoutube
              onMouseEnter={() => setIsYIconClicked(true)}
              onMouseLeave={() => setIsYIconClicked(false)}
            />
          </a>
          <a
            href="https://www.facebook.com/vishvmarketing/"
            target="_blank"
            rel="noopener noreferrer"
            // style={{
            //   color: isFIconClicked ? "#22D3EE" : "#B3C5DD",
            //   fontSize: "24px",
            // }}
            style={isFIconClicked ? iconHoverStyles : iconStyles}
          >
            <FaFacebook
              onMouseEnter={() => setIsFIconClicked(true)}
              onMouseLeave={() => setIsFIconClicked(false)}
            />
          </a>
        </div>
        <div
          style={{
            position: "fixed",
            right: "2rem",
            bottom: 0,
            width: "2px",
            height: "40vh",
            backgroundColor: "#475569", // Adjust color as needed
          }}
        ></div>
        <div
          style={{
            position: "fixed",
            right: "-4rem",
            bottom: "60vh",
          }}
          onClick={handleEmailClick}
          onMouseEnter={() => setIsEmailClicked(true)}
          onMouseLeave={() => setIsEmailClicked(false)}
        >
          <div
            style={{
              ...emailStyles,
              ...(isEmailClicked ? emailHoverStyles : {}),
            }}
          >
            vishvshahwork@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}
