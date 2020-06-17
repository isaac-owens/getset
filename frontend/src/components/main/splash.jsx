import React from 'react';

class Splash extends React.Component {

    render() {
        return (
          <div className="splash">
            <div className="splash-header">
              <h1>Welcome to GetSet!</h1>
            </div>
            <div className="splash-body">
              <div className="splash-icon left">icon</div>
              <div className="splash-image">image here</div>
              <div className="splash-icon right">icon</div>
            </div>
          </div>
        );
    }
}

export default Splash;