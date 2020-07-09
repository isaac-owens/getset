import axios from 'axios';


export const fetchChallenges = ()=> (
    axios.get('/api/challenges')
);

export const fetchMyChallenges = ()=>{
   return axios.get('/api/users/challenges');
}

export const addToMyChallenge = (challengeId)=> (
    axios.post(`/api/users/challenges`, {challenge_id: challengeId})
);

export const completeChallenge = (challenge)=> (
    axios({
        method: 'post',
        url: '/api/challenges',
        data: challenge,
        headers: { 'Content-Type': 'multipart/form-data' }
    })
);

export const receiveMyStats = () => (
  axios.get('/api/challenges/stats')
);

export const deleteChallenge = (challengeId)=> (
    axios.delete(`/api/users/challenges/${challengeId}`)
);

