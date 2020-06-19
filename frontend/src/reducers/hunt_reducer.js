import {RECEIVE_HUNT, REMOVE_HUNT, ERRORS_HUNT, RECEIVE_HUNTS} from '../actions/hunt_actions';


const HuntReducer = (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_HUNTS:
            // debugger
            for (let i = 0; i < action.hunts.length; i++) {
                const hunt = action.hunts[i];
                nextState[hunt._id] = hunt;
            }
            return nextState
        case RECEIVE_HUNT:
            nextState[action.hunt._id] = action.hunt;
            return nextState;
        default:
            return state;
    }
};

export default HuntReducer;