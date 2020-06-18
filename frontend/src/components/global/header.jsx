import React from 'react';
import { Link } from 'react-router-dom';
import { AUTH, DASH, CREATE, INDEX, CINDEX } from '../../util/route_util';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.currentUser) {
            return (
                <div >
                    <ul className="header-nav-links">Hi {this.props.currentUser.username}!
                        <li>
                            <Link to={DASH}>Dashboard</Link>
                        </li>
                        <li>
                            <Link to={CREATE}>Create Hunt</Link>
                        </li>
                        <li>
                            <Link to={INDEX}>See Hunts</Link>
                        </li>
                        <li>
                            <Link to={CINDEX}>See Challenges</Link>
                        </li>
                        {/* <li>
                            <Link to={STATS}>Stats</Link>
                        </li> */}
                        <li>
                            <button onClick={this.logoutUser}>Logout</button>
                        </li>
                    </ul>
                </div>
            );
        } else {
            return (
              <div className="header-nav-links">
                <Link to={AUTH}>SignUp | SignIn</Link>
              </div>
            );
        }
    }

    render() {
        return (
            <div className='header'>
                <h1 className='header-logo'>GetSet</h1>
                {this.getLinks()}
            </div>
        );
    }
}

export default Header;