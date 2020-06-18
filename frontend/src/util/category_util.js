import axios from 'axios';


export const fetchCategory = ()=> (
    axios.get('/api/categories')
);