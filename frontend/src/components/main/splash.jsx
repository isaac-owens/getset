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
                  Lorem ipsum is a placeholder text. It is commonly used by designers and developers to create the document or website content without having the original content.
                  It serves the purpose of material even though the version is not meaningful. Replacing the actual content with placeholder text allows designers to design the layout 
                  properly even before the content itself has been produced. It is used to create documents or paragraphs as required according to your content requirement.
                  Also though there is not much importance in the variety of such placeholders, you can try some different styles of it.
                  The ‘lorem ipsum’ text is from a famous passage by Cicero of Ancient Rome and words are added, altered and removed to make it nonsensical in improper Latin. It has been 
                  used as placeholder text by typesetters since the 16th century, and this tradition continues on the web.
                  Lipsum
                </p>
              </div>
              <div className="splash-image">
                image here
              </div>
            </div>
          </div>
        );
    }
}

export default Splash;