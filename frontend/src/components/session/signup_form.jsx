import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      confirmEmail: "",
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.email === this.state.confirmEmail) {
      this.props.signup(this.state);
    }
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="session-form-container sign-up"
      >
        <div className="signup-form-error-card card-styling">
          <ul>
            {this.props.errors.map((error, idx) => 
            <li key={idx}>{error}</li>
            )}
          </ul>
        </div>
        <div className="session-form-header">
          <h3>Create a GetSet Account</h3>
        </div>
        <h4>and Get Set to play !</h4>

        <div className="session-form-input-field-container">
          <div>
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              className="input-field"
              required=" "
            />
            <label className="input-label">Email</label>
          </div>
          <div>
            <input
              type="text"
              value={this.state.confirmEmail}
              onChange={this.update("confirmEmail")}
              className="input-field"
              required=" "
            />
            <label className="input-label">Confirm Email</label>
          </div>
          <div>
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              className="input-field"
              required=" "
            />
            <label className="input-label">Username</label>
          </div>
          <div>
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              className="input-field"
              required=" "
            />
            <label className="input-label">Password</label>
          </div>
        </div>
        <div className="password-disclaimer">
          <h6>
            Password must be 5 or more characters. We suggest using a mix of
            letters, numbers {"&"} symbols
          </h6>
        </div>
        <button className="session-button">Sign Up!</button>
      </form>
    );
  }
}

export default SessionForm;