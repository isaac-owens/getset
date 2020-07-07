import axios from 'axios';

//is the .post refering to the method post
//or just a .chain method for axios
export const fetchUserHunts = userId => (
    axios.get(`/api/hunts/${userId}`)
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

// export const deleteUserHunt = huntId => (
//   axios({
//     method: 'delete',
//     url: `api/hunts/${huntId}`,
//   })
// )