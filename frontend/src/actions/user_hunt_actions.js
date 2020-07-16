import * as APIUtil from '../util/user_hunt_util';

export const RECEIVE_USER_HUNT = "RECEIVE_USER_HUNT";
export const RECEIVE_USER_HUNTS = "RECEIVE_USER_HUNTS";
export const REMOVE_USER_HUNT = "REMOVE_USER_HUNT";
export const ERRORS_USER_HUNT = "ERRORS_USER_HUNT"

const receiveUserHunt = hunt =>({
    type: RECEIVE_USER_HUNT,
    hunt
});

const receiveUserHunts = hunts =>({
    type: RECEIVE_USER_HUNTS,
    hunts
});


const receiveUserErrors = errors =>({
    type: ERRORS_USER_HUNT,
    errors
});

const removeUserHunt = huntId => ({
  type: REMOVE_USER_HUNT,
  huntId
})

export const fetchUserHunts = userId => dispatch =>(
    APIUtil.fetchUserHunts(userId).then(
        hunts => dispatch(receiveUserHunts(hunts.data))
    )
);

export const fetchUserHunt = huntId => dispatch =>(
    APIUtil.fetchUserHunt(huntId).then(
        hunt => dispatch(receiveUserHunts(hunt.data))
    )
);

export const createUserHunt = hunt => dispatch =>(
    APIUtil.createUserHunt(hunt).then(
        hunt => {
          return dispatch(receiveUserHunt(hunt.data))
        },
        err => {
          return dispatch(receiveUserErrors(err.response.data))
        }
    )
);

export const deleteUserHunt = huntId => dispatch => {
 return APIUtil.deleteUserHunt(huntId).then(
    () => {
      return dispatch(removeUserHunt(huntId))
    },
    err => {
      return dispatch(receiveUserErrors(err.response.data))
    }
  )
}