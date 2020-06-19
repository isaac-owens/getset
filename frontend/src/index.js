import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/root';
import configureStore from './store/store';
import { setAuthToken } from './util/session_util';
import { getToken, decodeToken } from './util/helper';
import axios from 'axios';

import { fetchUserHunts } from './actions/user_hunt_actions';


document.addEventListener('DOMContentLoaded', () => {
    let store;
    const token = getToken();
    if (token) {
        setAuthToken(token);

        const decodedUser = decodeToken(token);

        const preState = {
            session: { 
                isAuthenticated: true,
                user: decodedUser
            }
        };

        store = configureStore(preState);

        store.dispatch(fetchUserHunts(decodedUser.id));
        // const currentTime = Date.now() / 1000;

        // // // If the user's token has expired
        // if (decodedUser.exp < currentTime) {
        //     // Logout the user and redirect to the login page
        //     store.dispatch(logout());
        //     // window.location.href = '/login';
        // }

    } else {
        store = configureStore();
    }

    const root = document.getElementById('root');
    
    window.getState = store.getState();

    ReactDOM.render(<Root store={store} />, root);
});


