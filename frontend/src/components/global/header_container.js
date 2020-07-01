import {connect} from 'react-redux';
import {withRouter} from 'react-router';
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

export default withRouter(connect(mSTP, mDTP)(Header));
