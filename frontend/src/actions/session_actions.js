import * as APIUtil from '../util/session_util';
import jwt_decode from 'jwt-decode';
import { saveTokenLocally, decodeToken } from '../util/helper';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";

const receiveCurrentUser = currentUser => (
    {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
);

const receiveErrors = errors => (
    {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
);

const logoutUser = () => (
    {
        type: RECEIVE_USER_LOGOUT
    }
);

export const signup = user => dispatch => (
    APIUtil.signup(user).then(
        (res) =>{
            const { token } = res.data;
            //save token locally
            saveTokenLocally(token)

            //set token in axois request header
            APIUtil.setAuthToken(token);

            //decode token to get user data
            const user = decodeToken(token);
        
            dispatch(receiveCurrentUser(user));
        },
        err => dispatch(receiveErrors(err.response.data))
    )
);

export const login = user => dispatch => (
    APIUtil.login(user).then(
        res => {
            const { token } = res.data;
            //save token locally
            saveTokenLocally(token)

            //set token in axois request header
            APIUtil.setAuthToken(token);

            //decode token to get user data
            const user = decodeToken(token);
        
            dispatch(receiveCurrentUser(user));
        }
    ).catch(
        err => dispatch(receiveErrors(err.response.data))
    )
);

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    APIUtil.setAuthToken(false);

    dispatch(logoutUser());
};

//helper method