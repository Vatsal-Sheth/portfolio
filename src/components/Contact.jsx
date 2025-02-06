import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
        </p>

        {/* Contact Information */}
        <div className="contact-links">
          <a href="mailto:vus@andrew.cmu.edu" className="contact-link" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="contact-icon" /> vus@andrew.cmu.edu
          </a>
          <a href="https://www.linkedin.com/in/sheth-vatsal" className="contact-link" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="contact-icon" /> LinkedIn
          </a>
          <a href="https://github.com/Vatsal-Sheth" className="contact-link" target="_blank" rel="noopener noreferrer">
            <FaGithub className="contact-icon" /> GitHub
          </a>
        </div>

        {/* Work Authorization Info */}
        <p className="visa-info">
          I am currently on an <strong>F1 visa</strong> with <strong>3 years of work authorization</strong> remaining under <strong>OPT + STEM OPT</strong>.
          I will require <strong>H1B sponsorship</strong> after that.
        </p>
      </div>
    </section>
  );
};

export default Contact;
