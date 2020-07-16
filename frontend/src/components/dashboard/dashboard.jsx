import React, { Component } from 'react';

class Dashboard extends Component {

    render() {
        return (
          <div className="dashboard-layout">
            <div className="card card-styling one"></div>
            <div className="card card-styling two"></div>
            <div className="card card-styling three">
                {/* <p className='welcome message'>
                    Thank You for visiting Get Set - the Game we take your photo skills to the test
                    Create Your own games!, Challenge Your friends!  GetSet to have fun!
                    
                </p> */}
              <ul className="scroll-container">
                <li>
                  <img src={process.env.PUBLIC_URL + '/cheetah.png'} alt="" />
                </li>
              </ul>
            </div>
          </div>
        );
    }
}

export default Dashboard;