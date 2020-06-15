import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch, Link } from 'react-router-dom';

import Header from './global/header_container';
import Footer from './global/footer_container';
import Splash from './main/splash';
import SessionFormContainer from './session/session_form_container';


const App = () => (
    <div className='app'>
        <Header />
        <Switch>
            <Route exact path="/" component={Splash} />
            <AuthRoute exact path="/session" component={SessionFormContainer} />
        </Switch>
        <Footer />
    </div>
);

export default App;