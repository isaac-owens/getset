import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { HashRouter } from 'react-router-dom';
import '../stylesheets/application.scss';
import { usePromiseTracker } from "react-promise-tracker";


export const LoadingIndicator = (props) => {
  const { promiseInProgress } = usePromiseTracker();
    // debugger
  return promiseInProgress && <div className="test-modal">Hey some async call in progress ! </div>;
};

const Root = ({ store }) =>(
    <Provider store={store}>
        <HashRouter>
            <App />
            {/* <LoadingIndicator /> */}
        </HashRouter>
    </Provider>
)

export default Root;