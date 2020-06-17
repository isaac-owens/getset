import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => (
    {
        errors: errors.session,
    }
);

const mDTP = dispatch => (
    {
        signup: user => dispatch(signup(user)),
        login: user => dispatch(login(user)),
        // logout: () => dispatch(logoutUser())
    }
);

export default connect(mSTP, mDTP)(SessionForm);