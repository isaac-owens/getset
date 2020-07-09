import {connect} from 'react-redux';
import ChallengeIndexPage from './challenge_index';
import {fetchChallenges, addToMyChallenge, deleteChallenge} from '../../actions/challenge_actions'
import {fetchCategories} from '../../actions/category_actions'

const mSTP = state =>{
  return  {
        challenges: state.challenges,
        categories: Object.values(state.categories),
        myChallenges: state.session.user.myChallenges ? state.session.user.myChallenges : []
    }
}

const mDTP = dispatch =>(
    {
        fetchChallenges: () => dispatch(fetchChallenges()),
        addToMyChallenge: (id) => dispatch(addToMyChallenge(id)),
        deleteChallenge: (id) => dispatch(deleteChallenge(id)),
        fetchCategories: () => dispatch(fetchCategories())
    }
)

export default connect(mSTP, mDTP)(ChallengeIndexPage);