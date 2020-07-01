import {connect} from 'react-redux';
import MyChallenges from './my_challenges';
import {fetchMyChallenges, addPlayChallenge} from '../../actions/challenge_actions'

const mSTP = state => (
    {
        challenges: state.session.user.myChallengesData ? Object.values(state.session.user.myChallengesData): [[]],
    }
);

const mDTP = dispatch => (
    {
        fetchMyChallenges: ()=>dispatch(fetchMyChallenges()),
        addPlayChallenge: (challenge)=>dispatch(addPlayChallenge(challenge))
    }
);

export default connect(mSTP, mDTP)(MyChallenges);