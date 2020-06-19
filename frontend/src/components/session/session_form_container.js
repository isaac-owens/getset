import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => {
  debugger
    return {
      errors: Object.values(state.errors),
  };
}

const mDTP = dispatch => (
    {
        signup: user => dispatch(signup(user)),
        login: user => dispatch(login(user)),
        // logout: () => dispatch(logoutUser())
    }
);

export default connect(mSTP, mDTP)(SessionForm);