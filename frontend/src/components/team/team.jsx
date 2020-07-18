import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

export const Team = () => {
  let github = <FontAwesomeIcon icon={faGithub} size="2x" />;    
  let linkedin = <FontAwesomeIcon icon={faLinkedin} size="2x" />;    
  let personalSite = <FontAwesomeIcon icon={faUserTie} size="2x" />;    
  return (
    <div className="team-page">
      <div className="member-about">
        <span>Isaac</span>
        <img
          src={process.env.PUBLIC_URL + "/isaac.jpg"}
          alt=""
          className="team-image"
        />
        <div className="card-styling team-about isaac">
        <div className="about-content">
            I love the space where art and technology meet!
          </div>
          <div className="about-links">
            <a href="github.com/isaac-owens">{github}</a>
            <a href="https://www.linkedin.com/in/isaac-owens-3a279532">
              {linkedin}
            </a>
            <a href="https://www.isaac-owens.com">{personalSite}</a>
          </div>
        </div>
      </div>
      <div className="member-about">
        <span>Kevin</span>
        <img
          src={process.env.PUBLIC_URL + "/kevin.png"}
          alt=""
          className="team-image"
        />
        <div className="card-styling team-about kevin">
        <div className="about-content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil!
          </div>
          <div className="about-links">
            <a href="https://github.com/kevinkusky">{github}</a>
            <a href="https://www.linkedin.com/in/kevinkusky/">{linkedin}</a>
            <a href="https://kevinkusky.github.io/">{personalSite}</a>
          </div>
        </div>
      </div>
      <div className="member-about">
        <span>Zohaib</span>
        <img
          src={process.env.PUBLIC_URL + "/zohaib.png"}
          alt=""
          className="team-image"
        />
        <div className="card-styling team-about zohaib">
          <div className="about-content">
            I'm passionate about crafting ideas into products through coding!
          </div>
          <div className="about-links">
            <a href="https://github.com/khaliqzohaib92">{github}</a>
            <a href="https://www.linkedin.com/in/zohaibkhaliq/">{linkedin}</a>
            <a href="https://khaliqzohaib.github.io/">{personalSite}</a>
          </div>
        </div>
      </div>
      <div className="member-about">
        <span>Danny</span>
        <img
          src={process.env.PUBLIC_URL + "/danny.png"}
          alt=""
          className="team-image"
        />
        <div className="card-styling team-about danny">
        <div className="about-content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil!
          </div>
          <div className="about-links">
            <a href="https://github.com/dmo2412">{github}</a>
            <a href="https://www.linkedin.com/in/daniel-morgan-228739a7/">
              {linkedin}
            </a>
            <a href="https://danny-morgan.com">{personalSite}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

