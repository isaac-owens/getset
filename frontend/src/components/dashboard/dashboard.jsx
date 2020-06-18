import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props){
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout(e){
        this.props.logout();
    }
    render() {
        return (
          <div className="dashboard-layout">
            <div className="card card-styling one"></div>
            <div className="card card-styling two"></div>
            <div className="card card-styling three"></div>
          </div>
        );
    }
}

export default Dashboard;