import { 
    RECEIVE_USER_LOGOUT, RECEIVE_CURRENT_USER
} from '../actions/session_actions';
import { 
    RECEIVE_USER_HUNTS, 
    RECEIVE_USER_HUNT 
} from '../actions/user_hunt_actions';
import {
    RECEIVE_MY_CHALLENGE, REMOVE_MY_CHALLENGE, RECEIVE_MY_CHALLENGES_DATA
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
            
        case RECEIVE_MY_CHALLENGE:
            if(nextState.user.myChallenges){
                nextState.user.myChallenges.push(action.challengeId);
            }else{
                nextState.user.myChallenges = [action.challengeId];
            }
            return nextState;
        case RECEIVE_MY_CHALLENGES_DATA:
            //add challanges data in user slice of state
            nextState.user.myChallengesData = action.challenges;

            //add challanges id in user slice of state
            nextState.user.myChallenges = Object.keys(action.challenges);
            return nextState;
        case REMOVE_MY_CHALLENGE:
            //delete challange from user myChallenges slice
            if(nextState.user.myChallenges){
                const index = nextState.user.myChallenges.indexOf(action.challengeId);
                nextState.user.myChallenges.splice(index,1);
                //delete challange from user myChallengesData slice
                if(nextState.user.myChallengesData)
                {
                    // debugger
                    // nextState.user.myChallengesData[action.challengeId] = "";
                    delete nextState.user.myChallengesData[action.challengeId];
                }
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