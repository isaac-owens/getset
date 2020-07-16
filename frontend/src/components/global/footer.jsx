import React from 'react';
import { Link } from 'react-router-dom';
import { TEAM } from '../../util/route_util'
class Footer extends React.Component {
    
    render() {
        return (
          <div className="footer">
              <span className='footer-headline'>Get Set - A Family Company</span>
              <Link className='meet-the-team' to={TEAM}>Meet the team!</Link>
              <span className='footer-copyright'>Copyright &copy; 2020 GetSet</span>
          </div>
        );
    }
}

export default Footer;