import {RECEIVE_MY_STATS} from '../actions/challenge_actions';


const StatsReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
      case RECEIVE_MY_STATS:
        const nextState = Object.assign({}, action.stats);
        return nextState
      default:
        return state;
    }
};

export default StatsReducer;