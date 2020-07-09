import React, { Component } from 'react';

class Dashboard extends Component {

    render() {
        return (
          <div className="dashboard-layout">
            <div className="card card-styling one"></div>
            <div className="card card-styling two"></div>
            <div className="card card-styling three">
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