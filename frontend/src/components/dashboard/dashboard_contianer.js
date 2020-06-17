import {connect} from 'react-redux';
import { logout } from '../../actions/session_actions';
import Dashboard from './dashboard';


const mSTP = (state)=>{
    return {
        currenUser: state.session.user,
    }
}

const mDTP = (dispatch)=>{
    return {
        logout: ()=>dispatch(logout()),
    }
}

export default connect(mSTP, mDTP)(Dashboard);