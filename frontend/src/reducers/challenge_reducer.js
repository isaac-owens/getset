import {RECEIVE_CHALLENGES} from '../actions/challenge_actions';


const ChallengeReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
      case RECEIVE_CHALLENGES:
        debugger 
            const nextState = Object.assign({}, action.challenges);
            return nextState
        default:
            return state;
    }
};

export default ChallengeReducer;