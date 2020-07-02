import React from 'react';
import { Link } from 'react-router-dom';
import DropDown from './dropdown';
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
          return (<DropDown username={this.props.currentUser.username} />)
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
