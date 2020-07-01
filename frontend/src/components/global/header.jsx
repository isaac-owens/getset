import React from 'react';
import { Link } from 'react-router-dom';
import { AUTH, CREATE, INDEX, STATS, CINDEX, SPLASH, MYCHALL } from '../../util/route_util';

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
      if(this.props.location.pathname === AUTH){
        return (<div></div>);  
      } else if (this.props.currentUser) {
              return (
                <div>
                  <div className='drop-down-trigger'>
                    <button className='session-button'>Hi {this.props.currentUser.username}!</button>
                  </div>
                    <ul className="header-nav-links">
                      <li className="header-nav-link-container">
                          <Link 
                           to={CREATE}
                           className="header-nav-link"
                          >Create-a-Hunt</Link>
                      </li>
                      <li className="header-nav-link-container">
                          <Link to={CINDEX}
                          className="header-nav-link"
                          >FindChallenges</Link>
                      </li>
                      <li className="header-nav-link-container">
                          <Link to={INDEX}
                          className="header-nav-link"
                          >MyHunts</Link>
                      </li>
                      <li className="header-nav-link-container">
                          <Link to={MYCHALL}
                          className="header-nav-link"
                          >MyChallenges</Link>
                      </li>
                      <li className='header-nav-link-container'>
                          <Link to={STATS}
                            className="header-nav-link">
                            MyStats</Link>
                      </li>
                    <li className='header-nav-link-container'>
                        <Link to={SPLASH}
                          className="header-nav-link"
                          onClick={this.logoutUser}>
                          Logout
                        </Link>
                      </li>
                    </ul>
                </div>
              );
          }
        else {
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