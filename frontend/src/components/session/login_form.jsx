import React from 'react';

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
        this.validateFields = this.validateFields.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    validateFields() {
      let allErrors = [];
      if (this.state.email === '') {
        allErrors.push('Email cannot be blank');
      } 

      if (this.state.password === '') {
        allErrors.push('Password cannot be blank');
      }

      if (allErrors.length === 0) {
        return true;
      } else {
        this.setState({ errors: allErrors });
        return false;
      }
    }

    handleSubmit(e) {
      e.preventDefault();
      
      if (this.validateFields()) {
        this.props.login(this.state);
      }
    }

    populateDemo(e) {
        e.preventDefault();
        this.setState({ email: 'demouser@gmail.com' });
        this.setState({ password: 'password' });
    }

    renderErrors() {
        return (
            <ol>
                {this.state.errors.map((error, idx) => (
                    <li key={idx}>
                        *{error}
                    </li>
                ))}
            </ol>
        );
    }

    componentDidUpdate(prevProps) {
      if (this.props.errors !== prevProps.errors) {
        this.setState({ errors: this.props.errors })
      } 
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
                  // required=" "
                />
                <label className="input-label">Email</label>
              </div>
              <div>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="input-field"
                  // required=" "
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