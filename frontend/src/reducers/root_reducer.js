import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import categories from './category_reducer'
import challenges from './challenge_reducer'

const RootReducer = combineReducers(
    {
        session,
        categories,
        challenges,
        errors
    }
);

export default RootReducer;