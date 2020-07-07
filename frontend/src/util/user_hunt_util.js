import axios from 'axios';


export const fetchUserHunts = userId => (
    axios.get(`/api/users/hunts/`)
);

export const fetchUserHunt = huntId => (
    axios.get(`/api/hunts/${huntId}`)
);

export const createUserHunt = hunt => (
    axios({
        method: 'post',
        url: '/api/hunts',
        data: hunt,
        headers: { 'Content-Type': 'multipart/form-data' }
    })
);