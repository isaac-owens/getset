import React from 'react';
import { Link } from 'react-router-dom';
import { AUTH, CREATE, INDEX, STATS, CINDEX, SPLASH, MYCHALL } from '../../util/route_util';

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.logoutUser = this.logoutUser.bind(this);
      this.getLinks = this.getLinks.bind(this);
      this.state = {
        open: true
      }
      this.handleDropClick = this.handleDropClick.bind(this);
    }

    handleDropClick = () => {
      console.log('click');
      this.setState({
        open: !this.state.open
      })
    };
    
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
              <div className="drop-down-trigger">
                <button onClick={this.handleDropClick} className="session-button"
                >
                  Hi {this.props.currentUser.username}!
                </button>
              </div>
              {this.state.open ? (
                <ul className="header-nav-links">
                  <Link to={CREATE} className="header-nav-link">
                    <li className="header-nav-link-container">Create-a-Hunt</li>
                  </Link>
                  <Link to={CINDEX} className="header-nav-link">
                    <li className="header-nav-link-container">
                      FindChallenges
                    </li>
                  </Link>
                  <Link to={INDEX} className="header-nav-link">
                    <li className="header-nav-link-container">MyHunts</li>
                  </Link>
                  <Link to={MYCHALL} className="header-nav-link">
                    <li className="header-nav-link-container">MyChallenges</li>
                  </Link>
                  <Link to={STATS} className="header-nav-link">
                    <li className="header-nav-link-container">MyStats</li>
                  </Link>
                  <Link
                    to={SPLASH}
                    className="header-nav-link"
                    onClick={this.logoutUser}
                  >
                    <li className="header-nav-link-container">Logout</li>
                  </Link>
                </ul>
              ) : (
                <div></div>
              )}
            </div>
          );
        }else {
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