import React from "react";
import "../css/skills.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiGitMerge, DiResponsive } from "react-icons/di";
import { BsBootstrapFill } from "react-icons/bs";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiRedux, SiExpress, SiMongodb, SiClockify } from "react-icons/si";
import { SlRocket } from "react-icons/sl";
import { IoLogoNodejs } from "react-icons/io";

const Skills = () => {
  return (
    <div className="skills-main" id="skills">
      <h1>Skills</h1>
      <div className="skill-container">
        <div>
          <span>
            <AiFillHtml5
              size={52}
              style={{ color: "#D95707" }}
              className="icon"
            />
          </span>
          <span>HTML</span>
        </div>
        <div>
          <span>
            <DiCss3 size={52} style={{ color: "#0F66F5 " }} className="icon" />
          </span>
          <span>CSS</span>
        </div>
        <div>
          <span>
            <BsBootstrapFill
              size={50}
              style={{ color: "#7B1FA2" }}
              className="icon"
            />
          </span>
          <span>BOOTSTRAP</span>
        </div>
        <div>
          <span>
            <TbBrandJavascript
              size={50}
              style={{ color: "#F39C12" }}
              className="icon"
            />
          </span>
          <span>JAVASCRIPT</span>
        </div>
        <div>
          <span>
            <FaReact
              size={50}
              style={{ color: "lightblue" }}
              className="icon"
            />
          </span>
          <span>REACT</span>
        </div>
        <div>
          <span>
            <SiRedux size={50} style={{ color: "#9C27B0" }} className="icon" />
          </span>
          <span>REDUX</span>
        </div>
        <div>
          <span>
            <IoLogoNodejs
              size={50}
              style={{ color: "#229954" }}
              className="icon"
            />
          </span>
          <span>NODE</span>
        </div>
        <div>
          <span>
            <SiExpress
              size={50}
              style={{ color: "#616A6B" }}
              className="icon"
            />
          </span>
          <span>EXPRESS</span>
        </div>
        <div>
          <span>
            <SiMongodb
              size={50}
              style={{ color: "#145A32" }}
              className="icon"
            />
          </span>
          <span>MONGODB</span>
        </div>
        <div>
          <span>
            <DiGitMerge
              size={50}
              style={{ color: "#CB4335 " }}
              className="icon"
            />
          </span>
          <span>GIT</span>
        </div>
      </div>
      <div className="responsive-container">
        <div className="fast">
          <div className="fast-child">
            <span>
              <SiClockify size={45} style={{ color: "#F39C12" }} />
            </span>
          </div>
          <h4>Fast</h4>
          <p>
            Fast load time and lag free,
            <br />
            interaction, my highest prioriry.
          </p>
        </div>
        <div className="responsive">
          <div className="responsive-child">
            <span>
              <DiResponsive size={120} />
            </span>
          </div>
          <h4>Responsive</h4>
          <p>
            My layouts will work on
            <br />
            any device, big or small.
          </p>
        </div>
        <div className="dynamic">
          <div className="dynamic-child">
            <span>
              <SlRocket size={45} style={{ color: "#FF0000" }} />
            </span>
          </div>
          <h4>Dynamic</h4>
          <p>
            Websites don't have to be static
            <br />I love making pages come to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
