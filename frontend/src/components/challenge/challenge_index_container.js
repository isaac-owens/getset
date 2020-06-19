import {connect} from 'react-redux';
import ChallengeIndexPage from './challenge_index';
import {fetchChallenges, addToMyChallenges, deleteChallenges} from '../../actions/challenge_actions'
import {fetchCategories} from '../../actions/category_actions'

const mSTP = state =>{
    // debugger
  return  {
        challenges: state.challenges,
        categories: Object.values(state.categories),
        myChallenges: state.session.user.myChallenges ? state.session.user.myChallenges : []
    }
}

const mDTP = dispatch =>(
    {
        fetchChallenges: () => dispatch(fetchChallenges()),
        addToMyChallenges: (id) => dispatch(addToMyChallenges(id)),
        deleteChallenges: (id) => dispatch(deleteChallenges(id)),
        fetchCategories: () => dispatch(fetchCategories())
    }
)

export default connect(mSTP, mDTP)(ChallengeIndexPage);