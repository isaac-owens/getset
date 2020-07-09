import React from 'react';
// import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

export const Team = () => {
  let github = <FontAwesomeIcon icon={faGithub} size="2x" />;    
  let linkedin = <FontAwesomeIcon icon={faLinkedin} size="2x" />;    
  let personalSite = <FontAwesomeIcon icon={faUserTie} size="2x" />;    
  return(
        <div className="team-page">
          <div className="member-about">
            <span>Isaac</span>
            <img src={process.env.PUBLIC_URL + '/isaac.jpg'} alt=""  className="team-image" />
            <div className="card-styling team-about"></div>
          </div>
          <div className="member-about">
            <span>Kevin</span>
            <img src={process.env.PUBLIC_URL + '/kevin.png'} alt=""  className="team-image" />
            <div className="card-styling team-about">
              {github}
              {linkedin}
              {personalSite}
            </div>
          </div>
          <div className="member-about">
            <span>Zohaib</span>
            <img src={process.env.PUBLIC_URL + '/zohaib.png'} alt=""  className="team-image" />
            <div className="card-styling team-about"></div>
          </div>
          <div className="member-about">
            <span>Danny</span>
            <img src={process.env.PUBLIC_URL + '/danny.png'} alt=""  className="team-image" />
            <div className="card-styling team-about"></div>
          </div>
        </div>
    )
};

