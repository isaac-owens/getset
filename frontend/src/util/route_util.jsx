import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

export const SPLASH = '/';
export const AUTH = '/session';
export const DASH = '/dashboard';
export const INDEX = '/hunts/index';
export const CREATE = '/hunts/create';
export const STATS = '/stats';
export const CINDEX = '/challenges/index';
export const MYCHALL = '/mychallenges'

const mapStateToProps = state => {
    return({
        loggedIn: state.session.isAuthenticated,
    }
        //   grabbing id - stored in session slice
    );
};

const Auth = ({ component: Component, path, loggedIn }) => (
    <Route
        path={path}
        render={
            props => (loggedIn ? <Redirect to={DASH} /> : <Component {...props} />)
        }
    />
);

const Protected = ({ component: Component, path, loggedIn }) => {
    return(
        <Route
            path={path}
            render={
                props => (loggedIn ? <Component {...props} /> : <Redirect to={AUTH} />)
            }
        />
    )
};
// );

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
