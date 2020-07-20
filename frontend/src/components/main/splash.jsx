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
                  GetSet is a photo comparison game that scores photo recreations. First you create a list of photos (a 'Hunt') which is added to GetSet's public collection of photo 'Challenges'.  Users can find the Hunt your created, accept it as a Challenge, and submit their own list of matching photos which GetSet will immediately score!  Every challenge expires after 7 days upon which the hunter with the highest score is announced!  So what are you waiting for?  Ready? GetSet. GO!!
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