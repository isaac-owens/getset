import React from 'react';

class Splash extends React.Component {

    render() {
    
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
                <img className="splash-image" src={process.env.PUBLIC_URL + '/cheetah.png'} alt="cheetah hunting an antelope" />
              </div>
            </div>
          </div>
        );
    }
}

export default Splash;