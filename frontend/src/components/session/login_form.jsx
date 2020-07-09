import React from 'react';
import { RECEIVE_SESSION_ERRORS } from '../../actions/session_actions';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.populateDemo = this.populateDemo.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
      e.preventDefault();
      
      this.props.login(this.state)
      .then(res => {
        if (res.type === RECEIVE_SESSION_ERRORS ) {
          this.setState({ errors: Object.values(res.errors) });
        }
      })
    }

    populateDemo(e) {
        e.preventDefault();
        this.setState({ email: 'demouser@gmail.com' });
        this.setState({ password: 'password' });
    }

    renderErrors() {
      return (
        <ul>
          {this.state.errors.map((error, idx) => (
            <li key={idx}>
              *{error}
            </li>
          ))}
        </ul>
      );
    }


    render() {
        return (
          <form onSubmit={this.handleSubmit} className="session-form-container login" noValidate={true}>
            <div className='login-form-error-card card-styling'>
              <ul>
                {this.renderErrors()}
              </ul>
            </div>
            <div className="session-form-header">
              <h3>Please Sign In</h3>
            </div>
            <div className='session-form-input-field-container-login'>
              <div>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  className="input-field"
                />
                <label className="input-label">Email</label>
              </div>
              <div>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="input-field"
                />
                <label className="input-label">Password</label>
              </div>
            </div>

            <div className="bottom-form">
              <button 
              onClick={this.populateDemo}
              className="demo-session-button session-button"
              >
                Demo Session
              </button>
              <button className="session-button">
                Sign In
              </button>
            </div>
          </form>
        );
    }
}

export default Login;