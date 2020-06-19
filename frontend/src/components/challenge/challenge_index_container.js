import {connect} from 'react-redux';
import ChallengeIndexPage from './challenge_index';
import {fetchChallenges} from '../../actions/challenge_actions'
import {fetchCategories} from '../../actions/category_actions'

const mSTP = state =>{
//   debugger
  return  {
        challenges: state.challenges,
        categories: Object.values(state.categories),
    }
}

const mDTP = dispatch =>(
    {
        fetchChallenges: () => dispatch(fetchChallenges()),
        fetchCategories: () => dispatch(fetchCategories())
    }
)

export default connect(mSTP, mDTP)(ChallengeIndexPage);