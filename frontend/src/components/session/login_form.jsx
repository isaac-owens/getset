import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.populateDemo = this.populateDemo.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.login(this.state);
    }

    populateDemo(e) {
        e.preventDefault();
        this.setState({ email: 'demouser@gmail.com' });
        this.setState({ password: 'password' });
    }

    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    render() {
        return (
          <form onSubmit={this.handleSubmit} className="session-form-container login">
            <h3>Please Sign In</h3>
            {/* {this.renderErrors()} */}
            <div className='session-form-input-field-container'>
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
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="input-field"
                  required=" "
                />
                <label className="input-label">Password</label>
              </div>
            </div>

            <div className="bottom-form">
              <div>
                <button onClick={this.populateDemo}>Demo Session</button>
              </div>
              <div>
                <input className="submit" type="submit" value="Sign In" />
              </div>
            </div>
          </form>
        );
    }
}

export default Login;