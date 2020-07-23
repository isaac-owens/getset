import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/root';
import configureStore from './store/store';
import { setAuthToken } from './util/session_util';
import { getToken, decodeToken } from './util/helper';

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

    } else {
        store = configureStore();
    }

    const root = document.getElementById('root');
    
    window.getState = store.getState();

    ReactDOM.render(<Root store={store} />, root);
});


