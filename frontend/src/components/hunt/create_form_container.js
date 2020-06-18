import {connect} from 'react-redux';
import{ createHunt } from '../../actions/hunt_actions';
import CreateForm from './create_form';

const mSTP = state => (
    {
        currentUser: state.session.currentUser
    }
);

const mDTP = dispatch => (
    {
        createHunt: hunt => dispatch(createHunt(hunt))
    }
);

export default connect(mSTP, mDTP)(CreateForm);