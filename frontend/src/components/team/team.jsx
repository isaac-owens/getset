import React from 'react';
// import {connect} from 'react-redux';

export const Team = () => {
    return(
        <div className="team-page">
          <div className="member-about">
            <img src={process.env.PUBLIC_URL + '/isaac.jpg'}  className="team-image" />
            <div className="card-styling team-about">Isaac</div>
          </div>
          <div className="member-about">
            <img src={process.env.PUBLIC_URL + '/kevin.png'}  className="team-image" />
            <div className="card-styling team-about">Kevin</div>
          </div>
          <div className="member-about">
            <img src={process.env.PUBLIC_URL + '/zohaib.png'}  className="team-image" />
            <div className="card-styling team-about">Zohaib</div>
          </div>
          <div className="member-about">
            <img src={process.env.PUBLIC_URL + '/danny.png'}  className="team-image" />
            <div className="card-styling team-about">Danny</div>
          </div>
        </div>
    )
};

