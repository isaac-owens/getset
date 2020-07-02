import * as APIUtil from '../util/challenge_util';
import { ERRORS_USER_HUNT } from './user_hunt_actions';

export const RECEIVE_CHALLENGES = "RECEIVE_CHALLENGES";
export const RECEIVE_MY_CHALLENGE = "RECEIVE_MY_CHALLENGE";
export const RECEIVE_MY_CHALLENGES_DATA = "RECEIVE_MY_CHALLENGES_DATA";
export const RECEIVE_COMPLETE_CHALLENGE = "RECEIVE_COMPLETE_CHALLENGE";
export const ERRORS_COMPLETE_CHALLENGE = "ERRORS_COMPLETE_CHALLENGE";
export const REMOVE_MY_CHALLENGE = "REMOVE_MY_CHALLENGE";

const receiveChallenges = challenges =>({
    type: RECEIVE_CHALLENGES,
    challenges
});

const receiveMyChallenge = challengeId =>({
    type: RECEIVE_MY_CHALLENGE,
    challengeId
});

const receiveCompleteChallenge = challenge =>({
    type: RECEIVE_COMPLETE_CHALLENGE,
    challenge
});

const errorsCompleteChallenge = errors =>({
    type: ERRORS_COMPLETE_CHALLENGE,
    errors
})

const receiveMyChallengesData = challenges =>({
    type: RECEIVE_MY_CHALLENGES_DATA,
    challenges
});

const removeMyChallenge = challengeId =>({
    type: REMOVE_MY_CHALLENGE,
    challengeId
});

export const fetchChallenges = () => dispatch =>{
    return APIUtil.fetchChallenges().then(
        challenges => {
          return dispatch(receiveChallenges(challenges.data))
        }
    )
};


export const addToMyChallenge= (challengeId)=>dispatch =>{
   return APIUtil.addToMyChallenge(challengeId).then(
        () => {
           return dispatch(receiveMyChallenge(challengeId))
        }
    )
};

export const completeChallenge= (challenge)=>dispatch =>{
    return APIUtil.completeChallenge(challenge).then(
         (challenge) => {
            return dispatch(receiveCompleteChallenge(challenge.data));
         },
         (errors) => {
             return dispatch(errorsCompleteChallenge(errors.response.data));
         }
     )
 };

export const deleteChallenge= (challengeId)=>dispatch =>{
 return   APIUtil.deleteChallenge(challengeId).then(
        (res) => dispatch(removeMyChallenge(challengeId))
    )
    };


export const fetchMyChallenges= ()=>dispatch =>(
    APIUtil.fetchMyChallenges().then(
        (challenges) => dispatch(receiveMyChallengesData(challenges.data))
    )
);

