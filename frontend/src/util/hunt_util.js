import axios from 'axios';

//is the .post refering to the method post
//or just a .chain method for axios
export const fetchHunts = hunts => (
    axios.post('/api/hunts', hunts)
);

export const fetchHunt = hunt => (
    axios.post(`/api/hunts/${hunt}`, hunt)
);

export const createHunt = hunt => (
    axios.post('/api/hunts', hunt)
);

