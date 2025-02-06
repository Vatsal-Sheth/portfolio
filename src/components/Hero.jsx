import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src="/src/assets/Vatsal_Photo.jpg" alt="Vatsal Sheth" />
        </div>
        <h1>Vatsal Sheth</h1>
        <h2>
          <span className="typewriter">Turning data into intelligent decisions.</span>
        </h2>
        <p>
          I design and develop AI-powered solutions that make businesses smarter and faster.
        </p>
        <div className="hero-buttons">
          <a href="/src/assets/VatsalU_CV.pdf" download className="btn">
            Download Resume
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
