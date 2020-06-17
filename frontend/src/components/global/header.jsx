import React from 'react';
import { Link } from 'react-router-dom';
import { AUTH, DASH } from '../../util/route_util';

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

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        // Route util consts for the link tos
        if (this.props.loggedIn) {
            return (
                <div>
                    <ul>Hi {this.props.currentUser.username}!
                        {/* <li>
                            <Link to={DASH}>Dashboard</Link>
                        </li> */}
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
                <div>
                    <Link to={AUTH}>SignUp/SignIn</Link>
                </div>
            );
        }
    }
// Route util consts for the link tos

    render() {
        return (
            <div className='header'>
                <h1 className='logo'>GetSet</h1>
                {this.getLinks()}
            </div>
        );
    }
}

export default Header;