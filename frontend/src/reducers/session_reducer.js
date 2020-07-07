import { 
    RECEIVE_USER_LOGOUT, RECEIVE_CURRENT_USER
} from '../actions/session_actions';
import { 
    RECEIVE_USER_HUNTS, 
    RECEIVE_USER_HUNT, 
    REMOVE_USER_HUNT
} from '../actions/user_hunt_actions';
import {
    RECEIVE_MY_CHALLENGE, REMOVE_MY_CHALLENGE, RECEIVE_MY_CHALLENGES
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

        // case REMOVE_USER_HUNT:

            
        case RECEIVE_MY_CHALLENGE:

            //initialize my challenge with empty object if not exist
            if(!nextState.user.myChallenges){
                nextState.user.myChallenges = {};
            }

            //add challenge to user slice of state
            nextState.user.myChallenges[action.challenge._id] = [action.challenge];

            return nextState;
        case RECEIVE_MY_CHALLENGES:

            //add challanges in user slice of state
            nextState.user.myChallenges = action.challenges;

            return nextState;
        case REMOVE_MY_CHALLENGE:
            //delete challange from user myChallenges slice
            if(nextState.user.myChallenges)
            {
                delete nextState.user.myChallenges[action.challengeId];
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