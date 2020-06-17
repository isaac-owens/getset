import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            confirmEmail: '',
            username: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.email === this.state.confirmEmail){
            this.props.signup(this.state);
        }
    }

    render() {
        return (
            <form
              onSubmit={this.handleSubmit}
              className="session-form-container"
            >
              <br />
              <h3>Create your GetSet Account</h3>
              <h5>and Get Set to play</h5>
              <br />

              <div>
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
                <br />
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
              </div>
              <br />
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
              <br />
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
              <h6 className="password-disclaimer">
                Password must be 5 or more characters. We suggest using a mix of
                letters, numbers {"&"} symbols
              </h6>
              <div className="bottom-form">
                <input className="submit" type="submit" value="Sign Up" />
              </div>
            </form>
        );
    }
}

export default SessionForm;