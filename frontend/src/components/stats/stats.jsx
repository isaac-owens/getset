import React from 'react';

class Stats extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
          <div>
            <div className="stat-card-one">
                <ul className="challenge-selector">

                </ul>
            </div>
                <div className="stat-card-two">
                    <ul className='selected-user-score'>

                    </ul>
            </div>
            <div className="stat-card-three">
              <ul className="selected-leader-board">
                  
              </ul>
            </div>
          </div>
        );
    }
};

export default Stats;