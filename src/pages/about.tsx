import React from "react";
import "./about.css";
import BlinkingCursor from "../components/BlinkingCursor.tsx";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <div id="about-container">
      <div id="about-card">
        <div id="profile-image"></div>
        <div id="about-text">
          <h1>About Me</h1>
          <p>
            I'm Wastena Endrias, a passionate
            <strong> full stack developer</strong> based in the Washington, DC
            area. Armed with a degree in Information Science, I specialize in
            versatile, user-centered web and software development. <br />
            <br />I am fueled by my passion for creative problem-solving, I
            thrive on building innovative solutions. Beyond my work hours, I
            enjoy crafting side projects to tackle daily challenges, hone
            skills, and bring my ideas to life—some of which you can explore on
            my Projects page. My journey is rooted in a commitment to constant
            learning and a love for turning ideas into reality.
            <br />
            <br />
            Currently, I am working as a full stack developer in Leesburg, VA.{" "}
            <BlinkingCursor />
          </p>
          <div className="social-links">
            <ul className="social-icon-list">
              <a href="https://www.linkedin.com/in/wastena-endrias-479391148/">
                <LinkedInIcon className="linkedin-icon" />
              </a>
              <a href="https://github.com/wendrias/">
                <GitHubIcon />
              </a>
              <a href="https://codepen.io/wendrias">
                <FontAwesomeIcon icon={faCodepen} size="lg" />{" "}
              </a>
              <a href="mailto:wastena.e@gmail.com">
                <EmailIcon />
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="half-overlay"></div>
    </div>
  );
}

export default About;
