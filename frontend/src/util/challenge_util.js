import axios from 'axios';


export const fetchChallenges = ()=> (
    axios.get('/api/hunts')
);