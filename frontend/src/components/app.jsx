import React from 'react';
import { AuthRoute, ProtectedRoute, SPLASH, AUTH } from '../util/route_util';
import { Route, Switch, Link } from 'react-router-dom';

import Header from './global/header';
import Footer from './global/footer';
import Splash from './main/splash';
import SessionFormContainer from './session/session_form_container';


const App = () => (
    <div className='app'>
        <Header />
            <Switch>
                <AuthRoute exact path={SPLASH} component={Splash} />
                <AuthRoute exact path={AUTH} component={SessionFormContainer} />
            </Switch>
         <Footer />
    </div>
);

export default App;