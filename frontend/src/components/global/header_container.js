import {connect} from 'react-redux';
import Header from './header';
import {logout} from '../../actions/session_actions';

const mSTP = state => (
    {
        currentUser: state.session.user
    }
);

const mDTP = dispatch => (
    {
        logout: () => dispatch(logout())
    }
);

export default connect(mSTP, mDTP)(Header);
