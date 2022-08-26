import React from "react";
import "../css/about.css";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub, BsWhatsapp } from "react-icons/bs";

const About = () => {
  return (
    <section className="about-main" id="about">
      <div className="about-name-div">
        <h1>Hi, My name is Dipu Kumar</h1>
      </div>
      <div className="about-para-div">
        <p>A front-end developer with a passion for learning and creating.</p>
      </div>
      <div className="about-icon-div">
        <a
          href="https://linkedin.com/in/dipu-kr"
          target="_blank"
          rel="noreferrer noopener"
        >
          <AiFillLinkedin className="about-icon" />
        </a>
        <a
          href="https://github.com/dipu-kr"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsGithub className="about-icon" />
        </a>
        <a
          href="https://wa.me/917087164123?text=Hi"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsWhatsapp className="about-icon" />
        </a>
      </div>
    </section>
  );
};

export default About;
