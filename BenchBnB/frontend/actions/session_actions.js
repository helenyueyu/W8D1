import * as SessionAPI from '../util/session_api_util'; 

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'; 
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

// thunk actions 
export const login = user => dispatch => {
  // console.log(user); 
  return SessionAPI.login(user)
  .then(user => dispatch(receiveCurrentUser(user)))
  .fail(errors => dispatch(receiveSessionErrors(errors)))
}; 

export const logout = () => dispatch => (
  SessionAPI.logout()
  .then(() => dispatch(logoutCurrentUser()))
  .fail(errors => dispatch(receiveSessionErrors(errors)))
); 

export const signup = user => dispatch => (
  SessionAPI.signup(user)
  .then(user => dispatch(receiveCurrentUser(user)))
  .fail(errors => dispatch(receiveSessionErrors(errors)))
);

// regular actions 
const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER, 
  currentUser
}); 

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS, 
  errors 
});

window.signup = signup;
window.login = login;
window.logout = logout; 