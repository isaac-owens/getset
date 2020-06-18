import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import HuntErrorsReducer from './hunt_errors_reducer'
export default combineReducers(
    {
        session: SessionErrorsReducer,
        hunt:HuntErrorsReducer
    }
);