import { 
    RECEIVE_USER_LOGOUT, RECEIVE_CURRENT_USER
} from '../actions/session_actions';
import { 
    RECEIVE_USER_HUNTS, 
    RECEIVE_USER_HUNT 
} from '../actions/user_hunt_actions';
import {
    RECEIVE_MY_CHALLENGES, REMOVE_MY_CHALLENGES, RECEIVE_MY_CHALLENGES_DATA
} from '../actions/challenge_actions';


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
            if (nextState.user.hunts) {
              nextState.user.hunts.push(action.hunt)
            } else {
              nextState.user.hunts = [action.hunt];
            }
            return nextState;
            
        case RECEIVE_MY_CHALLENGES:
            if(nextState.user.myChallenges){
                nextState.user.myChallenges.push(action.challengeId);
            }else{
                nextState.user.myChallenges = [action.challengeId];
            }
            return nextState;
        case RECEIVE_MY_CHALLENGES_DATA:
                nextState.user.myChallengesData = action.challenges;
            return nextState;
        case REMOVE_MY_CHALLENGES:
            if(nextState.user.myChallenges){
                const index = nextState.user.myChallenges.indexOf(action.challengeId);
                nextState.user.myChallenges.splice(index,1);
            }
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