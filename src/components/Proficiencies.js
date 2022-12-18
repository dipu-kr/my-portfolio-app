import React from "react";
import "../css/proficiencies.css";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

const Proficiencies = () => {
  return (
    <div className="proficiencies-main" id="proficiencies">
      <h1>Proficiencies</h1>
      <div className="proficiencies-container">
        <div className="container-child-div">
          <div>
            <span>
              <AiFillHtml5 size={180} style={{ color: "#02C0C0" }} />
            </span>
          </div>
          <h4>Front End</h4>
          <p>
            Now just that, I can
            <br />
            even host the show
          </p>
        </div>
        <div className="container-child-div">
          <div>
            <span>
              <FaReact size={180} style={{ color: "#fff" }} />
            </span>
          </div>
          <h4>React</h4>
          <p>
            When it comes to react app,
            <br />I have the strength of Atlas
          </p>
        </div>
        <div className="container-child-div">
          <div className="ui-ux-div">
            <div className="ui">
              <span>UI</span>
            </div>
            <div className="ux">
              <span>UX</span>
            </div>
          </div>
          <h4>UI/UX</h4>
          <p>
            Strong preference for
            <br />
            easy to use, intuitive ux/ui
          </p>
        </div>
      </div>
    </div>
  );
};

export default Proficiencies;
