import React, { useState } from "react";
import "./Portfolio.css";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { name: "Machine Learning", description: "Projects focused on AI and ML." },
    { name: "Web Development", description: "Web-based applications and systems." },
    { name: "Blockchain", description: "Blockchain technologies and systems." },
  ];

  const projects = [
    {
      category: "Machine Learning",
      title: "Mortgage Risk Prediction",
      description: "Built ML models to predict loan delinquency and prepayment risks.",
      technologies: ["Python", "XGBoost", "Pandas"],
      github: "https://github.com/your-repo",
      liveDemo: "https://your-live-demo-link.com",
    },
    {
      category: "Machine Learning",
      title: "AI-Powered Dashboard",
      description: "Interactive dashboard for survival analysis using Kaplan-Meier curves.",
      technologies: ["Python", "Dash", "Plotly"],
      github: "https://github.com/your-repo",
      liveDemo: "https://your-live-demo-link.com",
    },
    {
      category: "Web Development",
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and CSS.",
      technologies: ["React", "CSS"],
      github: "https://github.com/your-repo",
      liveDemo: "https://your-live-demo-link.com",
    },
    {
      category: "Blockchain",
      title: "Blockchain Simulation",
      description: "Blockchain system with block validation and performance analysis.",
      technologies: ["Java", "Spring Boot", "MongoDB"],
      github: "https://github.com/your-repo",
      liveDemo: "https://your-live-demo-link.com",
    },
  ];

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-content">
        <h2>My Projects</h2>

        {selectedCategory === null ? (
          // Show Category Cards
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div
                className="category-card"
                key={index}
                onClick={() => handleCategoryClick(category.name)}
              >
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            ))}
          </div>
        ) : (
          // Show Projects in the Selected Category
          <div>
            <button className="back-button" onClick={handleBackToCategories}>
              ← Back to Categories
            </button>
            <div className="projects-grid">
              {projects
                .filter((project) => project.category === selectedCategory)
                .map((project, index) => (
                  <div className="project-card" key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p className="technologies">
                      <strong>Technologies:</strong> {project.technologies.join(", ")}
                    </p>
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
