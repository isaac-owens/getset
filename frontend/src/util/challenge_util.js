import axios from 'axios';


export const fetchChallenges = ()=> (
    axios.get('/api/hunts')
);

export const fetchMyChallenges = ()=>{
   return axios.get('/api/hunts/my/challenges');
}

export const addToMyChallenge = (challengeId)=> (
    axios.post(`/api/hunts/add`, {hunt_id: challengeId})
);

export const completeChallenge = (challenge)=> (
    axios({
        method: 'post',
        url: '/api/playhunts',
        data: challenge,
        headers: { 'Content-Type': 'multipart/form-data' }
    })
);


export const deleteChallenge = (challengeId)=> (
    axios.delete('/api/hunts', {hunt_id: challengeId})
);

