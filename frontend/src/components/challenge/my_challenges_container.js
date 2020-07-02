import {connect} from 'react-redux';
import MyChallenges from './my_challenges';
import {
    fetchMyChallenges, 
    completeChallenge, 
    deleteChallenge
} from '../../actions/challenge_actions'

const mSTP = state => {
  return  {
        challenges: state.session.user.myChallenges ? Object.values(state.session.user.myChallenges): [],
    }
};

const mDTP = dispatch => (
    {
        fetchMyChallenges: ()=>dispatch(fetchMyChallenges()),
        completeChallenge: (challenge)=>dispatch(completeChallenge(challenge)),
        deleteChallenge: (challengeId) => dispatch(deleteChallenge(challengeId)), 
    }
);

export default connect(mSTP, mDTP)(MyChallenges);