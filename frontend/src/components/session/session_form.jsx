import React from 'react';
import SignupForm from './signup_form';
import LoginForm from './login_form';

const SessionForm = (props) => {
    return(
        <div className="session-form">
            <SignupForm signup={props.signup} errors={props.errors}/>
            <LoginForm login={props.login} errors={props.errors}/>
        </div>
    )
}

export default SessionForm;