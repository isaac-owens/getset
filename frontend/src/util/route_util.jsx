import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

export const SPLASH = '/';
export const AUTH = '/session';

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.currentUser)
    //   grabbing id - stored in session slice
});

const Auth = ({ component: Component, path, loggedIn }) => (
    <Route
        path={path}
        render={
            props => (loggedIn ? <Redirect to={SPLASH} /> : <Component {...props} />)
        }
    />
);

const Protected = ({ component: Component, path, loggedIn }) => (
    <Route
        path={path}
        render={
            props => (loggedIn ? <Component {...props} /> : <Redirect to={AUTH} />)
        }
    />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
