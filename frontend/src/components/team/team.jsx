import React from 'react';
// import {connect} from 'react-redux';

export const team = () => {
    return(
        <div className="team-page">
          <div className="isaac-about">
            <div className="card-styling team-about">Isaac</div>
            <img src="frontend/public/isaac.jpg"  className="team-image">Isaac</img>
          </div>
          <div className="kevin-about">
            <div className="card-styling team-image">Kevin</div>
            <img src="frontend/public/kevin.jpg"  className="team-image">Isaac</img>
          </div>
          <div className="zohaib-about">
            <div className="card-styling team-image">Zohaib</div>
            <img src=""  className="team-image">Isaac</img>
          </div>
          <div className="danny-about">
            <div className="card-styling team-image">Danny</div>
            <img src="frontend/public/danny.jpg"  className="team-image">Isaac</img>
          </div>
        </div>
    )
};

