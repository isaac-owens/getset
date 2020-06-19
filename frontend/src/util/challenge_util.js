import axios from 'axios';


export const fetchChallenges = ()=> (
    axios.get('/api/hunts')
);

export const addToMyChallenges = (challegeId)=> (
    axios.post(`/api/hunts/add`, challegeId)
);

export const deleteChallenges = (challegeId)=> (
    axios.delete('/api/hunts', challegeId)
);

