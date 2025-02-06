import React from "react";
import "./About.css";
import { FaCogs, FaChartBar, FaCode, FaTasks } from 'react-icons/fa';
const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hi, I’m <strong>Vatsal Sheth</strong>, a <strong>Machine Learning Software Engineer</strong> and <strong>Data Analyst</strong> with a unique blend of expertise in software development, data analytics, and artificial intelligence. With a background in <strong>Data Analytics, Machine Learning and Artificial Intelligence</strong> from Carnegie Mellon University (GPA: <strong>3.68/4.0</strong>), I thrive at the intersection of technology and decision-making.
        </p>
        <p>
          My journey includes:
        </p>
        <ul>
        <li>
        <FaCogs className="icon" />  <strong>Conducting cutting-edge research</strong>, where I built machine learning models for large-scale datasets using Big Data frameworks like <strong>Spark</strong>, and <stong>published research</stong> on advanced topics such as <strong>XGBoost</strong> and <strong>Convolutional Neural Networks (CNN)</strong>.
        </li>
        <li>
        <FaChartBar className="icon" />  <strong>Solving real-world problems</strong>, including developing automation scripts that enhanced fault detection by 87% and creating predictive models that reduced customer churn by 15% during my time at Accenture. As well as solving ML models generalisation problem on varied dataset, increasing the precision recall by 13% by developing a model from scratch from my time at Northwest bank.
          </li>
        <li>
        <FaCode className="icon" />  <strong>Building scalable systems</strong>, during my tenure at Accenture, where I leveraged <strong>AWS</strong>, <strong>Docker</strong>, <strong>Kubernetes</strong>, and <strong>Java</strong> to design and deploy scalable systems that improved operational efficiency.
          </li>
          
          <li>
          <FaTasks className="icon" />  <strong>Driving impactful results</strong>, by optimizing workflows, developing <strong>interactive dashboards</strong>, utilizing <strong>Kaplan-Meier survival curves</strong> for customer retention analysis, and improving <strong>data-driven decision-making</strong> for businesses by integrating machine learning solutions with existing systems.
          </li>
        </ul>
        <p>
          As someone with a deep interest in <strong>model development</strong>, <strong>data analytics</strong>, <strong>model optimisation</strong> and <strong>scaling systems</strong>, I’m passionate about creating intelligent systems that not only solve problems but do so efficiently and at scale. Whether it’s through optimizing models for performance, crafting seamless pipelines, or collaborating across teams, I aim to bridge the gap between data and decision-making with precision and creativity.
        </p>
        <p>
          Let’s connect and build solutions that make a difference!
        </p>
      </div>
    </section>
  );
};

export default About;
