import * as APIUtil from '../util/hunt_util';

export const RECEIVE_HUNT = "RECEIVE_HUNT";
export const RECEIVE_HUNTS = "RECEIVE_HUNTS";
export const REMOVE_HUNT = "REMOVE_HUNT";

const receiveHunt = hunt =>({
    type: RECEIVE_HUNT,
    hunt
});

const receiveHunts = hunts =>({
    type: RECEIVE_HUNTS,
    hunts
});

const removeHunt = () =>({
    type: REMOVE_HUNT
});

export const fetchHunts = hunts => dispatch =>(
    APIUtil.fetchHunts(hunts).then(
        hunts => dispatch(receiveHunts(hunts))
    )
);

export const createHunt = hunt => dispatch =>(
    APIUtil.createHunt(hunt).then(
        hunt => dispatch(receiveHunt(hunt))
    )
);