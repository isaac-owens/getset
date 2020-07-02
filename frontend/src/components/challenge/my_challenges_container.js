import {connect} from 'react-redux';
import MyChallenges from './my_challenges';
import {
    fetchMyChallenges, 
    completeChallenge, 
    deleteChallenge
} from '../../actions/challenge_actions'

const mSTP = state => {
  return  {
        challenges: state.session.user.myChallengesData ? Object.values(state.session.user.myChallengesData): [[]],
    }
};

const mDTP = dispatch => (
    {
        fetchMyChallenges: ()=>dispatch(fetchMyChallenges()),
        completeChallenge: (challenge)=>dispatch(completeChallenge(challenge)),
        deleteChallenge: (id) => dispatch(deleteChallenge(id)), 
    }
);

export default connect(mSTP, mDTP)(MyChallenges);