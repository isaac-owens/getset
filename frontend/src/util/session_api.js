import axios from 'axios';

export const setAuthToken = token => {
    //if exists = truthy
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } 
    //can pass 'false' or falsey is no token
    else{
        delete axios.defaults.headers.common['Authorization'];
    }  
};