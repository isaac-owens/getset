import { connect } from 'react-redux';
import { fetchUserHunts } from '../../actions/user_hunt_actions';
import HuntsIndexPage from './hunts_index_page';

const mSTP = state => {
  return {
    hunts: state.session.user.hunts? Object.values(state.session.user.hunts): [],
    currentUserId: state.session.user.id,
  }
}

const mDTP = dispatch => (
    {
      fetchUserHunts: hunts => dispatch(fetchUserHunts(hunts))
    }
)

export default connect(mSTP, mDTP)(HuntsIndexPage)