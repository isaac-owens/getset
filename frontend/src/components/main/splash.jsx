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
              <div className="splash-image">
                image here
              </div>
            </div>
          </div>
        );
    }
}

export default Splash;