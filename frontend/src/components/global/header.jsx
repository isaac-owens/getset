import React from 'react';
import { Link } from 'react-router-dom';
// import './navbar.css';

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
        if (this.props.loggedIn) {
            return (
                <div>
                    {/* <Link to={'/profile'}>Profile</Link>
                    <button onClick={this.logoutUser}>Logout</button> */}
                </div>
            );
        } else {
            return (
                <div>
                    {/* <Link to={'/session'}>SignUp/SignIn</Link> */}
                </div>
            );
        }
    }

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