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
        const currentUser = this.props.currenUser

        return (
            <div>
               Hi, {currentUser.username}
               <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}

export default Dashboard;