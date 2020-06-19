import axios from 'axios';

//is the .post refering to the method post
//or just a .chain method for axios
export const fetchHunts = hunts => (
    axios.get('/api/hunts', hunts)
);

export const fetchHunt = hunt => (
    axios.get(`/api/hunts/${hunt}`, hunt)
);

export const createHunt = hunt => (
    axios({
        method: 'post',
        url: '/api/hunts',
        data: hunt,
        headers: { 'Content-Type': 'multipart/form-data' }
    })
);