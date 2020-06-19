import * as APIUtil from '../util/challenge_util';

export const RECEIVE_CHALLENGES = "RECEIVE_CHALLENGES";


const receiveChallenges = challenges =>({
    type: RECEIVE_CHALLENGES,
    challenges
});

export const fetchChallenges = () => dispatch =>{
    return APIUtil.fetchChallenges().then(
        challenges => {
          return dispatch(receiveChallenges(challenges.data))
        }
    )
};
