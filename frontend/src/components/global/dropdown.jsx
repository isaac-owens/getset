import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { CREATE, INDEX, STATS, CINDEX, SPLASH, MYCHALL, TEAM } from '../../util/route_util';
 
class DropDown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.container = React.createRef();
        this.handleDropClick = this.handleDropClick.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
    }
    
    handleDropClick = () => {
      this.setState({
        open: !this.state.open
      })
    };

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

    handleClickOutside() {
      // console.log('click outside');
      return (e) => {
        if (this.container.current && 
          !this.container.current.contains(e.target)){
          this.setState({ open: false })
        }
      }
    }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside());
    }

    closeMenu() {
      return (e) => {
        e.stopPropagation();
        this.setState({open: false})
      }
    }
    
    render() {
      let arrowUp = <FontAwesomeIcon icon={faChevronUp} size="1x" />
      let arrowDown = <FontAwesomeIcon icon={faChevronDown} size="1x" />
        return (
            <div ref={this.container}>
                <div className="drop-down-trigger">
                  <button onClick={this.handleDropClick}  className="session-button">
                  <span className="button-greeting">Hi {this.props.username}!</span> 
                  {
                  this.state.open ?
                  <div>{arrowUp}</div> :
                  <div>{arrowDown}</div>
                  }
                  </button>
                </div>
                {this.state.open ? (
                <ul className="header-nav-links">
                  <Link to={CREATE} className="header-nav-link" onClick={this.closeMenu()}>
                    <li className="header-nav-link-container" onClick={this.closeMenu()}>Create-a-Hunt</li>
                  </Link>
                  <Link to={CINDEX} className="header-nav-link" onClick={this.closeMenu()}>
                      <li className="header-nav-link-container">FindChallenges</li>
                  </Link>
                  <Link to={INDEX} className="header-nav-link" onClick={this.closeMenu()}>
                      <li className="header-nav-link-container">MyHunts</li>
                  </Link>
                  <Link to={MYCHALL} className="header-nav-link" onClick={this.closeMenu()}>
                      <li className="header-nav-link-container">MyChallenges</li>
                  </Link>
                  <Link to={STATS} className="header-nav-link" onClick={this.closeMenu()}>
                      <li className="header-nav-link-container">MyStats</li>
                  </Link>
                  <Link to={TEAM} className="header-nav-link" onClick={this.closeMenu()}>
                      <li className="header-nav-link-container">MeetTheTeam</li>
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
    }
}

export default DropDown;