import {connect} from 'react-redux';
import MyChallenges from './my_challenges';
import {
    fetchMyChallenges, 
    completeChallenge, 
    deleteChallenge,
    removeMyChallenge
} from '../../actions/challenge_actions';

const mSTP = state => {
  return  {
        challenges: state.session.user.myChallenges ? Object.values(state.session.user.myChallenges): [],
    };
};

const mDTP = dispatch => (
    {
        fetchMyChallenges: ()=>dispatch(fetchMyChallenges()),
        completeChallenge: (challenge)=>dispatch(completeChallenge(challenge)),
        deleteChallenge: (challengeId) => dispatch(deleteChallenge(challengeId)),
        removeMyChallenge: (challengeId) => dispatch(removeMyChallenge(challengeId)) 
    }
);

export default connect(mSTP, mDTP)(MyChallenges);