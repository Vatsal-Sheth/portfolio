import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle manual click events
  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  // Scroll-based Active Section Detection (Improved)
  useEffect(() => {
    const sections = document.querySelectorAll("section");
  
    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => ({
            id: entry.target.getAttribute("id"),
            top: entry.boundingClientRect.top,
          }));
  
        if (visibleSections.length > 0) {
          // Prioritize the topmost section in the viewport
          visibleSections.sort((a, b) => a.top - b.top);
          setActiveSection(visibleSections[0].id);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -30% 0px", // Ensures "About" is detected earlier
        threshold: 0.1, // Lower threshold ensures it triggers sooner
      }
    );
  
    sections.forEach((section) => observer.observe(section));
  
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className={`navbar ${isOpen ? "navbar-open" : ""}`}>
      <div className="navbar-logo">My Portfolio</div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className="navbar-links">
        <li>
          <a
            href="#hero"
            className={activeSection === "hero" ? "active" : ""}
            onClick={() => handleSetActive("hero")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={() => handleSetActive("about")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className={activeSection === "portfolio" ? "active" : ""}
            onClick={() => handleSetActive("portfolio")}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => handleSetActive("contact")}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
