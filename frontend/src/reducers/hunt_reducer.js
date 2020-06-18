import {RECEIVE_HUNT, REMOVE_HUNT, ERRORS_HUNT, RECEIVE_HUNTS} from '../actions/hunt_actions';


const HuntReducer = (state={}, action) => {
    debugger
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_HUNTS:
            return Object.assign({}, action.hunts)
        case RECEIVE_HUNT:
            const nextState = Object.assign({}, state);
            nextState[action.hunt._id] = action.hunt;
            return nextState;
        default:
            return state;
    }
};

export default HuntReducer;