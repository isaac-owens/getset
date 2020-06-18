import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import hunt from './hunt_reducer'
import categories from './category_reducer'

const RootReducer = combineReducers(
    {
        session,
        hunt,
        categories,
        errors
    }
);

export default RootReducer;