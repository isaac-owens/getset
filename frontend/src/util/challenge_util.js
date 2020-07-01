import axios from 'axios';


export const fetchChallenges = ()=> (
    axios.get('/api/hunts')
);

export const fetchMyChallenges = ()=>{
   return axios.get('/api/hunts/my/challenges');
}

export const addToMyChallenges = (challengeId)=> (
    axios.post(`/api/hunts/add`, {hunt_id: challengeId})
);

export const addPlayChallenge = (challenge)=> (
    axios({
        method: 'post',
        url: '/api/playhunts',
        data: challenge,
        headers: { 'Content-Type': 'multipart/form-data' }
    })
);

export const deleteChallenges = (challengeId)=> (
    axios.delete('/api/hunts', {hunt_id: challengeId})
);

