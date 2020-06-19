import React from 'react';
import { 
    AuthRoute, ProtectedRoute, SPLASH, AUTH, DASH, INDEX, CREATE, CINDEX, MYCHALL
} from '../util/route_util';
import { Route, Switch, Link } from 'react-router-dom';

import CreateFormContainer from './hunt/create_form_container';
import HeaderContainer from './global/header_container';
import Footer from './global/footer';
import Splash from './main/splash';
import SessionFormContainer from './session/session_form_container';
import DashboardContainer from './dashboard/dashboard_contianer';
import HuntsIndexPageContainer from './hunt/hunts_index_page_container';
import MyChallengesContainer from './challenge/my_challenges_container';
// import ChallengeIndexContainer from './challenge/challenge_index_container';

const App = () => (
    <div className='app'>
        <HeaderContainer />
            <Switch>
                <AuthRoute exact path={SPLASH} component={Splash} />
                <AuthRoute exact path={AUTH} component={SessionFormContainer} />
                <ProtectedRoute exact path={DASH} component={DashboardContainer} />
                <ProtectedRoute exact path={CREATE} component={CreateFormContainer} />
                <ProtectedRoute exact path={INDEX} component={HuntsIndexPageContainer} />
                {/* <ProtectedRoute exact path={CINDEX} component={ChallengeIndexContainer} /> */}
                <ProtectedRoute exact path={MYCHALL} component={MyChallengesContainer} />
            </Switch>
         <Footer />
    </div>
);

export default App;