import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

class Splash extends React.Component {

    render() {
        let forwardIcon = <FontAwesomeIcon icon={faChevronRight} size="x" />;
        let backIcon = <FontAwesomeIcon icon={faChevronLeft} size="x" />;
    
        return (
          <div className="splash">
            <div className="splash-header">
              <h1>Welcome to GetSet!</h1>
            </div>
            <div className="splash-body">
              <div className="splash-content card-styling">
                <p>
                  GetSet is a fun interactive game where you create a list of photos and challenge your friends to try and recreate them!  Make a photo hunt, take a photo hunt challenge, or just enjoy the live feed of other people's matches.  More features to come soon!  Ready, GetSet, GO!!
                </p>
              </div>
              <div className="splash-image-container">
                <img className="splash-image" src={process.env.PUBLIC_URL + '/cheetah.png'} />
              </div>
            </div>
          </div>
        );
    }
}

export default Splash;