import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Instructions = () => {
  return (
    <div className="instructions-page">
      <div className="instructions-sidebar card-styling">SIDEBAR</div>
      <div className="instructions-gif">
        <img src={process.env.PUBLIC_URL + "/create.gif"} alt="" height="100%" width="1200px"/>
      </div>
      <div className="instructions-content card-styling">CONTENT</div>
    </div>
  )
}

export default Instructions;