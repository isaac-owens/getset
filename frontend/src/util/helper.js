import jwt_decode from 'jwt-decode';

export const decodeToken = (token)=>{
    //send decode user data
    return jwt_decode(localStorage.jwtToken);
}

//save auth token to jwtToken 
export const saveTokenLocally=(token)=>{
    localStorage.setItem('jwtToken', token);
}

export const getToken=()=>{
    return localStorage.getItem('jwtToken');
}

export const removeTokenLocally =()=>{
    localStorage.removeItem('jwtToekn');
}