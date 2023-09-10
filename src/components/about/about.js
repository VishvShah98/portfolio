import React from "react";
import mypicture from "../../assets/pic5.jpg";

function About() {
  return (
    <div style={{ padding: "0 10rem 0 10rem", color: "white" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "1rem",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            marginBottom: "0",
            margin: "0 0rem",
            color: "#E2E8F0"
          }}
        >
          About Me
        </h1>
        <hr
          style={{
            flex: "0.25",
            border: "none",
            height: "1px",
            backgroundColor: "#475569",
            marginLeft: "1rem",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Left half */}
        <div style={{ flex: "0 49%", paddingRight: "1%", color: "#E2E8F0", fontSize:"0.9rem" }}>
          <p>
            I have always been fascinated by the intersection of technology,
            business, and design. I believe that a great product is more than
            just a set of features; it's about creating a delightful user
            experience that solves a problem in a unique and innovative way.
          </p>
          <p>
            During my time at Moveo Apps, I was like a digital architect,
            collaborating with UI/UX dreamers to bring their visions to life.
            I've transformed wireframes into living, breathing websites that
            sparkle on screens of all sizes. But I'm not just about pixels and
            code; I thrive on client interactions, ensuring their needs are met
            with a virtual handshake and a sprinkle of tech magic.
          </p>
          <p>
            As I progress in my career, my aspiration is to secure a prominent
            management position where I can guide and inspire dynamic teams,
            leveraging my technical expertise to drive innovation, foster
            growth, and lead the development of solutions that
            make a lasting impact.
          </p>
          <p>
            When I'm not diving into code, you'll find me kicking back with a
            football or hitting the gym for a workout. Whether it's on the field
            or in front of a screen, I'm all about bringing energy and
            enthusiasm to everything I do. Let's connect and chat tech, fitness,
            or the latest match!
          </p>
        </div>

        {/* Right half */}
        <div style={{ flex: "0 49%", paddingLeft: "10%" }}>
          <img
            src={mypicture}
            alt="Your Name"
            style={{
              maxWidth: "100%",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
