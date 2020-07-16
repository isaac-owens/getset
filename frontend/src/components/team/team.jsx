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
        <div className="card-styling team-about">
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            eligendi adipisci fugiat, eveniet officia iure facere delectus
            voluptas at doloribus reiciendis assumenda non expedita veniam!
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
        <div className="card-styling team-about">
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            eligendi adipisci fugiat, eveniet officia iure facere delectus
            voluptas at doloribus reiciendis assumenda non expedita veniam!
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
        <div className="card-styling team-about">
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            eligendi adipisci fugiat, eveniet officia iure facere delectus
            voluptas at doloribus reiciendis assumenda non expedita veniam!
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
        <div className="card-styling team-about">
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            eligendi adipisci fugiat, eveniet officia iure facere delectus
            voluptas at doloribus reiciendis assumenda non expedita veniam!
          </div>
          <div className="about-links">
            <a href="https://github.com/dmo2412">{github}</a>
            <a href="https://www.linkedin.com/in/daniel-morgan-228739a7/">
              {linkedin}
            </a>
            <a href="https://dmo2412.github.io/">{personalSite}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

