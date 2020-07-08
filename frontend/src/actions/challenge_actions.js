import * as APIUtil from '../util/challenge_util';

export const RECEIVE_CHALLENGES = "RECEIVE_CHALLENGES";
export const RECEIVE_MY_CHALLENGES = "RECEIVE_MY_CHALLENGES";
export const RECEIVE_MY_CHALLENGE = "RECEIVE_MY_CHALLENGE";
export const RECEIVE_COMPLETE_CHALLENGE = "RECEIVE_COMPLETE_CHALLENGE";
export const ERRORS_COMPLETE_CHALLENGE = "ERRORS_COMPLETE_CHALLENGE";
export const REMOVE_MY_CHALLENGE = "REMOVE_MY_CHALLENGE";

const receiveChallenges = challenges =>({
    type: RECEIVE_CHALLENGES,
    challenges
});

const receiveCompleteChallenge = challenge =>({
    type: RECEIVE_COMPLETE_CHALLENGE,
    challenge
});

const errorsCompleteChallenge = errors =>({
    type: ERRORS_COMPLETE_CHALLENGE,
    errors
})

const receiveMyChallenges = challenges =>({
    type: RECEIVE_MY_CHALLENGES,
    challenges
});

const receiveMyChallenge = challenge =>({
    type: RECEIVE_MY_CHALLENGE,
    challenge
});

export const removeMyChallenge = challengeId =>({
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


export const addToMyChallenge = (challenge)=>dispatch =>{
   return APIUtil.addToMyChallenge(challenge._id).then(
        () => {
           return dispatch(receiveMyChallenge(challenge))
        }
    )
};

export const completeChallenge = (challenge) => dispatch =>{
    return APIUtil.completeChallenge(challenge).then(
         (challenge) => {
            return dispatch(receiveCompleteChallenge(challenge.data));
         },
         (errors) => {
             return dispatch(errorsCompleteChallenge(errors.response.data));
         }
     )
 };

export const deleteChallenge = (challengeId) => dispatch =>{
 return   APIUtil.deleteChallenge(challengeId).then(
        (res) => dispatch(removeMyChallenge(challengeId))
    )
    };


export const fetchMyChallenges = () => dispatch =>{
   return APIUtil.fetchMyChallenges().then(
        (challenges) => {
           return dispatch(receiveMyChallenges(challenges.data));
        }
    )
};

