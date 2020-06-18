import React from 'react';
import { Link } from 'react-router-dom';
import { AUTH, CREATE, INDEX, CINDEX, SPLASH } from '../../util/route_util';

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
              <div>
                <div className="header-hello">
                  Hi {this.props.currentUser.username}!
                </div>
                <ul className="header-nav-links">
                  <li>
                    <Link to={CREATE}
                    className="header-nav-link">
                    Create-a-Hunt
                    </Link>
                  </li>
                  <li>
                    <Link to={INDEX}
                    className="header-nav-link">Hunts</Link>
                  </li>
                  <li>
                    <Link to={CINDEX}
                    className="header-nav-link">Challenges</Link>
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
                <Link to={SPLASH}>
                    <h1 className='header-logo'>GetSet</h1>
                </Link>
                {this.getLinks()}
            </div>
        );
    }
}

export default Header;