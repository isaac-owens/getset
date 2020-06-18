import React from 'react';
// import { Link } from 'react-router-dom';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="footer">
              <span className='footer-headline'>Get Set - A Family Company</span>
              <span className='footer-copyright'>Copyright &copy; 2020 GetSet</span>
          </div>
        );
    }
}

export default Footer;