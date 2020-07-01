import * as APIUtil from '../util/challenge_util';
import { ERRORS_USER_HUNT } from './user_hunt_actions';

export const RECEIVE_CHALLENGES = "RECEIVE_CHALLENGES";
export const RECEIVE_MY_CHALLENGES = "RECEIVE_MY_CHALLENGES";
export const RECEIVE_MY_CHALLENGES_DATA = "RECEIVE_MY_CHALLENGES_DATA";
export const RECEIVE_PLAY_CHALLENGE = "RECEIVE_PLAY_CHALLENGE";
export const ERRORS_PLAY_CHALLENGE = "ERRORS_PLAY_CHALLENGE";
export const REMOVE_MY_CHALLENGES = "REMOVE_MY_CHALLENGES";

const receiveChallenges = challenges =>({
    type: RECEIVE_CHALLENGES,
    challenges
});

const receiveMyChallenges = challengeId =>({
    type: RECEIVE_MY_CHALLENGES,
    challengeId
});

const receivePlayChallenge = challenge =>({
    type: RECEIVE_PLAY_CHALLENGE,
    challenge
});

const errorsPlayChallenge = errors =>({
    type: ERRORS_PLAY_CHALLENGE,
    errors
})

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

export const addPlayChallenge= (challenge)=>dispatch =>{
    return APIUtil.addPlayChallenge(challenge).then(
         (challenge) => {
            return dispatch(receivePlayChallenge(challenge.data));
         },
         (errors) => {
             return dispatch(errorsPlayChallenge(errors.response.data));
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

