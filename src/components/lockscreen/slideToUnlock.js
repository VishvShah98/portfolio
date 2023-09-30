import "../../styles.css";
import { useState, useEffect } from "react";
import { useMotionValue } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Slide() {
  const navigate = useNavigate();
  var w = window.innerWidth;
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const [isTextVisible, setTextVisible] = useState(false);
  let timeout;

  function myFunction() {
    timeout = setTimeout(transition, 1000);
  }

  function transition() {
    navigate("/lockscreen");
  }
  function generateStars(count, size) {
    let stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * window.innerHeight,
        size: size,
        speed: 2.5 / size,
      });
    }
    return stars;
  }

  const [starsLayer1, setStarsLayer1] = useState(generateStars(16*16, 1));
  const [starsLayer2, setStarsLayer2] = useState(generateStars(16, 2));
  const [starsLayer3, setStarsLayer3] = useState(generateStars(4, 3));

  useEffect(() => {
    const interval = setInterval(() => {
      setStarsLayer1((prevStars) =>
        prevStars.map((star) => ({
          ...star,
          y: star.y - star.speed < 0 ? window.innerHeight : star.y - star.speed,
        }))
      );
      setStarsLayer2((prevStars) =>
        prevStars.map((star) => ({
          ...star,
          y: star.y - star.speed < 0 ? window.innerHeight : star.y - star.speed,
        }))
      );
      setStarsLayer3((prevStars) =>
        prevStars.map((star) => ({
          ...star,
          y: star.y - star.speed < 0 ? window.innerHeight : star.y - star.speed,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const [hueRotate, setHueRotate] = useState(240);
  const [isIncreasing, setIsIncreasing] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHueRotate((prevHueRotate) => {
        if (isIncreasing && prevHueRotate < 360) {
          return prevHueRotate + 10;
        } else if (!isIncreasing && prevHueRotate > 240) {
          return prevHueRotate - 10;
        } else {
          // Change direction
          setIsIncreasing(!isIncreasing);
          return isIncreasing ? prevHueRotate - 10 : prevHueRotate + 10;
        }
      });
    }, 300);

    return () => clearInterval(intervalId);
  }, [isIncreasing]);

  return (
    <div
      style={{
        "--primary-color": "white",
        "--secondary-color": "rgba(0, 0, 0, 0.5)",
        backgroundImage:
          "linear-gradient(to top right, #04061D 10%, #6B040F, #E65B04)",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        overflow: "hidden",
        transition: "filter 0.25s linear",
        filter: `hue-rotate(${hueRotate}deg)`,
      }}
    >
      {starsLayer1.map((star, index) => (
        <div
          key={`star-1-${index}`}
          style={{
            position: "fixed",
            top: star.y,
            left: star.x,
            width: star.size,
            height: star.size,
            backgroundColor: "white",
            overflow: "hidden",
          }}
        ></div>
      ))}
      {starsLayer2.map((star, index) => (
        <div
          key={`star-2-${index}`}
          style={{
            position: "fixed",
            top: star.y,
            left: star.x,
            width: star.size,
            height: star.size,
            backgroundColor: "white",
            overflow: "hidden",
          }}
        ></div>
      ))}
      {starsLayer3.map((star, index) => (
        <div
          key={`star-3-${index}`}
          style={{
            position: "fixed",
            top: star.y,
            left: star.x,
            width: star.size,
            height: star.size,
            backgroundColor: "white",
            overflow: "hidden",
          }}
        ></div>
      ))}
      <div className="circle-above"></div>
      <div className="circle-blurred-1"></div>
      <span
        style={{
          color: "var(--primary-color)",
          //color: "#C8857F",
          fontSize: "80px",
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          fontWeight: "750",
          marginBottom: "5%",
          width: "50%",
          letterSpacing: "0.5px",
          wordSpacing: "0.5px",
          //decrease line spacing to 1px
          lineHeight: "1",
          textAlign: "center",
          zIndex: 1,
          // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        Welcome to my portfolio
      </span>

      <button
        style={{
          background: "rgba(255, 255, 255, 0.15)", // Slightly transparent white
          color: "white", // Choose a contrasting color, like black
          border: "none",
          padding: "12px 60px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "background 0.3s", // Add a transition for smoother hover effect
          zIndex: 5,
        }}
        onClick={transition}
        // Add hover effect using CSS
        onMouseEnter={(e) => {
          e.target.style.background = "rgba(255, 255, 255, 0.2)"; // Solid white on hover
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "rgba(255, 255, 255, 0.15)"; // Restore the original background color on mouse leave
        }}
      >
        Dive In !
      </button>

      <div className="circle-below"></div>
      <div className="circle-blurred-2"></div>
      {/* <div className="wrapper_1">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
      <svg>
        <defs>
          <filter id="filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -10"
              result="filter"
            />
            <feComposite in="SourceGraphic" in2="filter" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div className="wrapper_2">
        <div className="ball-red"></div>
        <div className="ball-red"></div>
        <div className="ball-red"></div>
      </div>
      <svg>
        <defs>
          <filter id="filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -10"
              result="filter"
            />
            <feComposite in="SourceGraphic" in2="filter" operator="atop" />
          </filter>
        </defs>
      </svg> */}
    </div>
  );
}
