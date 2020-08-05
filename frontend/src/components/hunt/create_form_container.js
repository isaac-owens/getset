import {connect} from 'react-redux';
import{ createUserHunt } from '../../actions/user_hunt_actions';
import CreateForm from './create_form';
import {fetchCategories} from '../../actions/category_actions'

const mSTP = state => (
    {
        currentUser: state.session.currentUser,
        categories: Object.values(state.categories),
        errors: state.errors.hunt,
    }
);

const mDTP = dispatch => (
    {
        createUserHunt: hunt => dispatch(createUserHunt(hunt)),
        fetchCategories: () => dispatch(fetchCategories()),
    }
);

export default connect(mSTP, mDTP)(CreateForm);