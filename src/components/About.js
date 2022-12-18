import React from "react";
import "../css/about.css";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import myimg from "../assets/all-img/my1.jpg";

const About = () => {
  return (
    <section className="about-main" id="about">
      <div className="my-img-div">
        <img src={myimg} alt="my-img" />
      </div>

      <div className="about-name-div">
        <h1>Hi, I'm Dipu Kumar</h1>
      </div>
      <div className="about-para-div">
        <p>
          A passionate aspiring Front-End Developer skilled in React,
          JavaScript, Es6. Moulded and shaped by SelfStudy, Actively ready to
          join in a great lively team of a good start-up to adapt me in any
          situation and environment with ease and perform the best.
        </p>
      </div>
      <div className="about-icon-div">
        <div>
          <a href="tel:7644949363" target="_blank" rel="noreferrer noopener">
            <BiPhoneCall className="about-icon phone" />
          </a>
        </div>
        <div>
          <a
            href="https://linkedin.com/in/dipu-kr"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiFillLinkedin className="about-icon linkedin" />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/dipu-kr"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsGithub className="about-icon github" />
          </a>
        </div>
        <div>
          <a
            href="https://wa.me/917087164123?text=Hi"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsWhatsapp className="about-icon whatsapp" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
