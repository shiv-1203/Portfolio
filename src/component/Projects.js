import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import portfolioImage from "../Images/portfolio.png";
import todoImage from "../Images/todo-website.png";
import jobPortalImage from "../Images/job-portal.png";
import homepageImage from "../Images/homepage.png";
import pokedex from "../Images/pokedex.png";
import tileGame from "../Images/tilegame.png";
import onlineCompiler from "../Images/onlineCompiler.png";
import weatherReport from "../Images/weather-report.jpg";
import ticeTacToe from "../Images/tic-tac-toe.png";
import "../styles/project.css";

class Projects extends React.Component {
  render() {
    const projects = [
      {
        title: "Portfolio",
        githubLink: "https://github.com/shiv-1203/Portfolio",
        liveLink: "https://shiv-1203.github.io/Portfolio/",
        description: "An online representation of my work samples.",
        image: portfolioImage,
      },
      {
        title: "To-Do-List",
        githubLink: "https://github.com/shiv-1203/To-do-List",
        liveLink: "https://shiv-1203.github.io/To-do-List/",
        description: "A task manager built with Node.js and Redux.",
        image: todoImage,
      },
      {
        title: "Job-Portal",
        githubLink: "https://github.com/shiv-1203/Job-Portal",
        liveLink: "https://shiv-1203.github.io/Job-Portal/",
        description: "A job portal fetching data using APIs with ReactJS.",
        image: jobPortalImage,
      },
      {
        title: "HomePage",
        githubLink: "https://github.com/shiv-1203/Simple_Responsive_FrontPage",
        liveLink: "https://shiv-1203.github.io/Simple_Responsive_FrontPage/",
        description: "A simple responsive homepage design.",
        image: homepageImage,
      },
      {
        title: "Pokedex",
        githubLink: "https://github.com/shiv-1203/Pokedex",
        liveLink: "https://shiv-1203.github.io/Pokedex/",
        description: "An immersive React.js Pokedex web app.",
        image: pokedex,
      },
      {
        title: "Tile Game",
        githubLink: "https://github.com/shiv-1203/TileGame_Frontend",
        liveLink: "",
        description: "A captivating 10x10 tile animation game.",
        image: tileGame,
      },
      {
        title: "Online Compiler",
        githubLink: "https://github.com/shiv-1203/online-compiler",
        liveLink: "https://shiv-1203.github.io/online-compiler/",
        description: "A web-based compiler merging React.js and Spring Boot.",
        image: onlineCompiler,
      },
      {
        title: "Weather Report",
        githubLink: "https://github.com/shiv-1203/Weather_Report",
        liveLink: "",
        description: "Fetches weather data from an Open API.",
        image: weatherReport,
      },
      {
        title: "Tic-Tac-Toe",
        githubLink: "https://github.com/shiv-1203/Tic-Tac-Toe",
        liveLink: "",
        description: "A two-player Tic-Tac-Toe game built in C++.",
        image: ticeTacToe,
      },
    ];

    return (
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image-container">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                ) : (
                  <div className="placeholder-image">Image Unavailable</div>
                )}
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-icon"
                  >
                    <FaGithub />
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon"
                    >
                      <FaGlobe />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="view-more">
          <a
            href="https://github.com/shiv-1203"
            target="_blank"
            rel="noopener noreferrer"
            className="view-more-button"
          >
            View More
          </a>
        </div>
      </div>
    );
  }
}

export default Projects;
