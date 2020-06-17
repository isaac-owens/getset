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
            <div className="session-form-container">
                <form onSubmit={this.handleSubmit} className="right-form-box">
                    <br />
                    <h3>Please Sign In</h3>
                    {/* {this.renderErrors()} */}
                    <br />
                    <br />
                    <div className='input-container'>
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update("email")}
                            required=' '
                        />
                        <label className='input-labels'>Email</label>
                    </div>
                    <br />
                    <div className='input-container'>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update("password")}
                            required=' '
                        />
                        <label className='input-labels'>Password</label>
                    </div>
                    <br />
                    <div className='bottom-form' >
                        <button onClick={this.populateDemo}>Demo Session</button>
                    </div>
                    <input className="submit" type="submit" value='Sign In' />
                </form>

            </div>
        );
    }
}

export default Login;