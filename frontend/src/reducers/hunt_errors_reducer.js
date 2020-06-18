import { RECEIVE_HUNT, RECEIVE_HUNTS, ERRORS_HUNT } from '../actions/hunt_actions';

const _noErrors = [];

const SessionErrorsReducer = (state = _noErrors, action) => {
    Object.freeze(state);

    switch (action.type) {
        case ERRORS_HUNT:
            return action.errors;
        case RECEIVE_HUNT:
        case RECEIVE_HUNTS:
            return _noErrors;
        default:
            return state;
    }
};

export default SessionErrorsReducer;