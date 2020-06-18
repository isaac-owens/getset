import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
          <div className="dashboard-layout">
            <div className="card card-styling one"></div>
            <div className="card card-styling two"></div>
            <div className="card card-styling three">
              <ul>
                <li>
                  <img src={process.env.PUBLIC_URL + '/logo192.png'} />
                </li>
              </ul>
            </div>
          </div>
        );
    }
}

export default Dashboard;