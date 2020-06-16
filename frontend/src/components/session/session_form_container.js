import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { loginUser, logoutUser, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => (
    {
        errors: errors.session,
    }
);

const mDTP = dispatch => (
    // login/out based on helped logged_in?
    {
        signup: user => dispatch(signup(user)),
        login: user => dispatch(loginUser(user)),
        // logout: () => dispatch(logoutUser())
    }
);

export default connect(mSTP, mDTP)(SessionForm);