import * as APIUtil from "../util/session_util";
import jwt_decode from "jwt-decode";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});


const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT,
});

export const signup = (user) => (dispatch) =>
  APIUtil.signup(user).then(
    (currentUser) => dispatch(receiveCurrentUser(currentUser.data)),
    (err) => dispatch(receiveErrors(err.response.data))
  );

// Upon login, set the session token and dispatch the current user. Dispatch errors on failure.
export const login = (user) => (dispatch) =>{
 return APIUtil.login(user)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
     return dispatch(receiveCurrentUser(decoded));
    },
    (err) => {
      return  dispatch(receiveErrors(err.response.data));
    });
  }

export const logout = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  APIUtil.setAuthToken(false);
  dispatch(logoutUser());
};
