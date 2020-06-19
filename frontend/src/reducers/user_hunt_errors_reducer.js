import { RECEIVE_USER_HUNTS, REMOVE_USER_HUNT, ERRORS_USER_HUNT } from '../actions/user_hunt_actions';

const _noErrors = [];

const SessionErrorsReducer = (state = _noErrors, action) => {
    Object.freeze(state);

    switch (action.type) {
        case ERRORS_USER_HUNT:
            return action.errors;
        case REMOVE_USER_HUNT:
        case RECEIVE_USER_HUNTS:
            return _noErrors;
        default:
            return state;
    }
};

export default SessionErrorsReducer;