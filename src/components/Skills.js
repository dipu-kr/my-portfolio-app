import React from "react";
import "../css/skills.css";

const Skills = () => {
  return (
    <div className="skills-main" id="skills">
      <h1>Skills</h1>
      <div className="skills-div">
        <div className="skills-div-child">
          <div className="front-end-main-div">
            <h2>Front-End</h2>
            <div className="front-div">
              <p>
                ReactJS, Redux, HTML, CSS, BootStrap, SASS, TailwindCSS, Git.
              </p>
            </div>
          </div>
          <div className="lang-main-div">
            <h2>Languages</h2>
            <div className="lang-div">
              <p>JavaScript, TypeScript, Python.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
