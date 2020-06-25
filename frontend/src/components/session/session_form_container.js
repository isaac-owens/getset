import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => {
    return {
      errors: Object.values(Object.values(state.errors.session)),
  };
}

const mDTP = dispatch => (
    {
        signup: user => dispatch(signup(user)),
        login: user => dispatch(login(user)),
    }
);

export default connect(mSTP, mDTP)(SessionForm);