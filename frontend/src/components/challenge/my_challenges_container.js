import {connect} from 'react-redux';
import MyChallenges from './my_challenges';
import {fetchMyChallenges} from '../../actions/challenge_actions'

const mSTP = state => (
    {
        challenges: state.session.user.myChallengesData ? Object.values(state.session.user.myChallengesData): [[]],
    }
);

const mDTP = dispatch => (
    {
        fetchMyChallenges: ()=>dispatch(fetchMyChallenges())
    }
);

export default connect(mSTP, mDTP)(MyChallenges);