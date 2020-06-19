import axios from 'axios';

//is the .post refering to the method post
//or just a .chain method for axios
export const fetchHunts = userId => (
    axios.get(`/api/hunts/${userId}`)
);

export const fetchHunt = huntId => (
    axios.get(`/api/hunts/${huntId}`)
);

export const createHunt = hunt => (
    axios({
        method: 'post',
        url: '/api/hunts',
        data: hunt,
        headers: {'Content-Type': 'multipart/form-data' }
        })
);

