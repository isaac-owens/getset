import axios from 'axios';


export const fetchChallanges = ()=> (
    axios.get('/api/playhunts')
);