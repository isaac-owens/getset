import { 
    RECEIVE_USER_LOGOUT, RECEIVE_CURRENT_USER
} from '../actions/session_actions';
import { RECEIVE_USER_HUNTS, RECEIVE_USER_HUNT } from '../actions/user_hunt_actions';


const initialState = {
    isAuthenticated: false,
    user: {}
};



const SessionReducer = (state = initialState, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!action.currentUser,
                user: action.currentUser
            };
        case RECEIVE_USER_HUNTS:
                nextState.user.hunts = action.hunts;
            return nextState;
        case RECEIVE_USER_HUNT:
            nextState.user.hunts.push(action.hunt);
            return nextState;
        case RECEIVE_USER_LOGOUT:
            return {
                isAuthenticated: false,
                user: undefined
            };
        default:
            return state;
    }
};

export default SessionReducer;