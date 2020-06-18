import {connect} from 'react-redux';
import { logout } from '../../actions/session_actions';
import Dashboard from './dashboard';


// const mSTP = (state)=>({
//     currentUser: state.session.user
// });

// const mDTP = (dispatch)=>({
//     logout: () => dispatch(logout())
// });

export default connect(null)(Dashboard);