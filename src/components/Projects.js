import React from "react";
import "../css/projects.css";
import { dataList } from "../assets/data";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <div className="project-main" id="projects">
      <h1>Projects</h1>
      <div className="project-div">
        <div className="project-child-div">
          <div className="project-item-container">
            {dataList.map((item) => (
              <div className="project-item-div" key={item.id}>
                <div className="project-img-div">
                  <img src={item.image} alt="proj-img" />
                  <div className="view-div">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <button>View</button>
                    </a>
                  </div>
                </div>
                <h4 className="proj-title">{item.name}</h4>
                <p className="proj-skills">{item.skills}</p>
                <div className="proj-github-btn-div">
                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button className="proj-icon">
                      <BsGithub />
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
