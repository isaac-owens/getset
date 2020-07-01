import * as APIUtil from '../util/challenge_util';

export const RECEIVE_CHALLENGES = "RECEIVE_CHALLENGES";
export const RECEIVE_MY_CHALLENGES = "RECEIVE_MY_CHALLENGES";
export const RECEIVE_MY_CHALLENGES_DATA = "RECEIVE_MY_CHALLENGES_DATA";
export const RECEIVE_PLAYED_CHALLENGES = "RECEIVE_PLAYED_CHALLENGES";
export const REMOVE_MY_CHALLENGES = "REMOVE_MY_CHALLENGES";

const receiveChallenges = challenges =>({
    type: RECEIVE_CHALLENGES,
    challenges
});

const receiveMyChallenges = challengeId =>({
    type: RECEIVE_MY_CHALLENGES,
    challengeId
});

const receivePlayedChallenges = challengeId =>({
    type: RECEIVE_PLAYED_CHALLENGES,
    challengeId
});

const receiveMyChallengesData = challenges =>({
    type: RECEIVE_MY_CHALLENGES_DATA,
    challenges
});

const removeMyChallenges = challengeId =>({
    type: REMOVE_MY_CHALLENGES,
    challengeId
});

export const fetchChallenges = () => dispatch =>{
    return APIUtil.fetchChallenges().then(
        challenges => {
          return dispatch(receiveChallenges(challenges.data))
        }
    )
};


export const addToMyChallenges= (challengeId)=>dispatch =>{
   return APIUtil.addToMyChallenges(challengeId).then(
        () => {
           return dispatch(receiveMyChallenges(challengeId))
        }
    )
    };

export const deleteChallenges= (challengeId)=>dispatch =>(
    APIUtil.deleteChallenges(challengeId).then(
        () => dispatch(removeMyChallenges(challengeId))
    )
);


export const fetchMyChallenges= ()=>dispatch =>(
    APIUtil.fetchMyChallenges().then(
        (challenges) => dispatch(receiveMyChallengesData(challenges.data))
    )
);

