import axios from 'axios';


export const fetchChallenges = ()=> (
    axios.get('/api/hunts')
);

export const fetchMyChallenges = ()=>{
   return axios.get('/api/hunts/my/challenges');
}

export const addToMyChallenges = (challegeId)=> (
    axios.post(`/api/hunts/add`, {hunt_id: challegeId})
);

export const deleteChallenges = (challegeId)=> (
    axios.delete('/api/hunts', {hunt_id: challegeId})
);

